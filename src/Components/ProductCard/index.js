import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import BlackButton from '../BlackButton';
import startEmpty from './imgs/star_empty.png';
import startFill from './imgs/star-fill.png';

const ProductCard = ({ imageUrl, brand, name, price, score, off, isFreeGift}) => {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={imageUrl} alt={name} className='img-back' />
        {off && off > 0 ? (
          <div className='badge'>{`${off}% Off`}</div>
        ) : null}
      </div>
      <p className='grey-text text'>{brand}</p>
      <p className='text'>{name}</p>
      <div className='start-cont'>
        <div className='start-cont'>
          <img src={startFill} alt="start" className='start' />
          <img src={startFill} alt="start" className='start' />
          <img src={startFill} alt="start" className='start' />
          <img src={startFill} alt="start" className='start' />
          <img src={startEmpty} alt="start" className='start' />
        </div>
        <p className='grey-text text' style={{fontSize:'11px', marginLeft: '5px'}}>{`(${score.reviews})`}</p>
      </div>
      <p className='text'>{`$ ${Number.parseFloat(price).toFixed(2)}`}</p>
      {isFreeGift ? (
        <p className='rose-text'>Free Gift With Purchase</p>
      ) : null}
      <BlackButton label="Add to bag" action={()=>{}} />
    </div>
  );
}

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  score: PropTypes.object.isRequired,
  off: PropTypes.number.isRequired,
  isFreeGift: PropTypes.bool.isRequired
};

export default ProductCard;