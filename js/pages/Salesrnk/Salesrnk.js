import React from 'react';
import { Container } from 'flux/utils';
import salesrnkStore from
  '../../stores/salesrnkStore';
import SalesrnkAction from
   '../../actions/SalesrnkAction';
import SalesrnkHeader from
  '../../components/SalesrnkHeader/SalesrnkHeader';
import SalesrnkBody from
  '../../components/SalesrnkBody/SalesrnkBody';
import std from '../../utils/stdutils';

class Salesrnk extends React.Component {
  static getStores() {
    return [salesrnkStore];
  }
  
  static calculateState() {
    return salesrnkStore.getState();
  }

  componentDidMount() {
    const search = this.props.location.search
      .split('?');
    const { node_id, category, associ_tag, rate } 
      = std.decodeFormData(search[1]);
    SalesrnkAction.fetchItems({
       node_id, category, associ_tag, rate
    });
  }

  render() {
    const size = this.props.match.params.size;
    return (
      <div id={size} className="window">
      <SalesrnkHeader />
      <SalesrnkBody items={this.state.items} />
      </div>
    );
  }
}
export default Container.create(Salesrnk);
