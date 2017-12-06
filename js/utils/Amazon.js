import querystring from 'querystring';
import crypto from 'crypto';
import { URL } from 'url';
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

const pspid = 'AmazonApiClient';
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

  request(action, options) {
    options = Object.assign({}, params, options);
    options['AssociateTag']   = this.associ_tag;
    options['AWSAccessKeyId'] = this.access_key;
    options['Operation']      = action;
    options['TimeStamp']      = std.getTimeStamp();
    const query = this.query(options);
    const signature = this.signature(query);
    const url = this.url(query, signature);

    console.log(options);
    console.log(query);
    console.log(signature);
    console.log(url);

    switch(action) {
      case 'BrowseNodeLookup':
        return new Promise((resolve, reject) => {
          net.get(url, objs => {
            resolve(objs);
          });
        });
      case 'ItemSearch':
        return new Promise((resolve, reject) => {
          net.get(url, objs => {
            resolve(objs);
          });
        });
      case 'ItemLookup':
        return new Promise((resolve, reject) => {
          net.get(url, objs => {
            resolve(objs);
          });
        });
      default:
        return new Promise((resolve, reject) => {
          if(reject) reject(new Error('Unknown Operation.'));
        });
    }
  }

  fetchNewReleases(node_id) {
    return Rx.Observable
      .fromPromise(this.getNewReleases(node_id));
  }

  fetchBestSellers(node_id) {
    return Rx.Observable
      .fromPromise(this.getBestSellers(node_id))
  }

  fetchReleaseDate(node_id, category, page) {
    return Rx.Observable
      .fromPromise(this.getReleaseDate(node_id, category, page));
  }

  fetchSalesRanking(node_id, category, page) {
    return Rx.Observable
      .fromPromise(this.getSalesRanking(node_id, category, page));
  }

  fetchItemLookup(item_id, id_type) {
    return Rx.Observable
      .fromPromise(this.getItemLookup(item_id, id_type));
  }

  fetchItemList(keyword, page) {
    return Rx.Observable
      .fromPromise(this.getItemList(keyword, page));
  }

  fetchNodeList(node_id) {
    return Rx.Observable
      .fromPromise(this.getNodeList(node_id));
  }

  getNodeList(node_id) {
    const options = {};
    options['BrowserNodeId'] = node_id;
    options['ResponseGroup'] ='BrowseNodeInfo' ;
    return this.request('BrowseNodeLookup', options);
  }

  getNewReleases(node_id) {
    const options = {};
    options['BrowserNodeId'] = node_id;
    options['ResponseGroup'] ='NewReleases' ;
    return this.request('BrowseNodeLookup', options);
  }

  getBestSellers(node_id) {
    const options = {};
    options['BrowserNodeId'] = node_id;
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
    return this.urlencode_rfc3986(std.ksort(object));
  }

  urlencode_rfc3986(object) {
    return querystring.stringify(object);
  }

  signature(query) {
    const parsed_url = new URL(baseurl);
    const string = "GET\n"
      + parsed_url.host + "\n"
      + parsed_url.pathname + "\n"
      + query;
    return crypto
      .createHmac('sha256', this.secret_key)
      .update(string)
      .digest('base64');
  }

  url(query, signature) {
    const object = {};
    object['Signature'] = signature;
    return baseurl
      + '?' + query
      + '&' + this.urlencode_rfc3986(signature);
  }
};
export default Amazon;
