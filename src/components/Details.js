import React from 'react';
import ListingsMap from './ListingsMap';

const Details = (props) => {
  let name = props.match.params.name
  console.log(name)
  let business = props.listings.find(biz => biz.name === name)
  return (
    <div className="details-component">
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.hours}</p>
      <p>{business.description}</p>
      <ListingsMap />
    </div>
  )
}

export default Details;