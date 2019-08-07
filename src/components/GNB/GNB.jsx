import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

const GnbElement = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    border-bottom: 1px solid #ebebeb;
    background: #fff;
    transition: 0.35s;
    will-change: contents;
    ${props => props.animateHide && css`
        transform: translateY(-60px);
    `}
`;

const ButtonArea = styled.div`
    height: 70px;
`;

const SearchArea = styled.div`
    overflow: hidden;
    height: 60px;
    padding: 16px 20px 0 20px;
    box-sizing: border-box;
`;

const SearchForm = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
    height: 44px;
    border: 1px solid #E6E6E7;
    border-radius: 44px;
    background: #f2f2f2;
    box-sizing: border-box;
`;

const SearchButton = styled.button`
    width: 44px;
    height: 44px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0,0,0,0.6);
    background: transparent;
    border: 0;
    appearance: none;
`;

const SearchInput = styled.input`
    border: 0;
    background: transparent;
    flex: 1;
    height: 20px;
    font-size: 15px;
    line-height: 15px;
    color: rgba(0,0,0,0.87);
    &:focus {
        outline: 1px solid yellow;
    }
`;

const ButtonScrollArea = styled.div`
    height: 100px;
    padding: 12px 20px 0 20px;
`;

const ButtonFilter = styled.button`
    font-size: 14px;
    height: 42px;
    margin-right: 8px;
    padding: 11px 15px;
    border: 1px solid rgba(0,0,0,0.34);
    border-radius: 42px;
    background: transparent;
    font-size: 14px;
    color: rgba(0,0,0,0.72);
`;

const useScroll = () => {
    const [scrollValueY, setScrollValueY] = useState(false);

    const onScroll = useCallback(() => {
        let windowScrollY = window.scrollY;
        if (windowScrollY > 500) {
            setScrollValueY(true);
        } else {
            setScrollValueY(false);
        }
    },[]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        console.log('effect');
        return () => {
            window.removeEventListener("scroll", onScroll);
            console.log('cleanup');
        }
    },[onScroll]);

    return scrollValueY;
}

const GNB = () => {

    const [buttonValue, setButtonValue] = useState(false);

    const dummy = {
        buttons: [
            {name: '날짜'},
            {name: '인원'},
            {name: '출장'},
        ]
    }

    const scrollValueY = useScroll();

    const onChangeButton = () => {
        setButtonValue(!buttonValue);
    }

    return (
        <div>
            <GnbElement animateHide={scrollValueY}>
                <SearchArea>
                    <SearchForm>
                        <SearchButton>&lt;</SearchButton>
                        <SearchInput placeholder="숙소" />
                    </SearchForm>
                </SearchArea>
                
                
                
                <ButtonArea>
                    <ButtonScrollArea>
                        {dummy.buttons.map((item, index) => {
                            return (
                                <ButtonFilter key={index}>
                                    {item.name}
                                </ButtonFilter>
                            )
                        })}
                    </ButtonScrollArea>
                </ButtonArea>
                
            </GnbElement>

           

            {/*<Button ddd={buttonValue}>버튼</Button>*/}
            {/*<Button onClick={onChangeButton}>변경버튼</Button>*/}

        </div>
    )
}

export default GNB
