import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import DiscountAction from '../actions/DiscountAction';

class DiscountStore extends ReduceStore<number> {
  getInitialState() {
    return {
      items:    [],
      options:  {}
    };
  }
  
  reduce(state, action) {
    switch (action.type) { 
      case 'item/fetch/discount':
        return Object.assign({}, state, {
          items:    action.items,
          options:  action.options
        });
      default: 
        return state; 
    } 
  } 
}
export default new DiscountStore(dispatcher);
