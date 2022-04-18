import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Buttons/Buttons'
import styles from './Footer.module.css'

const Footer = () => {
  return (
      <div className={styles.footerContainer}>
          <section className={styles.footerSub}>
              <p className={styles.footerSubHeading}>
                Get in touch with us!  
              </p>
              <p className={styles.footerSubText}>
                  Follow us on social media!
              </p>
              <div className={styles.inputArea}>
                  <form>
                      <input type='email'
                          name='email'
                          className={styles.footerInput}
                          placeholder='Your Email' />
                      <Button buttonStyle='btn--outline'>Subscribe</Button>
                  </form>
              </div>
          </section>  
          <div className={styles.footerLinks}>
              <div className={styles.footerLinksWrapper}>
                  <div className={styles.footerLinkItems}>
                      <h2>About Us</h2> 
                      <Link to='/about' >Give us a call</Link>
                      <Link to='/' >Careers</Link>
                      <Link to='/' >Terms of Services</Link>
                  </div>
                  <div className={styles.footerLinkItems}>
                      <h2>Contact Us</h2>
                      <Link to='/' >Email Us</Link>
                      <Link to='/' >Support</Link>
                      <Link to='/' >Call Us</Link>
                      <Link to='/' >FAQ</Link>
                  </div>
              </div>
              <div className={styles.footerLinksWrapper}>
                  <div className={styles.footerLinkItems}>
                      <h2>Legal</h2>
                      <Link to='/' >Privacy Policy</Link>
                      <Link to='/' >Terms and Conditions</Link>
                  </div>
                  <div className={styles.footerLinkItems}>
                      <h2>Social Media</h2>
                      <Link to='/' >Facebook</Link>
                      <Link to='/' >Twitter</Link>
                        <Link to='/' >Instagram</Link>
                      
                  </div>

              </div>
          </div>
          <section className={styles.socialMedia}>
              <div className={styles.socialMediaIcons}>
                  <div className={styles.footerLogo}>
                      <Link to='/' className={styles.socialLogo} >
                          ENV&NEW
                            <i className="fab fa-typo3"></i>
                      </Link>
                  </div>
                  <small className={styles.websiteRights}>ENV&NEW © 2022</small>
                  <div className={styles.socialIcons}>
                      <Link to='/' className={styles.socialIconLinks}
                          target='_blank'
                          aria-label='Facebook'>
                          <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to='/' className='socialIconLinks instagram'
                          target='_blank'
                          aria-label='Instagram'>
                          <i className="fab fa-instagram"></i>
                      </Link>
                      <Link to='/' className='socialIconLinks twitter'
                          target='_blank'
                          aria-label='Twitter'>
                          <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to='/' className='socialIconLinks linkedIn'
                          target='_blank'
                          aria-label='LinkedIn'>
                            <i className="fab fa-linkedin-in"></i>

                      </Link>
                  </div>
                  </div>
          </section>
      </div>
  )
}

export default Footer