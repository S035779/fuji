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

  componentDidMount() {
    const search = this.props.location.search.split('?');
    const obj = std.decodeFormData(search[1]);
    console.log(obj);
  }

  render() {
    return (
      <div className="window">
      <DiscountHeader />
      <DiscountBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
}
export default Container.create(Discount);
