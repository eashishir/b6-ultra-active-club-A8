import React, { useEffect, useState } from 'react';
import Style from '../Style/Style';
import './FreeStyle.css'
import my from '../../image/download.png'

const FreeStyle = () => {
    const [freeStyles, setFreeStyles] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('freestyle.json')
            .then(res => res.json())
            .then(data => setFreeStyles(data))
    }, []);

    const handelAddTolCart = (freeStyle) => {
        // console.log(freeStyle)
        const newCart = [...cart, freeStyle];
        setCart(newCart);
        console.log(newCart[0])

    }

    return (
        <div className="freeStyle-container">
            <div className="Style-container">
                {
                    freeStyles.map(freeStyle => <Style
                        key={freeStyle.id}
                        freestyle={freeStyle}
                        handelAddTolCart={handelAddTolCart}
                    >

                    </Style>)

                }

            </div>
            <div className="cartStyle-container">

                <div className='my-info'>
                    <img src={my} alt="" />
                    <h4>Eftekhar Ahmed Shishir</h4>
                </div>
                <div className='person-info'>
                    <div className='num1'>
                        <h4>65kg</h4>
                        <h6>Weight</h6>
                    </div>
                    <div className='num2'>
                        <h4>5.9'</h4>
                        <h6>Height</h6>
                    </div>
                    <div className='num3'>
                        <h4>22Y</h4>
                        <h6>Age</h6>
                    </div>
                </div>
                <h2>Add A Break(min)</h2>
                <div className='break-time'>
                    <a href="">10</a>
                    <a href="">20</a>
                    <a href="">30</a>
                    <a href="">40</a>
                    <a href="">50</a>
                </div>
                <h2>Exercise Details</h2>
                <div className=' exercise-info'>
                    <h4>Exercise time:{cart.time}min</h4>
                    <h4>break time: <small>0</small> min</h4>
                </div>
                <button className='btn-add'>
                    <p>Activity Completed</p>

                </button>

            </div>
        </div>
    );
};

export default FreeStyle;