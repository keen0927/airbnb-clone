import React, { useState, useEffect, useCallback } from 'react';

const useScroll = () => {
    const [ windowScrollY, setWindowScrollY ] = useState(false);

    const onScroll = useCallback(() => {
        let windowScrollY = window.scrollY;
        if (windowScrollY > 500) {
            setWindowScrollY(true)
        } else {
            setWindowScrollY(false)
        }
    },[]);

    useEffect(() => {
        window.addEventListener('scroll',onScroll);
        return () => {
            window.removeEventListener('scroll',onScroll);
        }
    },[onScroll]);



    return windowScrollY;
}


const App = () => {
    return (
        <div>
            TEST
        </div>
    )
}

export default App;