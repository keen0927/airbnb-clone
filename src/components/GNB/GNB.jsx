import React, { useState } from 'react';
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
`

const GNB = () => {

    const [buttonValue, setButtonValue] = useState(false);

    const onChangeButton = () => {
        setButtonValue(!buttonValue);
    }

    return (
        <div>
            GNB
            <Button ddd={buttonValue}>버튼</Button>
            <Button onClick={onChangeButton}>변경버튼</Button>

        </div>
    )
}

export default GNB
