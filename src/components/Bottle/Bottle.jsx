import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart, handleRemoveFromCart}) => {
    const {id, name, img, price} = bottle;

    return (
        <div className='bottle_container'>
            <h1 className='bottle_title'>{name}</h1>
            <img src={img} alt="bottle image" />
            <p className='bottle_description'>Price: ${price}</p>
            <button className='bottle_btn bottle_btn1' onClick={() => handleAddToCart(bottle)}>Purchase</button>
            <button className='bottle_btn' onClick={() => handleRemoveFromCart(id)}>Remove Purchase</button>
        </div>
    );
};

Bottle.PropTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Bottle;