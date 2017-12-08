import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import BestsellAction from 
  '../actions/BestsellAction';

class BestsellStore extends ReduceStore<number> {
  getInitialState() {
    return {
      tops:    [],
      options:  {
        node_id: 0
        , associ_tag: ''
      }
    };
  }
  
  reduce(state, action) {
    switch (action.type) { 
      case 'item/fetch/bestsell':
        return Object.assign({}, state, {
          tops:     action.tops,
          options:  action.options
        });
      default: 
        return state; 
    } 
  } 
}
export default new BestsellStore(dispatcher);
