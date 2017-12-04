import React from 'react';
import BestsellAction from '../../actions/BestsellAction';

class BestsellBody extends React.Component {
  componentDidMount() {
    BestsellAction.fetchItems();
  }

  render() {
    return (
      <div id="picture" className="content">
      <ul>
      <li className="sellers">
      <figure>
        <a href="#"><img src="assets/images/img03.png" alt="baby1" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="sellers">
      <figure>
        <a href="#"><img src="assets/images/img04.png" alt="boy0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="sellers">
      <figure>
        <a href="#"><img src="assets/images/img05.png" alt="man0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="sellers">
      <figure>
        <a href="#"><img src="assets/images/img06.png" alt="girl1" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      </ul>
      </div>
    );
  }
};
export default BestsellBody;
