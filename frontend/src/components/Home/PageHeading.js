import React from 'react'

const PageHeading = (props) => {
  return (
    <>
    <div className='--flex-between'>
      <h2 className='--fw-thin'>{props.heading}</h2>
      <button className='--btn'>
        {props.btnText}
      </button>
    </div>
    <div className='--hr'>

    </div>
    </>
  )
}

export default PageHeading
