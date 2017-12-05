import R from 'ramda';
import Rx from 'rx';
import { M, log, api } from '../utils/webutils';

log.config('console', 'basic', 'ALL', 'note-renderer');

const pspid = 'AMZApiClient';
const path = '/api';

export default {
  request(operation, options) {
    switch(operation) {
      case 'fetch/newreleases':
        return new Promise(resolve => {
          api.client(path)
            .NewReleases(2189374051, items => {
            resolve(items);
          });
        });
      case 'fetch/bestsellers':
        return new Promise(resolve => {
          api.client(path)
            .BestSellers(2189374051, items => {
            resolve(items);
          });
        });
      case 'fetch/releasedate':
        return new Promise(resolve => {
          api.client(path)
            .ReleaseDate(2189374051, 'Hobbies', 1, items => {
            resolve(items);
          });
        });
      case 'fetch/salesranking':
        return new Promise(resolve => {
          api.client(path)
            .SalesRanking(2189374051, 'Hobbies', 1, items => {
            resolve(items);
          });
        });
      case 'fetch/itemlookup':
        return new Promise(resolve => {
          api.client(path)
            .ItemLookup('B075CLGPC9', 'ASIN', items => {
            resolve(items);
          });
        });
      case 'fetch/itemlist':
        return new Promise(resolve => {
          api.client(path)
            .ItemList('HarryPotter', 1, items => {
            resolve(items);
          });
        });
      case 'fetch/nodelist':
      default:
        return new Promise(resolve => {
          api.client(path)
            .NodeList(2189366051, items => {
            resolve(items);
          });
        });
    }
  },

  getNewReleases(options) {
    return this.request('fetch/newreleases', options);
  },

  getBestSellers(options) {
    return this.request('fetch/bestsellers', options);
  },

  getReleaseDate(options) {
    return this.request('fetch/releasedate', options);
  },

  getSalesRanking(options) {
    return this.request('fetch/salesranking', options);
  },

  getItemLookup(options) {
    return this.request('fetch/itemlookup', options);
  },

  getItemList(options) {
    return this.request('fetch/itemlist', options);
  },

  getNodeList(options) {
    return this.request('fetch/nodelist', options);
  },

  fetchBestsell(options) {
    return this.getBestSellers(options).then(items => {
      log.trace(`${pspid}>`, 'Response:', items);
    });
  },

  fetchDiscount(options) {
    return this.getSalesRanking(options).then(items => {
      log.trace(`${pspid}>`, 'Response:', items);
    });
  },

  fetchSalesrnk(options) {
    return this.getSalesRanking(options).then(items => {
      log.trace(`${pspid}>`, 'Response:', items);
    });
  },

  fetchReleases(options) {
    return this.getNewReleases(options).then(items => {
      log.trace(`${pspid}>`, 'Response:', items);
    });
  },
}
