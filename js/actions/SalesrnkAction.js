import { dispatch } from '../dispatcher';
import AppApiClient from '../services/AppApiClient';

export default {
  fetchItems(options) {
    return AppApiClient.fetchSalesrnk(options).then(items => {
      dispatch({ type: 'item/fetch/salesrnk', items, options });
    });
  }
}
