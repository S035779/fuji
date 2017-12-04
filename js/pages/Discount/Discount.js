import React from 'react';
import { Container } from 'flux/utils';
import discountStore from '../../stores/discountStore';
import DiscountHeader from
  '../../components/DiscountHeader/DiscountHeader';
import DiscountBody from
  '../../components/DiscountBody/DiscountBody';

class Discount extends React.Component {
  static getStores() {
    return [discountStore];
  }

  static calculateState() {
    return discountStore.getState();
  }

  render() {
    return (
      <div className="window" style={{left:"10px",top:"10px"}}>
      <DiscountHeader />
      <DiscountBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
}
export default Container.create(Discount);
