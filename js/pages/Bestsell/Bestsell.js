import React from 'react';
import { Container } from 'flux/utils';
import bestsellStore from '../../stores/bestsellStore';
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
    const search = this.props.location.search.split('?');
    const obj = std.decodeFormData(search[1]);
    console.log(obj);
  }

  render() {
    return (
      <div className="window">
      <BestsellHeader />
      <BestsellBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
} 
export default Container.create(Bestsell);
