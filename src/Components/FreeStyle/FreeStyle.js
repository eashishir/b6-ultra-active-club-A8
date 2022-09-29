import React, { useEffect, useState } from 'react';
import Style from '../Style/Style';
import './FreeStyle.css'
import my from '../../image/download.png'

const FreeStyle = () => {
    const [freeStyles, setFreeStyles] = useState([])
    const [cart, setCart] = useState(0);
    useEffect(() => {
        fetch('freestyle.json')
            .then(res => res.json())
            .then(data => setFreeStyles(data))
    }, []);

    const handelAddTolCart = (time) => {
        // console.log(time)
        const newCart = parseFloat(cart) + parseFloat(time);
        setCart(newCart);


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
                    <button>10</button>
                    <button>20</button>
                    <button>30</button>
                    <button>40</button>

                </div>
                <h2>Exercise Details</h2>
                <div className=' exercise-info'>
                    <h4>Exercise time:{cart}min</h4>
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