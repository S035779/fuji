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

  componentDidMount() {
    const search = this.props.location.search.split('?');
    const obj = std.decodeFormData(search[1]);
    console.log(obj);
  }

  render() {
    return (
      <div className="window">
      <ReleasesHeader />
      <ReleasesBody
        items={this.state.items}
        options={this.state.options} />
      </div>
    );
  }
}
export default Container.create(Releases);
