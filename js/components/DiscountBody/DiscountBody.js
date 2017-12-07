import React from 'react';
import DiscountAction from '../../actions/DiscountAction';

class DiscountBody extends React.Component {
  componentDidMount() {
    DiscountAction.fetchItems({
      node_id: 2189374051, category: 'Hobbies', page: 1
    });
  }

  render() {
    return (
      <div id="picture" className="content">
      <ul>
      <li className="discount">
      <figure>
        <a href="#"><img src="assets/images/img01.png" alt="baby0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="discount">
      <figure>
        <a href="#"><img src="assets/images/img02.png" alt="girl0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="discount">
      <figure>
        <a href="#"><img src="assets/images/img03.png" alt="baby1" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li className="discount">
      <figure>
        <a href="#"><img src="assets/images/img04.png" alt="boy0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      </ul>
      </div>
    );
  }

};
export default DiscountBody;
