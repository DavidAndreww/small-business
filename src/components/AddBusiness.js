import React from 'react';

const AddBusiness = (props) => {
  return (
    <button onClick={()=>props.addBiz()}>ADD BIZ</button>
  )
}

export default AddBusiness;