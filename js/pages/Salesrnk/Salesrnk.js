import React from 'react';
import { Container } from 'flux/utils';
import salesrnkStore from '../../stores/salesrnkStore';
import SalesrnkHeader from
  '../../components/SalesrnkHeader/SalesrnkHeader';
import SalesrnkBody from
  '../../components/SalesrnkBody/SalesrnkBody';

class Salesrnk extends React.Component {
  static getStores() {
    return [salesrnkStore];
  }
  
  static calculateState() {
    return salesrnkStore.getState();
  }

  componentDidMount() {
    const search = this.props.location.search.split('?');
    const obj = std.decodeFormData(search[1]);
    console.log(obj);
  }

  render() {
    return (
      <div className="window">
      <SalesrnkHeader />
      <SalesrnkBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
}
export default Container.create(Salesrnk);
