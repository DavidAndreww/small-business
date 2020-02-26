import React from 'react';
import DetailsMap from '../containers/DetailsMap';

const Details = (props) => {
  // gets business name from parameters to find proper business object in listings array
  let name = props.match.params.name
  // finds and stores selected business object in variable 
  let business = props.listings.find(biz => biz.name === name)
  return (
    <div className="details-component">
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.hours}</p>
      <p>{business.description}</p>
      <DetailsMap address={business.address}/>
    </div>
  )
}

export default Details;