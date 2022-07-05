import { createPortal } from 'react-dom'
import Modal from '../modal/Modal';
import Backdrop from '../backdrop/Backdrop'





const Overlay = ({onClickHandler, project, show}) => {
    return(<>
      {createPortal(<Modal onClickHandler={onClickHandler} project={project} />, document.getElementById('overlay'))}
      {createPortal(<Backdrop onClickHandler={onClickHandler} />, document.getElementById('overlay'))}
      </>
    )
  }

export default Overlay;