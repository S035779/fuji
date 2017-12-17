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
            , error => { reject(error.message); } 
          );
        });
      case '/bestsellers':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , tops  => { resolve(tops); }
            , error => { reject(error.message); } 
          );
        });
      case '/releasedate':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { reject(error.message); } 
          );
        });
      case '/salesranking/discount':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { reject(error.message); } 
          );
        });
      case '/salesranking/salesrnk':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { reject(error.message); } 
          );
        });
      case '/itemlookup':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { reject(error.message); } 
          );
        });
      case '/itemlist':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , items => { resolve(items); }
            , error => { reject(error.message); } 
          );
        });
      case '/nodelist':
        return new Promise((resolve, reject) => {
          xhr.get(uri, options
            , nodes => { resolve(nodes); }
            , error => { reject(error.message); } 
          );
        });
      default:
        return new Promise((resolve, reject) => {
          if(reject) reject('Unknown Operation.');
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
