import React from 'react';
import { Container } from 'flux/utils';
import releasesStore from '../../stores/releasesStore';
import ReleasesHeader from
  '../../components/ReleasesHeader/ReleasesHeader';
import ReleasesBody from
  '../../components/ReleasesBody/ReleasesBody';

class Releases extends React.Component {
  static getStores() {
    return [releasesStore];
  }

  static calculateState() {
    return releasesStore.getState();
  }

  render() {
    return (
      <div className="window" style={{left:"10px",top:"10px"}}>
      <ReleasesHeader />
      <ReleasesBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
}
export default Container.create(Releases);
