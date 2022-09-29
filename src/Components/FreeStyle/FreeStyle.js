import React, { useEffect, useState } from 'react';
import Style from '../Style/Style';
import './FreeStyle.css'
import my from '../../image/download.png'

const FreeStyle = () => {
    const [freeStyles, setFreeStyles] = useState([])
    const [cart, setCart] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    // console.log(breakTime);




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

    const TimeBreakHandle = (event) => {
        const btnValue = event.target.innerText;
        const ParseValue = parseInt(btnValue);
        localStorage.setItem('time-break', ParseValue);
        setBreakTime(ParseValue);
    }

    useEffect(() => {

        const getTimeBreak = localStorage.getItem('time-break');
        setBreakTime(getTimeBreak)

    }, []);



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
                    <h4>Eftekhar Ahmed</h4>
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
                <h4>Add A Break(min)</h4>
                <div className='break-time'>
                    <button onClick={(event) => TimeBreakHandle(event)}>10</button>
                    <button onClick={(event) => TimeBreakHandle(event)}>20</button>
                    <button onClick={(event) => TimeBreakHandle(event)}>30</button>
                    <button onClick={(event) => TimeBreakHandle(event)}>40</button>

                </div>
                <h4>Exercise Details</h4>
                <div className=' exercise-info'>
                    <h6>Exercise time: {cart}min</h6>
                    <h6>Break time: <small>{breakTime}</small> min</h6>
                </div>
                <button className='btn-add'>
                    <p>Activity Completed</p>

                </button>

            </div>
        </div>
    );
};

export default FreeStyle;