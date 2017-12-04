import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import ReleasesAction from '../actions/ReleasesAction';

class ReleasesStore extends ReduceStore<number> {
  getInitialState() {
    return {
      items:    [],
      options:  {}
    };
  }
  
  reduce(state, action) {
    switch (action.type) { 
      case 'item/fetch/releases':
        return Object.assign({}, state, {
          items:    action.items,
          options:  action.options
        });
      default: 
        return state; 
    } 
  } 
}
export default new ReleasesStore(dispatcher);
