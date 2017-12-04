import R from 'ramda';
import Rx from 'rx';
import { M, log } from '../utils/webutils';

export default {
  request(action, response) {
    switch(action) {
      case 'item/fetch/bestsell':
        return new Promise(resolve => {
        });
      case 'item/fetch/discount':
        return new Promise(resolve => {
        });
      case 'item/fetch/salesrnk':
        return new Promise(resolve => {
        });
      case 'item/fetch/releases':
        return new Promise(resolve => {
        });
      default:
        return new Promise(resolve => {
        });
    }
  },

  getBestsell(options) {
    return this.request('item/fetch/bestsell', options);
  },

  getDiscount(options) {
    return this.request('item/fetch/discount', options);
  },

  getSalesrnk(options) {
    return this.request('item/fetch/salesrnk', options);
  },

  getReleases(options) {
    return this.request('item/fetch/releases', options);
  },

  fetchBestsell(options) {
    return this.getBestsell(options);
  },

  fetchDiscount(options) {
    return this.getDiscount(options);
  },

  fetchSalesrnk(options) {
    return this.getSalesrnk(options);
  },

  fetchReleases(options) {
    return this.getRelease(options);
  },
}
