import './Bottle.css'

const Bottle = ({bottle}) => {
    const {img, name, price} = bottle;
    return (
        <div className='bottle_container'>
            <h1 className='bottle_title'>{name}</h1>
            <img src={img} alt="bottle image" />
            <p className='bottle_description'>Price: ${price}</p>
            <button className='bottle_btn'>Purchase</button>
        </div>
    );
};

export default Bottle;