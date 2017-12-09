import R from 'ramda';
import Rx from 'rx';
import xhr from '../utils/xhrutils';
import { M, log } from '../utils/webutils';

log.config('console', 'basic', 'ALL', 'note-renderer');

const pspid = 'AMZApiClient';
const path = '/api';

export default {
  request(action, options) {
    const uri = path + action;
    switch(action) {
      case '/newreleases':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , tops  => { resolve(tops); }
            , error => { if(reject) reject(error); } 
          );
        });
      case '/bestsellers':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , tops  => { resolve(tops); }
            , error => { if(reject) reject(error); } 
          );
        });
      case '/releasedate':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { if(reject) reject({error: {message: error}}); } 
          );
        });
      case '/salesranking/discount':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { if(reject) reject(error); } 
          );
        });
      case '/salesranking/salesrnk':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { if(reject) reject(error); } 
          );
        });
      case '/itemlookup':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { if(reject) reject({error: {message: error}}); } 
          );
        });
      case '/itemlist':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { if(reject) reject(error); } 
          );
        });
      case '/nodelist':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , nodes => { resolve(nodes); }
            , error => { if(reject) reject(error); } 
          );
        });
      default:
        return new Promise((resolve, reject) => {
          if(reject) reject({error: {message: 'Unknown Operation.'}});
        });
    }
  },

  getNewReleases(options) {
    return this.request('/newreleases', options);
  },

  getBestSellers(options) {
    return this.request('/bestsellers', options);
  },

  getReleaseDate(options) {
    return this.request('/releasedate', options);
  },

  getSalesrnk(options) {
    return this.request('/salesranking/salesrnk', options);
  },

  getDiscount(options) {
    return this.request('/salesranking/discount', options);
  },

  getItemLookup(options) {
    return this.request('/itemlookup', options);
  },

  getItemList(options) {
    return this.request('/itemlist', options);
  },

  getNodeList(options) {
    return this.request('/nodelist', options);
  },

  fetchReleases(options) {
    return this.getNewReleases(options).then(tops => {
      //log.trace(`${pspid}>`, 'Response:', items);
      return tops;
    });
  },
  fetchBestsell(options) {
    return this.getBestSellers(options).then(tops => {
      //log.trace(`${pspid}>`, 'Response:', items);
      return tops;
    });
  },

  fetchSalesrnk(options) {
    return this.getSalesrnk(options).then(items => {
      //log.trace(`${pspid}>`, 'Response:', items);
      return items;
    });
  },

  fetchDiscount(options) {
    return this.getDiscount(options).then(items => {
      //log.trace(`${pspid}>`, 'Response:', items);
      return items;
    });
  },

}
