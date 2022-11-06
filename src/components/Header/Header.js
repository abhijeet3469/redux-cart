import React from 'react'
import './Header.css'
const Header = (props) => {
  console.log("header", props.data);
  return (
    <div>
    <div className='add-to-cart'>
    <span className='cart-count'>{props.data.length}</span>
    <img src='https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg' alt=''/>
    </div>
    </div>
  )
}

export default Header