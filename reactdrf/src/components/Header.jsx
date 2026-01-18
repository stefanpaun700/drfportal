import React from "react"
import Button from './Button'


const Header = () => {

  return (
    <>
      <nav className='navbar container py-3  align-items-start'>
        <a className='navbar-brand text-light' to="/">Portal</a>
        <div>
          <Button text='Login' class="btn-outline-info" url="/login" />
          &nbsp;
          <Button text='Register' class="btn-info" url="/register" />

        </div>
      </nav>
    </>
  )
}

export default Header