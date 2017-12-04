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

  render() {
    return (
      <div className="window" style={{left:"10px",top:"10px"}}>
      <SalesrnkHeader />
      <SalesrnkBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
}
export default Container.create(Salesrnk);
