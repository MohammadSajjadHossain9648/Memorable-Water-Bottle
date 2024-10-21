import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect (() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    return (
        <div className='bottles_container'>
            <p className='description'>Unique bottle designs: {bottles.length}</p>
            <p className="cart">Purchased bottle: </p>
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;