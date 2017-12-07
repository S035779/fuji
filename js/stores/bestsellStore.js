import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import BestsellAction from '../actions/BestsellAction';

class BestsellStore extends ReduceStore<number> {
  getInitialState() {
    return {
      items:    [],
      options:  {
        node_id: 0
      }
    };
  }
  
  reduce(state, action) {
    switch (action.type) { 
      case 'item/fetch/bestsell':
        return Object.assign({}, state, {
          items:    action.items,
          options:  action.options
        });
      default: 
        return state; 
    } 
  } 
}
export default new BestsellStore(dispatcher);
