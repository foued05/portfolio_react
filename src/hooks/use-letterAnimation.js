import { useEffect, useState } from "react";

const useLetteranimation = (timer = 4000) => {
    const [letterClass, setLetterClass] = useState('animated-letter')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('animated-letter-hover')
       }, timer)
     }, [timer])
     return letterClass

}

export default useLetteranimation