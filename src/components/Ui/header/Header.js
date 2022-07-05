import AnimatedLetters from '../../animatedLetters/index'

const Header = ({ strArray, letterClass, idx }) => (
  <h1 >
    <AnimatedLetters strArray={strArray} letterClass={letterClass} idx={idx} />
  </h1>
)

export default Header
