import { dispatch } from '../dispatcher';
import AppApiClient from '../services/AppApiClient';

export default {
  fetchItems(options) {
    return AppApiClient.fetchDiscount(options).then(items => {
      dispatch({ type: 'item/fetch/discount', items, options });
    });
  }
}
