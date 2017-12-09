import React from 'react';
import { Container } from 'flux/utils';
import discountStore from
  '../../stores/discountStore';
import DiscountAction from
   '../../actions/DiscountAction';
import DiscountHeader from
  '../../components/DiscountHeader/DiscountHeader';
import DiscountBody from
  '../../components/DiscountBody/DiscountBody';
import std from '../../utils/stdutils';

class Discount extends React.Component {
  static getStores() {
    return [discountStore];
  }

  static calculateState() {
    return discountStore.getState();
  }

  componentDidMount() {
    const search = this.props.location.search
      .split('?');
    const { node_id, category, associ_tag, rate } 
      = std.decodeFormData(search[1]);
    DiscountAction.fetchItems({ 
      node_id, category, associ_tag, rate 
    });
  }

  render() {
    const size = this.props.match.params.size;
    return (
      <div id={size} className="window">
      <DiscountHeader />
      <DiscountBody items={this.state.items} />
      </div>
    );
  }
}
export default Container.create(Discount);
