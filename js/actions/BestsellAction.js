import { dispatch } from '../dispatcher';
import AppApiClient from '../services/AppApiClient';

export default {
  fetchItems(options) {
    return AppApiClient.fetchBestsell(options).then(items => {
      dispatch({ type: 'item/fetch/bestsell', items, options });
    });
  }
}
