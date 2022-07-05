import styled from 'styled-components'

const Logo = () => {
  const Alpha = styled.div`
    font-size: inherit;
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    position: absolute;
    font-weight: bolder;
    font-stretch: ultra-expanded;
    left: 50%;
    top: 50%;
    color: #dc3545;
    transform: translate(-50%, -50%) rotate(343deg);
  `

  const AlphaOne = styled(Alpha)`
    color: #66fcf1;
    left: 51%;
  `

  return (
    <div className="logo">
      <Alpha> F </Alpha>
      <AlphaOne>F</AlphaOne>
    </div>
  )
}

export default Logo
