import './Button.scss';

const Button = ({text,type}) => {

     return (
         <button id='button'>
             <span className='bg'></span>
             <span className='base'></span>
             <span className='text'>{text}</span>
         </button>
     )
}

export default Button