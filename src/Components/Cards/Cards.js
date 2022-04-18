import React from 'react'
import CardItem from '../CardItem/CardItem'
import styles from './Cards.module.css'

const Cards =() => {
  return (
      <div className={styles.cards}>
          <h1>Lets Make Our World Green!</h1>
          <div className={styles.cardsContainer}>
              <div className={styles.cardsWrapper}>
                  <ul className={styles.cardItems}>
                      <CardItem 
                          src='images/solar.jpeg'
                          text='Solar' 
                          label='Explore'
                            path='/services'
                      />
                      <CardItem 
                          src='images/solar-panel.jpeg'
                          text='We are a solar company that harnesses the power of the sun to generate electricity for our customers.' 
                          label='Explore'
                            path='/services'
            />
            
            <CardItem 
                          src='images/solar.jpeg'
                          text='Solar' 
                          label='Explore'
                            path='/services'
                      />
                  </ul>
                  <ul>
                      <CardItem 
                          src='images/solar.jpeg'
                          text='Solar' 
                          label='Explore'
                            path='/services'
                      />
                      <CardItem 
                          src='images/solar-panel.jpeg'
                          text='We are a solar company that harnesses the power of the sun to generate electricity for our customers.' 
                          label='Explore'
                            path='/services'
                      />
                      <CardItem 
                          src='images/house.jpeg'
                          text='We are a solar company that harnesses the power of the sun to generate electricity for our customers.' 
                          label='See More'
                            path='/services'
                      />
                      <CardItem 
                          src='images/wind.webp'
                          text='Our customers are at the heart of our services, we seek to provide the best of the best.' 
                          label='Learn More'
                            path='/services'
                      />
                  </ul>
              </div>
              </div>
    </div>
  )
}

export default Cards