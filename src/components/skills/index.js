import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import useLetteranimation from '../../hooks/use-letterAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3,faAngular,faHtml5,faJsSquare,faReact, faJava} from '@fortawesome/free-brands-svg-icons'
import Header from '../Ui/header/Header'
import Chart from './Chart'
import './index.scss'


const Skills = () => {
  const letterClass = useLetteranimation(3000)
  const headerText = ['Skills']
 
  return (
      <>
    <div className="container skills-page">
      <div className="text-zone">
        <Header strArray={headerText} letterClass={letterClass} idx={15} />
        <div className='paraContainer'>
        {/* <p>
          Front-end development including technologies like 
          <span className="tech-tag">HTML5</span>, 
          <span className="tech-tag">CSS3</span>, 
          <span className="tech-tag">JavaScript</span>, 
          <span className="tech-tag">React</span>, 
          <span className="tech-tag">TypeScript</span>, 
          <span className="tech-tag">Sass</span>, 
          <span className="tech-tag">Git</span>, 
          etc.
        </p> */}
        {/* <p>
           I am a Full Stack Developer with a solid knowledge of programming languages Frontend & Backend
        </p>
        <p>
          Having experience in freelance I developed the mobile application of the online invoicing software Birou.tn and I developed a quote calculation interface for software customers Birou.tn
        </p> */}
        <div className="stage-cube-cont">
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
        </div>
        </div>
      </div>
      <div className='skills-details'>
     <Chart width={100} skill='Html, CSS, Bootstrap'/>
     <Chart width={100} skill='Javascript, JQuery, ReactJS'/>
     <Chart width={100} skill='Typescript'/>
     <Chart width={100} skill='Angular'/>
     <Chart width={100} skill='JAVA, Springboot'/>
     <Chart width={100} skill='NodeJS'/>
     <Chart width={100} skill='SQL'/>
     <Chart width={100} skill='MongoDB'/>
      </div>
    </div>
    <Loader />
    </>
  )
}

export default Skills
