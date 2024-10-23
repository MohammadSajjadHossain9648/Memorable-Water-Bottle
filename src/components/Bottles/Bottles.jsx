import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getLocalStorageData, removeFromLS } from '../Utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    //load the JSON data when page loads
    useEffect (() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    //load the local storage data when page loads
    useEffect(() => {
        // when json data load fully then do operation in local storage
        if(bottles.length){
            const storageData = getLocalStorageData();
            const savedCart = [];

            for(const id of storageData){
                const bottleData = bottles.find(bottle => bottle.id === id);

                if(bottleData){
                    savedCart.push(bottleData);
                }
            }

            setCart(savedCart);
        }
    }, [bottles])

    //purchase button handler
    const handleAddToCart = (bottle) => {
        //add to website UI
        const newCart = [...cart, bottle];
        setCart(newCart);

        //add bottle id in local storage
        addToLS(bottle.id);
    }

    //remove purchase button handler
    const handleRemoveFromCart = (id) => {
        //remove from website UI
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);

        //remove bottle id from local storage
        removeFromLS(id);
    }

    return (
        <div>
            <div className="bottles_header">
                <p className='bottles_description'>Unique bottle designs: {bottles.length}</p>
                <p className="bottles_cart">Purchased bottle: {cart.length}</p>
            </div>

            <div className="bottles_container">
                <div className='info_container'>
                    <div className='bottles_card'>
                            {
                                bottles.map(bottle => <Bottle
                                                            key={bottle.id}
                                                            bottle={bottle}
                                                            handleAddToCart={handleAddToCart}
                                                            handleRemoveFromCart={handleRemoveFromCart}
                                                    ></Bottle>)
                            }
                    </div>
                </div>

                <div className="purchase_container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Bottles;