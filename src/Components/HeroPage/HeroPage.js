import React from 'react'
import '../../App/App.css'
import './HeroPage.css'
import Button from '../Buttons/Buttons'
import backgroundVideo from '../../assets/videos/background-vid.mp4'

const HeroPage = () => {
  return (
      <div className='hero-container'>
          <video src={backgroundVideo} autoPlay loop muted />
          
              <h1>YOUR ENERGY SOLUTIONS</h1>
          <p>Explore</p>
          <div className='hero-btns'>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                  GET STARTED
              </Button>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                  WATCH TRAILER <i className="far fa-play-circle" />
              </Button>

          </div>

          
          
    </div>
  )
}

export default HeroPage