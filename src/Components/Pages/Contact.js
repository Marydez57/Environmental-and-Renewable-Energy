import React from 'react'

const Contact = () => {
  return (
    <div className='contact-us'>
      <form>
        <input type='name' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Your Email' />
        <textarea name='message' placeholder='Message' />
      </form>
      Contact</div>
  )
}

export default Contact