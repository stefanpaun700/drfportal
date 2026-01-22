import React from 'react'
import Button from './Button'

const Protected = () => {
  return (
    <>
      <div className="container">
          <div className='p-5 mb-5 text-center bg-light-dark rounded'>
              <h1 className='text-light'>React Protected Page</h1>
              <p className="lead text-light">Protected Page </p>
              <Button text='Dashboard' class="btn-info" url="/dashboard" />
          </div>
      </div>
    </>
  )
}

export default Protected