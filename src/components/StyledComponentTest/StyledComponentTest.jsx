import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// 단순 변수의 형태가 아닌 여러줄의 스타일 구문을 조건부로 설정해야 할 경우 CSS를 불러온다.

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

const Gnb = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    border: 1px solid red;
`;

// 다른 스타일을 가져와서 약간 변경하고 싶을때 인자값으로 넣어서 사용
const ButtonAnother = styled(Button)`
    border: 3px solid red;
`;

const StyledComponent = () => {

    const [buttonValue, setButtonValue] = useState(false);

    const onChangeButton = () => {
        setButtonValue(!buttonValue);
    }

    return (
        <div>
            스타일 컴포넌트 테스트
            <Gnb></Gnb>
            <Button ddd={buttonValue}>버튼</Button>
            <Button onClick={onChangeButton}>변경버튼</Button>
            <ButtonAnother>다른버튼</ButtonAnother>

        </div>
    )
}

export default StyledComponent;
