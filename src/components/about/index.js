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
            Ingénieur Full Stack avec une solide expérience dans la conception, le développement et la maintenance d'applications.
            Expertise confirmée en développement des application. Forte capacité à mener des activités de développement 
            et de maintenance de haute qualité, garantissant la stabilité des applications. Passionné par les architectures 
            propres, l'optimisation des performances et l'amélioration continue.

            </p>
            <p>
              <a href={require('../../assets/Foued_AMAMI_Developpeur_FullStack (1).pdf')} target="_blank" className='cv'>Cliquez ici pour consulter mon CV</a>
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
