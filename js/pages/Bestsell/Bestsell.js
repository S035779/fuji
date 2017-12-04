import React from 'react';
import { Container } from 'flux/utils';
import bestsellStore from '../../stores/bestsellStore';
import BestsellHeader from
  '../../components/BestsellHeader/BestsellHeader';
import BestsellBody from
  '../../components/BestsellBody/BestsellBody';

class Bestsell extends React.Component {
  static getStores() {
    return [bestsellStore];
  }

  static calculateState() {
    return bestsellStore.getState();
  }

  render() {
    return (
      <div className="window" style={{left:"10px",top:"10px"}}>
      <BestsellHeader />
      <BestsellBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
} 
export default Container.create(Bestsell);
