<?php

namespace Fuji\Service\AppApiClient;

/**
 * Amazon Api Client class.
 *
 */
final class Amazon {
  private $baseurl = "http://ecs.amazonaws.jp/onca/xml";
  private $params  = [
    "Service"=>"AWSECommerceService", "Version"=>"2011-07-27"
  ];

  function __construct() {
    $this->access_key = getenv('ACCESS_KEY');
    $this->secret_key = getenv('SECRET_KEY');
    $this->associ_tag = getenv('ASSOCI_TAG');
  }

  public function fetchItemLookup($options) {
    $options = array_merge($this->params, $options);
    $options['AssociateTag']    = $this->associ_tag;
    $options['AWSAccessKeyId']  = $this->access_key;
    $options["Operation"]       = "ItemLookup";
    $options['Timestamp']       = gmdate( "Y-m-d\TH:i:s\Z" );

    $query = $this->query($options);
    $signature = $this->signature($query);
    $request = $this->request($query, $signature);
    return $this->getItem($request);
  }

  public function fetchTopItems($options) {
    $options = array_merge($this->params, $options);
    $options['AssociateTag']    = $this->associ_tag;
    $options['AWSAccessKeyId']  = $this->access_key;
    $options["Operation"]       = "BrowseNodeLookup";
    $options['Timestamp']       = gmdate( "Y-m-d\TH:i:s\Z" );

    $query = $this->query($options);
    $signature = $this->signature($query);
    $request = $this->request($query, $signature);
    return $this->getTopItems($request);
  }

  public function fetchItemSearch($options) {
    $options = array_merge($this->params, $options);
    $options['AssociateTag']    = $this->associ_tag;
    $options['AWSAccessKeyId']  = $this->access_key;
    $options["Operation"]       = "ItemSearch";
    $options['Timestamp']       = gmdate( "Y-m-d\TH:i:s\Z" );

    $query = $this->query($options);
    $signature = $this->signature($query);
    $request = $this->request($query, $signature);
    return $this->getItems($request);
  }

  public function fetchBrowseNodeLookup($options) {
    $options = array_merge($this->params, $options);
    $options['AssociateTag']    = $this->associ_tag;
    $options['AWSAccessKeyId']  = $this->access_key;
    $options["Operation"]       = "BrowseNodeLookup";
    $options['Timestamp']       = gmdate( "Y-m-d\TH:i:s\Z" );

    $query = $this->query($options);
    $signature = $this->signature($query);
    $request = $this->request($query, $signature);
    return $this->getNodes($request);
  }

  private function getItem($request) {
    $xml =  $this->parseXml($request);
    if (!empty($xml->Items->Request->Errors))
      logger()->error($xml->Items->Request->Errors->Error->Message);
    return $xml->Items;
  }

  private function getTopItems($request) {
    $xml =  $this->parseXml($request);
    if (!empty($xml->BrowseNodes->Request->Errors))
      logger()->error($xml->BrowseNodes->Request->Errors->Error->Message);
    return $xml->BrowseNodes->BrowseNode->TopItemSet->TopItem;
  }

  private function getItems($request) {
    $xml =  $this->parseXml($request);
    if (!empty($xml->Items->Request->Errors))
      logger()->error($xml->Items->Request->Errors->Error->Message);
    return $xml->Items;
  }

  private function getNodes($request) {
    $xml =  $this->parseXml($request);
    if (!empty($xml->BrowseNodes->Request->Errors))
      logger()->error($xml->BrowseNodes->Request->Errors->Error->Message);
    return $xml->BrowseNodes->BrowseNode->Children->BrowseNode;
  }

  private function parseXml($url) {
    $client = new \GuzzleHttp\Client();
    return simplexml_load_string($client->get($url)->getBody());
  }

  private function urlencode_rfc3986($str) {
    return str_replace('%7E', '~', rawurlencode($str));
  }

  private function query($options) {
    ksort($options);
    $query = "";
    foreach ( $options as $key => $value ) {
      $query .= "&" . $this->urlencode_rfc3986($key)
        . "=" . $this->urlencode_rfc3986($value);
    }
    return substr($query, 1);
  }

  private function signature($query) {
    $parsed_url = parse_url($this->baseurl);
    $string = "GET\n" . $parsed_url["host"] . "\n"
      . $parsed_url["path"] . "\n" . $query;
    return base64_encode(hash_hmac("sha256", $string
      , $this->secret_key, true));
  }

  private function request($query, $signature) {
    return  $this->baseurl . "?" . $query
      . "&Signature=" . $this->urlencode_rfc3986($signature);
  }
}
