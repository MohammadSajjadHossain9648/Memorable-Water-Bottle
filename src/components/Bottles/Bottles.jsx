import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect (() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div className='bottles_container'>
            <p className='description'>Unique bottle designs: {bottles.length}</p>
            <p className="cart">Purchased bottle: {cart.length}</p>
            <div className='bottles_card'>
                {
                    bottles.map(bottle => <Bottle
                                                key={bottle.id}
                                                bottle={bottle}
                                                handleAddToCart={handleAddToCart}
                                          ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;