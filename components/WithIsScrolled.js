import { useState, useEffect } from 'react';

const WithIsScrolled = ({children}) => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const onScroll = () => {
        const scrollTop = document.body != undefined ? document.body.scrollTop : 0;
        const hasScrolled = (window.pageYOffset || scrollTop) > 0;
        if(hasScrolled !== isScrolled){
            setIsScrolled(hasScrolled);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    })

    return children({isScrolled});
}

export default WithIsScrolled;