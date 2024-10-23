import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <div className="cart_container">
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img} alt="bottle image"></img>)
                }
            </div>
        </div>
    );
};

export default Cart;