import React from 'react';
import ReleasesAction from '../../actions/ReleasesAction';

class ReleasesBody extends React.Component {
  componentDidMount() {
    ReleasesAction.fetchItems();
  }

  render() {
    return (
      <div id="picture" className="content">
      <ul>
      <li className="release">
      <figure>
        <a href="#"><img src="assets/images/img02.png" alt="girl0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="release">
      <figure>
        <a href="#"><img src="assets/images/img03.png" alt="baby1" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="release">
      <figure>
        <a href="#"><img src="assets/images/img04.png" alt="boy0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="release">
      <figure>
        <a href="#"><img src="assets/images/img05.png" alt="man0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      </ul>
      </div>
    );
  }
};
export default ReleasesBody;
