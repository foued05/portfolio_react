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
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
            letterClass={letterClass}
            idx={15}
          />
          <div className="paraContainer">
            <p>
              E-mail: <span className='cv'>fouedamami8@gmail.com</span>
            </p>
            <p>
            Numéro de téléphone: <span className='cv'>(+216) 92 54 32 26</span>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/foued-amami-5a9105186/" target="_blank" className='cv'>Cliquez ici pour consulter mon profil LinkedIn.</a>
            </p>
            <p>
              <a href="https://github.com/foued05" target="_blank" className='cv'>Cliquez ici pour consulter mon profil GitHub.</a>
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
