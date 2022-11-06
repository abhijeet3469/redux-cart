import React from 'react'
import './Home.css'
const Home = (props) => {
  console.log("home", props.data);
  return (
    <div>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwYMhgS8I8ygRrG2plhs5zi20iAvjV86ggPg-pM0VlR2kUOJ6vonnLYu1ItMBGIOc-74&usqp=CAU' alt=''/>
            </div>
            <div className='text-wrapper item'>
            <span>Vivo Mobile</span>
            <span>Price: 9,999/-</span>
            </div>
            <div className='btn-wrapper item'>
            <button onClick={()=>props.addToCartHandler({price:9999, name: "vivo"})}>Add To Cart</button>
            <button className='remove-cart-btn' onClick={()=>props.removeToCartHandler()}>Remove From Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home 