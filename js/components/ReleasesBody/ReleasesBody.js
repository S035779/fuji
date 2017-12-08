import React from 'react';

class ReleasesBody extends React.Component {
  render() {
    const tops = this.props.tops;
    return (
      <div className="content">
      <ul>
      <li>
      <figure>
        <a href="#"><img src="assets/images/img02.png" alt="girl0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li>
      <figure>
        <a href="#"><img src="assets/images/img03.png" alt="baby1" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li>
      <figure>
        <a href="#"><img src="assets/images/img04.png" alt="boy0" /></a>
        <figcaption><h3>####</h3><p>Caption Title</p></figcaption>
      </figure>
      </li>
      <li>
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
