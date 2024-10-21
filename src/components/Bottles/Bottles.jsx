import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';

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
        </div>
    );
};

export default Bottles;