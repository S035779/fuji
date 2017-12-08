import React from 'react';
import std from '../../utils/stdutils';

class SalesrnkBody extends React.Component {
  renderItem(idx, item) {
    const key = item.ASIN;
    const hrf = item.DetailPageURL;
    const img = item.LargeImage.URL;
    const alt = item.Offers.Offer.OfferListing
      .Availability;
    const scr = Number(idx) + 1 ;
    const ttl = item.ItemAttributes.Title;
    return <li className="salesrnk" key={key}>
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
    const items = this.props.items
      .slice(0,4).map((item, idx) => this.renderItem(idx, item));
    console.log(items);
    return (
      <div className="content">
      <ul>{items}</ul>
      </div>
    );
  }
};
export default SalesrnkBody;
