import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import ReleasesAction from '../actions/ReleasesAction';

class ReleasesStore extends ReduceStore<number> {
  getInitialState() {
    return {
      size: '',
      tops: [],
      options:  {
        node_id: 0
        , associ_tag: ''
      }
    };
  }
  
  reduce(state, action) {
    switch (action.type) { 
      case 'item/fetch/releases':
        return Object.assign({}, state, {
          size: action.size,
          tops: action.tops,
          options:action.options
        });
      default: 
        return state; 
    } 
  } 
}
export default new ReleasesStore(dispatcher);
