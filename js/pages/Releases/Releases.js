import React from 'react';
import { Container } from 'flux/utils';
import releasesStore from '../../stores/releasesStore';
import ReleasesAction from '../../actions/ReleasesAction';
import ReleasesHeader from
  '../../components/ReleasesHeader/ReleasesHeader';
import ReleasesBody from
  '../../components/ReleasesBody/ReleasesBody';
import std from '../../utils/stdutils';

class Releases extends React.Component {
  static getStores() {
    return [releasesStore];
  }

  static calculateState() {
    return releasesStore.getState();
  }

  componentDidMount() {
    const search = this.props.location.search.split('?');
    const { size, node_id, associ_tag } = std.decodeFormData(search[1]);
    ReleasesAction.fetchItems(size, { node_id, associ_tag });
  }

  render() {
    const size = this.state.size | 'large';
    console.log(this.state);
    return (
      <div id="medium" className="window">
      <ReleasesHeader />
      <ReleasesBody
        size={this.state.size}
        tops={this.state.tops}
      />
      </div>
    );
  }
}
export default Container.create(Releases);
