import R from 'ramda';
import Rx from 'rx';
import {logs as log} from './logutils';

const AppUrl = 'http://ecs.amazonaws.jp/onca/xml';

const top = {
  ASIN: '橋本　衛',
  Title: 'ああああ',
  ItemUrl: '１１１１',
  Category: 'AAAA'
};

const item = {
  Rank: 0,
  ASIN: '橋本　衛',
  Title: 'ああああ',
  Release: '１１１１',
  ItemUrl: 'BBBB',
  ImageUrl: 'ＣＣＣ',
  ListPrice: 0,
  LowestNewPrice: 0,
  LowestUsedPrice: 0,
  OfferPrice: 0
};

const node = {
  BrowseNode: 0,
  Name: '橋本　衛'
};

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
    this.access_key = access_key | 'access_key';
    this.secret_key = secret_key | 'secret_key';
    this.associ_tag = associ_tag | 'associ_tag';
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

  getNewReleases(node_id) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const tops = [ top ];
      resolve(tops);
    });
  }

  getBestSellers(node_id) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const tops = [ top ];
      resolve(tops);
    });
  }

  getReleaseDate(node_id, category, page) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const items = [ item ];
      resolve(items);
    });
  }

  getSalesRanking(node_id, category, page) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const items = [ item ];
      resolve(items);
    });
  }

  getItemLookup(item_id, id_type) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const items = [ item ];
      resolve(items);
    });
  }

  getItemList(keyword, page) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const items = [ item ];
      resolve(items);
    });
  }
  getNodeList(node_id) {
    return new Promise((resolve, reject) => {
      //if(reject) reject(new Error('IO Error'));
      const nodes = [ node ];
      resolve(nodes);
    });
  }
};
export default Amazon;
