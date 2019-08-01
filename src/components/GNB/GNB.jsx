import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: #000;
    padding: 10px;
    font-size: 24px;
    color: #fff;
    background: ${props => props.color || 'blue'};
    ${props => props.ddd && css`
        background: purple;
    `}
`;

const GnbElement = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* height: 50px; */
    /* height: ${props => props.animateHide > 100 ? '200px' : '50px' || '50px'}; */
    /* height: ${props => props.animateHide}; */
    height: 50px;
    z-index: 10;
    background: rgba(0,0,0,0.2);
    transition: 0.5s;
    ${props => props.animateHide && css`
        height: 100px;
    `}
`;

const useScroll = () => {
    const [scrollValueY, setScrollValueY] = useState(false);

    const onScroll = () => {
        let windowScrollY = window.scrollY;
        if (windowScrollY > 100) {
            setScrollValueY(true);
        } else {
            setScrollValueY(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrollValueY;
}

const GNB = () => {

    const [buttonValue, setButtonValue] = useState(false);

    const scrollValueY = useScroll();

    const onChangeButton = () => {
        setButtonValue(!buttonValue);
    }

    return (
        <div style={{ height: '5000px' }}>



            <GnbElement animateHide={scrollValueY}>
                <p>Y : {scrollValueY}</p>
            </GnbElement>

            {/*<Button ddd={buttonValue}>버튼</Button>*/}
            {/*<Button onClick={onChangeButton}>변경버튼</Button>*/}

        </div>
    )
}

export default GNB
