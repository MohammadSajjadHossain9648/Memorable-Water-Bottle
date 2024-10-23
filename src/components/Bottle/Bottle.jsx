import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price} = bottle;

    return (
        <div className='bottle_container'>
            <h1 className='bottle_title'>{name}</h1>
            <img src={img} alt="bottle image" />
            <p className='bottle_description'>Price: ${price}</p>
            <button className='bottle_btn' onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.PropTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;