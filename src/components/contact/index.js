import { useRef } from 'react'
import Loader from 'react-loaders'
import useLetteranimation from '../../hooks/use-letterAnimation'
import emailjs from '@emailjs/browser'
import Map from './Map'
import './index.scss'
import Header from '../Ui/header/Header'
import Button from '../Ui/button/Button'

const Contact = () => {
  const letterClass = useLetteranimation(3000)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tfu9aq8',
        'template_pjvlori',
        form.current,
        'eTLftCnpvGKamo4_G'
      )
      .then(
        (result) => {
          alert('Message sent succeful')
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
          alert('Message failed, try again pls')
        }
      )
  }

  return (
    <>
      <div className={`container contact-page `}>
        <div className="text-zone">
          <Header
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            letterClass={letterClass}
            idx={15}
          />
          <div className="paraContainer">
            <p>
              I am interested in a new job opportunity, If you are looking for a motivated, creative and dynamic person do not hesitate to contact me.
            </p>
            <p>
              E-mail: <span className='cv'>amamifoued8@gmail.com</span>
            </p>
            <p>
              Phone number: <span className='cv'>(+216) 92 54 32 26</span>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/foued-amami-5a9105186/" target="_blank" className='cv'>Click here to see my LinkedIn profile.</a>
            </p>
            <p>
              <a href="https://github.com/foued05" target="_blank" className='cv'>Click here to see my GitHub profile.</a>
            </p>
          </div>
        </div>
        <Map />
      </div>
      <Loader />
    </>
  )
}

export default Contact
