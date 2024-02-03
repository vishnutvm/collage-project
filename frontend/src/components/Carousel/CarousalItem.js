import React from 'react'
import styles from "./Carousel.module.scss"
import { Link } from 'react-router-dom';
import { shortenText } from '../../utils/utils';

const CarousalItem = (props) => {

    const {url,name,price,description } = props;
  return (
    <div className={styles.carouselItem}>
      <Link to= "/product-details" >
        <img className={styles.productImage} src={url} alt='product' />
        <p className={styles.price}>{`€ ${price}`}</p>
        <h4>{shortenText(name,18)}</h4>
        <p className='--mb'>{shortenText(description,26)}</p>
        <button className='--btn --btn-primary'>
            Add to cart
        </button>
      </Link>
    </div>
  )
}

export default CarousalItem
