
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Cards/Cards.module.css'

const CardItem =(props) => {
  return (
      <>
          <li className={styles.cardsItem}>
              <Link className={styles.cardItemsLink} to={props.path}>
                  <figure className={styles.cardItemsWrap} data-category ={props.label}>
                   <img src={props.src} alt='Site' className={styles.cardItemsImg}/>  
                  </figure> 
                  <div className={styles.cardItemsDetails}>
            <h4 className={styles.cardItemsText}>{props.text}</h4> 
                      </div>
              </Link>  
            </li>
    </>
  )
}

export default CardItem