<?php

namespace S035779\Fuji;

require __DIR__ . '/../inc/bootstrap.php';
require __DIR__ . '/../php/services/AppApiClient.php';

use Thrift\Protocol\TBinaryProtocol;
use Thrift\Protocol\TJSONProtocol;
use Thrift\Protocol\TSimpleJSONProtocol;
use Thrift\Transport\TPhpStream;
use Thrift\Transport\TBufferedTransport;
use Fuji\Item\ItemServiceIf;
use Fuji\Item\ItemServiceProcessor;
use Fuji\Item\Tops;
use Fuji\Item\Item;
use Fuji\Item\Node;;

use Fuji\Service\AppApiClient\Amazon;

class ItemServiceHandler implements ItemServiceIf {
  public function NewReleases($node_id) {
    $amazon = new Amazon();
    $Items = $amazon->fetchTopItems([
      'BrowseNodeId'    => $node_id
      , "ResponseGroup" => 'NewReleases'
    ]);
    return $this->mapTops($Items);
  }

  public function BestSellers($node_id) {
    $amazon = new Amazon();
    $Items = $amazon->fetchTopItems([
      'BrowseNodeId'    => $node_id
      , "ResponseGroup" => 'TopSellers'
    ]);
    return $this->mapTops($Items);
  }

  public function ReleaseDate($node_id, $category, $page) {
    $amazon = new Amazon();
    $Items = $amazon->fetchItemSearch([
      'BrowseNode'      => $node_id
      , 'SearchIndex'   => $category
      , 'ItemPage'      => $page
      , 'Sort'          => '-release-date'
      , 'ResponseGroup' => 'Large'
    ]);
    return $this->mapItems($Items->Item);
  }

  public function SalesRanking($node_id, $category, $page) {
    $amazon = new Amazon();
    $Items = $amazon->fetchItemSearch([
      'BrowseNode'      => $node_id
      , 'SearchIndex'   => $category
      , 'ItemPage'      => $page
      , 'Sort'          => 'salesrank'
      , 'ResponseGroup' => 'Large'
    ]);
    return $this->mapItems($Items->Item);
  }
  
  public function NodeList($node_id) {
    $amazon = new Amazon();
    $Items = $amazon->fetchBrowseNodeLookup([
      'BrowseNodeId'    => $node_id
      , 'ResponseGroup' => 'BrowseNodeInfo'
    ]);
    return $this->mapNode($Items);
  }

  public function ItemLookup($item_id, $id_type) {
    $amazon = new Amazon();
    $Items = $amazon->fetchItemLookup([
      'IdType'          => $id_type
      , 'ItemId'        => $item_id
      , 'ResponseGroup' => 'Large'
    ]);
    return $this->mapItems($Items->Item);
  }

  public function ItemList($keyword, $page) {
    $amazon = new Amazon();
    $Items = $amazon->fetchItemSearch([
      'Keywords'        => $keyword
      , 'ItemPage'      => $page
      , 'SearchIndex'   => 'All'
      , 'ResponseGroup' => 'Large'
    ]);
    return $this->mapItems($Items->Item);
  }

  private function mapTops($items) {
    $results = [];
    foreach($items as $item) {
      array_push($results, $this->setTops($item));
    }
    return $results;
  }

  private function mapItems($items) {
    $results = [];
    foreach($items as $item) {
      array_push($results, $this->setItems($item));
    }
    return $results;
  }

  private function mapNode($items) {
    $results = [];
    foreach($items as $item) {
      array_push($results, $this->setNode($item));
    }
    return $results;
  }

  private function setTops($item) {
    return new Tops([
      'ASIN' =>  
        empty($item->ASIN) ? ''  : $item->ASIN,
      'Title' =>  
        empty($item->Title) ? ''  : $item->Title,
      'ItemUrl' => 
        empty($item->DetailPageURL) ? ''  : $item->DetailPageURL,
      'Category' => 
        empty($item->ProductGroup) ? ''  : $item->ProductGroup,
    ]);
  }

  private function setItems($item) {
    return new Item([
      'Rank' => 
        empty($item->SalesRank) 
        ? 0   : $item->SalesRank,
      'ASIN' => 
        empty($item->ASIN) 
        ? ''  : $item->ASIN,
      'Title' => 
        empty($item->ItemAttributes->Title) 
        ? ''  : $item->ItemAttributes->Title,
      'Release' => 
        empty($item->ItemAttributes->ReleaseDate)
        ? ''  : $item->ItemAttributes->ReleaseDate,
      'ItemUrl' => 
        empty($item->DetailPageURL)
        ? ''  : $item->DetailPageURL,
      'ImageUrl' => 
        empty($item->MediumImage->URL)
        ? ''  : $item->MediumImage->URL,
      'ListPrice' => 
        empty($item->ItemAttributes->ListPrice->Amount)
        ? 0   : $item->ItemAttributes->ListPrice->Amount,
      'LowestNewPrice' => 
        empty($item->OfferSummary->LowestNewPrice->Amount) 
        ? 0   : $item->OfferSummary->LowestNewPrice->Amount,
      'LowestUsedPrice' => 
        empty($item->OfferSummary->LowestUsedPrice->Amount) 
        ? 0   : $item->OfferSummary->LowestUsedPrice->Amount,
      'OfferPrice' => 
        empty($item->Offers->Offer->OfferListing->Price->Amount)
        ? 0   : $item->Offers->Offer->OfferListing->Price->Amount,
    ]);
  }

  private function setNode($item) {
    return new Node([
      'BrowseNode' => 
        empty($item->BrowseNodeId) 
        ? 0   : $item->BrowseNodeId,
      'Name' => 
        empty($item->Name) 
        ? ''  : $item->Name,
    ]);
  }

  private function trace_log($arr) {
    file_put_contents('php://stderr', print_r($arr, TRUE));
  }
}

try {
  $handler = new ItemServiceHandler();
  $processor = new ItemServiceProcessor($handler);
  //$transport = new TBufferedTransport( new TPhpStream(TPhpStream::MODE_R | TPhpStream::MODE_W));
  $transport = new TPhpStream(TPhpStream::MODE_R | TPhpStream::MODE_W);
  //$protocol = new TSimpleJSONProtocol($transport);
  $protocol = new TJSONProtocol($transport);
  //$protocol = new TBinaryProtocol($transport, true, true);
  header('Content-Type','application/x-thrift');
  $transport->open();
  $processor->process($protocol, $protocol);
  $transport->close();
} catch (Exception $ex) {
  file_put_contents('php://stderr', print_r($ex, TRUE));
}
