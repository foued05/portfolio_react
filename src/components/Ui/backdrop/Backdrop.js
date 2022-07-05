import './Backdrop.scss'

const Backdrop = ({ children, onClickHandler }) => {
  return (
    <div className="backdrop" onClick={onClickHandler}>
      {children}
    </div>
  )
}

export default Backdrop
