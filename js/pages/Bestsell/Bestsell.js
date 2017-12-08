import React from 'react';
import { Container } from 'flux/utils';
import bestsellStore from
  '../../stores/bestsellStore';
import BestsellAction from
   '../../actions/BestsellAction';
import BestsellHeader from
  '../../components/BestsellHeader/BestsellHeader';
import BestsellBody from
  '../../components/BestsellBody/BestsellBody';
import std from '../../utils/stdutils';

class Bestsell extends React.Component {
  static getStores() {
    return [bestsellStore];
  }

  static calculateState() {
    return bestsellStore.getState();
  }

  componentDidMount() {
    const search = this.props.location.search
      .split('?');
    const { node_id, associ_tag } 
      = std.decodeFormData(search[1]);
    BestsellAction.fetchItems({ 
      node_id, associ_tag 
    });
  }

  render() {
    const size = this.props.match.params.size;
    return (
      <div id={size} className="window">
      <BestsellHeader />
      <BestsellBody tops={this.state.tops} />
      </div>
    );
  }
} 
export default Container.create(Bestsell);
