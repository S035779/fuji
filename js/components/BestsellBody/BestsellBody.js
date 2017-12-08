import React from 'react';
import std from '../../utils/stdutils';

class BestsellBody extends React.Component {
  renderItem(idx, top) {
    const key = top.ASIN;
    const hrf = top.DetailPageURL;
    const img = top.LargeImage.URL;
    const alt = top.Offers.Offer.OfferListing
      .Availability;
    const scr = Number(idx) + 1;
    const ttl = top.ItemAttributes.Title;
    return <li className="bestsell" key={key}>
      <figure>
        <a href={hrf}><img src={img} alt={alt} /></a>
        <figcaption>
          <h3>{scr}位</h3>
          <p>{ttl}</p>
        </figcaption>
      </figure>
      </li>;
  }

  render() {
    console.log(this.props.tops);
    const tops = this.props.tops
      .slice(0,4).map((top, idx) => this.renderItem(idx, top));
    return (
      <div className="content">
      <ul>{tops}</ul>
      </div>
    );
  }
};
export default BestsellBody;
