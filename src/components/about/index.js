import {faCss3,faAngular,faHtml5,faJsSquare,faReact, faJava} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'
import useLetteranimation from '../../hooks/use-letterAnimation'
import Header from '../Ui/header/Header'
import useSectionClass from '../../hooks/use-sectionClass'

const About = () => {
  const letterClass = useLetteranimation(3000)
  const sectionClass = useSectionClass()


  return (
    <>
      <div className={`container about-page ${sectionClass}`}>
        <div className="text-zone">
          <Header
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'f', 'i', 'l']}
            idx={15}
          />
          <div className="paraContainer">
            <p>
            Un développeur Full-Stack motivé et expérimenté avec une grande adaptabilité et une
            expérience éprouvée dans la fourniture de solutions innovantes dans divers domaines.
            Connu pour sa polyvalence, de la conception UI à la mise en œuvre d'une logique métier,
            traite de solides compétences techniques en C#, ASP.NET et SQL.

            </p>
            <p>
              <a href={require('../../assets/Foued Amami FR.pdf')} target="_blank" className='cv'>Cliquez ici pour consulter mon CV</a>
            </p>
          </div>
        </div>
        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="front">
              <FontAwesomeIcon icon={faJava} />
            </div>
            <div className="right">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="back">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="left">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="top">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="bottom">
              <FontAwesomeIcon icon={faAngular} />
            </div>
          </div>
        </div> */}
      </div>
      <Loader />
    </>
  )
}

export default About
