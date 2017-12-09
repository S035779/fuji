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
        <a href={hrf} target="blank"><img src={img} alt={alt} /></a>
        <figcaption>
          <h3>{scr}位</h3>
          <p>{ttl}</p>
        </figcaption>
      </figure>
      </li>;
  }

  render() {
    console.log(this.props.tops);
    const rnd = std.makeRandInt(1);
    const objs = rnd > 4 
      ? this.props.tops.slice(0,4) : this.props.tops.slice(4,8);
    const tops = objs.map((top, idx) => rnd >4 
      ? this.renderItem(idx, top) : this.renderItem(idx+4, top));
    console.log(tops);
    return (
      <div className="content">
      <ul>{tops}</ul>
      </div>
    );
  }
};
export default BestsellBody;
