import React from 'react';
import std from '../../utils/stdutils';

class ReleasesBody extends React.Component {
  renderItem(top) {
    const key = top.ASIN;
    const hrf = top.DetailPageURL;
    const img = top.LargeImage.URL;
    const alt = top.Offers.Offer.OfferListing
      .Availability;
    const scr = std.getLocalDateStamp(
      top.ItemAttributes.ReleaseDate);
    const ttl = top.ItemAttributes.Title;
    return <li className="releases" key={key}>
      <figure>
        <a href={hrf}><img src={img} alt={alt} /></a>
        <figcaption>
          <h3>{scr}</h3>
          <p>{ttl}</p>
        </figcaption>
      </figure>
      </li>;
  }

  render() {
    const tops = this.props.tops
      .slice(0,4).map(this.renderItem.bind(this));
    console.log(tops);
    return (
      <div className="content">
      <ul>{tops}</ul>
      </div>
    );
  }
};
export default ReleasesBody;
