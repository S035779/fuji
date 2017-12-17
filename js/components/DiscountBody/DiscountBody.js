import React from 'react';
import std from '../../utils/stdutils';

class DiscountBody extends React.Component {
  renderItem(item) {
    const key = item.ASIN;
    const hrf = item.DetailPageURL;
    const img = item.LargeImage.URL;
    const alt = item.Offers.Offer
      ? item.Offers.Offer.OfferListing.Availability
      : '';
    const lst = Number(item.ItemAttributes.ListPrice.Amount);
    const ofr = Number(item.Offers.Offer.OfferListing.Price.Amount);
    const scr = Math.ceil((1 - (ofr / lst))*100);
    const ttl = item.Offers.Offer.OfferListing.Price.FormattedPrice;
    return <li className="discount" key={key}>
      <figure>
        <a href={hrf} target="blank"><img src={img} alt={alt} /></a>
        <figcaption>
          <h3>{scr}%OFF</h3>
          <p>{ttl}</p>
        </figcaption>
      </figure>
      </li>;
  }

  render() {
    console.log(this.props.items);
    const items = this.props.items
      .slice(0,4).map(this.renderItem.bind(this));
    return (
      <div className="content">
      <ul>{items}</ul>
      </div>
    );
  }
};
export default DiscountBody;
