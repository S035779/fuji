import { dispatch } from '../dispatcher';
import AppApiClient from '../services/AppApiClient';

export default {
  fetchItems(options) {
    return AppApiClient.fetchBestsell(options)
      .then(tops => {
        dispatch({ type: 'item/fetch/bestsell'
          , tops, options });
      });
  }
}
