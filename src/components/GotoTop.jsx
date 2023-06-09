import { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa'

const GotoTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior:"smooth"});
    }

    useEffect( () =>{
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [])

    return (
        <div className="fixed bottom-5 right-5 flex justify-center items-center">
            <button type="button" onClick={scrollToTop} 
                className={`${isVisible ? 'opacity-100' :  'opacity-0'} inline-flex items-center p-4 rounded-full shadow-sm text-white bg-[#915eff] transition-opacity
                hover:bg-[#1d1836] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}>
                <FaArrowUp className="h-5 w-5 icon" aria-hidden='true'/>
            </button>
        </div>
    )
}

export default GotoTop;