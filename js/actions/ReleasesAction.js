import { dispatch } from '../dispatcher';
import AppApiClient from '../services/AppApiClient';

export default {
  fetchItems(options) {
    return AppApiClient.fetchReleases(options).then(items => {
      dispatch({ type: 'item/fetch/releases', items, options });
    });
  }
}
