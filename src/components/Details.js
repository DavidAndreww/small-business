import React from 'react';

const Details = (props) => {
  let name = props.match.params.name
  console.log(name)
  let business = props.listings.find(biz => biz.name === name)
  console.log(business)
  return (
    <div className="details-component">
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.hours}</p>
      <p>{business.description}</p>
    </div>
  )
}

export default Details;