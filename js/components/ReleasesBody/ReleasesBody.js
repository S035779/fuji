import React from 'react';
import std from '../../utils/stdutils';

class ReleasesBody extends React.Component {
  renderItem(top) {
    const key = top.ASIN;
    const hrf = top.DetailPageURL;
    const img = top.LargeImage.URL;
    const alt = top.Offers.Offer.OfferListing
      .Availability;
    const now = new Date();
    const dst = new Date(top.ItemAttributes.ReleaseDate);
    let scr;
    if(now > dst) scr = '発売中'; 
    else scr = std.getLocalDateStamp(top.ItemAttributes.ReleaseDate)
      + '発売';
    const ttl = top.ItemAttributes.Title;
    return <li className="releases" key={key}>
      <figure>
        <a href={hrf} target="blank"><img src={img} alt={alt} /></a>
        <figcaption>
          <h3>{scr}</h3>
          <p>{ttl}</p>
        </figcaption>
      </figure>
      </li>;
  }

  render() {
    console.log(this.props.tops);
    const tops = this.props.tops
      .slice(0,4).map(this.renderItem.bind(this));
    return (
      <div className="content">
      <ul>{tops}</ul>
      </div>
    );
  }
};
export default ReleasesBody;
