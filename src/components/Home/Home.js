import './Home.scss'
import useLetteranimation from '../../hooks/use-letterAnimation.js'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters'
import Loader from 'react-loaders'
import styled from 'styled-components'

import Contact from '../contact/index'
import About from '../about/index'
import Skills from '../skills/index'
import MyWork from '../myWork/index'
import Button from '../Ui/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const letterClass = useLetteranimation()
  const strArray = [' ', 'F', 'o', 'u', 'e', 'd']
  const jobArray = [ 'F', 'u', 'l', 'l',' ', 'S', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  const Alpha = styled.div`
    font-size: inherit;
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    position: absolute;
    font-weight: bolder;
    font-stretch: ultra-expanded;
    left: 50%;
    top: 50%;
    color: #45a29e;
    transform: translate(-50%, -50%) rotate(345deg);
  `

  const AlphaOne = styled(Alpha)`
    color: #dc3545;
    left: 53%;
  `

  return (
    <>
      <div className="container home-page">
        <div className="scroll-down left">
          <span>
            <FontAwesomeIcon icon={faArrowDown} color="#c5c6c7" />
          </span>
          <span className="scroll-text">défiler vers le bas</span>
        </div>
        <div className="scroll-down right">
          <span>
            <FontAwesomeIcon icon={faArrowDown} color="#c5c6c7" />
          </span>
          <span className="scroll-text">défiler vers le bas</span>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>F</span>
            <span className={`${letterClass} _10`}>o</span>
            <span className={`${letterClass} _11`}>u</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>d</span>
            <span className={`${letterClass} _13`}> </span>
            <span className={letterClass}>A</span>
            <span className={`${letterClass} _14`}>m</span>
            <span className={`${letterClass} _15`}>a</span>
            <span className={`${letterClass} _16`}>m</span>
            {/* <span className={letterClass}>F</span> */}
            <span className={`${letterClass} _17`}>i</span>
            <span className={`${letterClass} _18`}>,</span>
            {/* <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>d</span>
            <span className={`${letterClass} _11`}>,</span> */}
            <br />
            <span className={`${letterClass} _12`}>D</span>
            <span className={`${letterClass} _13`}>é</span>
            <span className={`${letterClass} _13`}>v</span>
            <span className={`${letterClass} _14`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>o</span>
            <span className={`${letterClass} _13`}>p</span>
            <span className={`${letterClass} _14`}>p</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _14`}>u</span>
            <span className={`${letterClass} _13`}>r</span>
            <br />
            <span className={`${letterClass} _14`}>F</span>
            <span className={`${letterClass} _14`}>u</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _13`}>-</span>
            <span className={`${letterClass} _14`}>S</span>
            <span className={`${letterClass} _14`}>t</span>
            <span className={`${letterClass} _13`}>a</span>
            <span className={`${letterClass} _14`}>c</span>
            <span className={`${letterClass} _14`}>k</span>
          </h1>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            /> */}
            <br />
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
          
          <div className="paraContainer">
            <p>Développeur Full Stack</p>
          </div>
          <Link to="/contact" className="flat-button">
            <Button text="Portfolio" />
          </Link>
        </div>
        <img src={require('../../assets/images/foued.jpeg')} className="foued-img" />
      </div>
      <About />
      <MyWork />
      <Skills />
      <Contact />
      <Loader />
    </>
  )
}

export default Home
