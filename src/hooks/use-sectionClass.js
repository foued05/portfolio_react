import { useLocation } from 'react-router-dom'



const useSectionClass = ()=> {
    const location = useLocation()
    // console.log(location.pathname.slice(1));
    const fullSectionClass = location.pathname.slice(1).length < 1 ? 'full-section' : '';

    return fullSectionClass
}

export default useSectionClass