import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <div className="cart_container">
            <h3 className="cart_title">Purchased Bottle</h3>
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img} alt="bottle image"></img>)
                }
            </div>
        </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.object.isRequired,
};

export default Cart;