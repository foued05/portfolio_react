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
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
          <div className="paraContainer">
            <p>
            My name is Foued Amami, I am 23 years old, graduated in computer 
            science and multimedia at the Higher Institute of Multimedia Arts of Manouba (ISAMM) 
            and I am a computer engineering student at the Private Higher School of Engineers and Technologies (ESPRIT).
            </p>
            <p>
            I am a Full-Stack developer with a solid knowledge of programming languages Frontend & Backend passionate about new technologies with an ability to adapt, 
            my goal is to be the developer who gives added value to his team and succeeds in solving complex problems.
            </p>
            <p>
              <a href={require('../../assets/Fouedamami.pdf')} target="_blank" className='cv'>Click here to see my CV</a>
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
