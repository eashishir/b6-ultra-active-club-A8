import React from 'react';
import './style.css'

const Style = (props) => {
    const { name, img, time, title } = props.freestyle;
    return (
        <div className='style'>
            <img src={img} alt="" />
            <div className='style-info'>
                <p className='style-name'>{name}</p>
                <p>{title}</p>
                <p>Time Require:{time}</p>
                <br />

            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>

            </button>
        </div>
    );
};

export default Style;