import R from 'ramda';
import Rx from 'rx';
import std from './stdutils';
import net from './netutils';
import { logs as log } from './logutils';

const baseurl = 'http://ecs.amazonaws.jp/onca/xml';
const params = {
  Service:   'AWSECommerceService'
  , Version: '2011-07-27'
}

const pspid = 'AMZApiClient';
/**
 * Amazon Api Client class.
 *
 * @constructor
 * @param {string} access_key - The access key for this application.
 * @param {string} secret_key - The secret key for this application.
 * @param {string} associ_tag - The associate tag for this application.
 */
class Amazon {
  constructor(access_key, secret_key, associ_tag) {
    this.access_key = access_key;
    this.secret_key = secret_key;
    this.associ_tag = associ_tag;
  }

  static of({ access_key, secret_key, associ_tag }) {
    return new Amazon(access_key, secret_key, associ_tag);
  }

  request(operation, options) {
    options = Object.assign({}, params, options);
    options['AssociateTag']   = this.associ_tag;
    options['AWSAccessKeyId'] = this.access_key;
    options['Operation']      = operation;
    options['Timestamp']      = std.getTimeStamp();
    const query = this.query(options);
    const signature = this.signature(query);
    const url = this.url(query, signature);

    return new Promise((resolve, reject) => {
      net.get(url, (stat, head, body) => {
        if(stat !== 200) reject(new Error(body));
        resolve(body);
      });
    });
  }

  fetchNewReleases(node_id) {
    return Rx.Observable
      .fromPromise(this.getNewReleases(node_id))
      .flatMap(this.parseXml)
      .map(this.setTopItems)
      .flatMap(this.forItemLookup.bind(this))
      .flatMap(this.forParseXml.bind(this))
      .map(this.forItem.bind(this));
  }

  fetchBestSellers(node_id) {
    return Rx.Observable
      .fromPromise(this.getBestSellers(node_id))
      .flatMap(this.parseXml)
      .map(this.setTopItems)
      .flatMap(this.forItemLookup.bind(this))
      .flatMap(this.forParseXml.bind(this))
      .map(this.forItem.bind(this));
  }

  fetchReleaseDate(node_id, category, page) {
    return Rx.Observable
      .fromPromise(this.getReleaseDate(node_id, category, page))
      .flatMap(this.parseXml)
      .map(this.setItems);
  }

  fetchSalesRanking(node_id, category, page) {
    return Rx.Observable
      .fromPromise(this.getSalesRanking(node_id, category, page))
      .flatMap(this.parseXml)
      .map(this.setItems);
  }

  fetchItemLookup(item_id, id_type) {
    return Rx.Observable
      .fromPromise(this.getItemLookup(item_id, id_type))
      .flatMap(this.parseXml)
      .map(this.setItem);
  }

  fetchItemList(keyword, page) {
    return Rx.Observable
      .fromPromise(this.getItemList(keyword, page))
      .flatMap(this.parseXml)
      .map(this.setItems);
  }

  fetchNodeList(node_id) {
    return Rx.Observable
      .fromPromise(this.getNodeList(node_id))
      .flatMap(this.parseXml)
      .map(this.setNodes);
  }

  parseXml(xml) {
    return Rx.Observable.fromPromise(std.parse_xml(xml));
  }

  forkJoin(promises) {
    return Rx.Observable.forkJoin(promises);
  }

  forItemLookup(objs) {
    return this.forkJoin(
      objs.map(obj => this.getItemLookup(obj.ASIN, 'ASIN'))
    );
  }

  forParseXml(objs) {
    return this.forkJoin(
      objs.map(obj => this.parseXml(obj))
    );
  }

  forItem(objs) {
    return objs.map(obj => this.setItem(obj));
  }

  setTopItems(tops) {
    return tops.BrowseNodeLookupResponse
      .BrowseNodes
      .BrowseNode
      .TopItemSet
      .TopItem;
  }

  setItems(items) {
    return items.ItemSearchResponse
      .Items
      .Item;
  }

  setItem(item) {
    return item.ItemLookupResponse
      .Items
      .Item;
  }

  setNodes(node) {
    return top.BrowseNodeLookupResponse
      .BrowseNodes
      .BrowseNode
      .Children
      .BrowseNode;
  }

  getNodeList(node_id) {
    const options = {};
    options['BrowserNodeId'] = node_id;
    options['ResponseGroup'] ='BrowseNodeInfo' ;
    return this.request('BrowseNodeLookup', options);
  }

  getNewReleases(node_id) {
    const options = {};
    options['BrowseNodeId'] = node_id;
    options['ResponseGroup'] ='NewReleases' ;
    return this.request('BrowseNodeLookup', options);
  }

  getBestSellers(node_id) {
    const options = {};
    options['BrowseNodeId'] = node_id;
    options['ResponseGroup'] ='TopSellers' ;
    return this.request('BrowseNodeLookup', options);
  }

  getReleaseDate(node_id, category, page) {
    const options = {};
    options['BrowseNode']     = node_id;
    options['SearchIndex']    = category;
    options['ItemPage']       = page;
    options['Sort']           = '-release-date';
    options['ResponseGroup']  = 'Large';
    return this.request('ItemSearch', options);
  }

  getSalesRanking(node_id, category, page) {
    const options = {};
    options['BrowseNode']     = node_id;
    options['SearchIndex']    = category;
    options['ItemPage']       = page;
    options['Sort']           = 'salesrank';
    options['ResponseGroup']  = 'Large';
    return this.request('ItemSearch', options);
  }

  getItemList(keyword, page) {
    const options = {};
    options['Keywords']       = keyword;
    options['ItemPage']       = page;
    options['SearchIndex']    = 'All';
    options['ResponseGroup']  = 'Large';
    return this.request('ItemSearch', options);
  }

  getItemLookup(item_id, id_type) {
    const options = {};
    options['IdType']         = id_type;
    options['ItemId']         = item_id;
    options['ResponseGroup']  = 'Large';
    return this.request('ItemLookup', options);
  }

  query(object) {
    return std.urlencode_rfc3986(std.ksort(object));
  }

  signature(query) {
    const parsed_url = std.parse_url(baseurl);
    const string = "GET\n"
      + parsed_url.host + "\n"
      + parsed_url.pathname + "\n"
      + query;
    return std.crypto_sha256(string, this.secret_key);
  }

  url(query, signature) {
    return baseurl
      + '?' + query
      + '&' + std.urlencode_rfc3986({ Signature: signature });
  }

};
export default Amazon;
