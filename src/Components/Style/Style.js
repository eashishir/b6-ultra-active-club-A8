import React from 'react';
import './style.css'

const Style = ({ freestyle, handelAddTolCart }) => {
    const { name, img, time, title } = freestyle;
    return (
        <div className='style'>
            <img src={img} alt="" />
            <div className='style-info'>
                <p className='style-name'>{name}</p>
                <p>{title}</p>
                <p>Time Require:{time}</p>
                <br />

            </div>
            <button onClick={() => handelAddTolCart(time)} className='btn-cart'>
                <p>Add To Cart</p>

            </button>
        </div>
    );
};

export default Style;