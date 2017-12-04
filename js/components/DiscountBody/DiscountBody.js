import React from 'react';

class DiscountBody extends React.Component {
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
