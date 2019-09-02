import React, { useCallback } from 'react'
import GNB from '../../components/GNB';
import styled, { css } from 'styled-components';
import SwiperMainItem from '../../components/SwiperMainItem';
import { useDispatch, useSelector } from 'react-redux';
// import StyledComponent from '../../components/StyledComponentTest';

import { login } from '../../store/user';

const TopInfoArea = styled.div`

    margin: 131px 20px 0 20px;
    padding: 30px 0 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 12px;
    color: rgba(0,0,0,0.38);
    word-break: keep-all;
    line-height: 1.7;
`;

const TitleStyle = styled.div`
    margin-bottom: 16px;
    padding: 35px 20px 15px 20px;
    h2 {
        padding: 0;
        margin: 0;
        font-size: 22px;
        line-height: 1.3;
        font-weight: normal;
        color: #484848;

    }
    strong {
        display: block;
        padding-top: 7px;
        font-size: 16px;
        font-weight: normal;
        color: rgba(0,0,0,0.48);
    }
`;

const TitleArea = styled(TitleStyle)`
    h1 {

    }
`;

const UserState = styled.div`
    border: 1px solid red;
`;

const Home = () => {

    const { isLoggedin } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    console.log(isLoggedin);

    const handleLogin = useCallback(() => {
        dispatch(login);
    },[]);



    return (
        <div style={{ height: '5000px'}}>
            <GNB />
            {/*<StyledComponent />*/}

            <TopInfoArea>
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다. 관광세가 추가로 부과될 수 있습니다.
            </TopInfoArea>

            <button type="button" onClick={handleLogin}>버튼스</button>

            {isLoggedin && <UserState>유저 데이터</UserState>}

            <TitleArea>
                <h2>과 함께 전<br/>
                세계를 여행해보세요</h2>
            </TitleArea>

            <TitleArea>
                <h2>2222과 함께 전<br/>
                세계를 여행해보세요</h2>
                <strong>테스트222</strong>
            </TitleArea>
            
            <SwiperMainItem />
            
            <TitleArea>
                <h2>2222과 함께 전<br/>
                세계를 여행해보세요</h2>
                <strong>테스트222</strong>
            </TitleArea>


            <TitleArea>
                <h2>2222과 함께 전<br/>
                세계를 여행해보세요</h2>
                <strong>테스트222</strong>
            </TitleArea>


            <TitleArea>
                <h2>2222과 함께 전<br/>
                세계를 여행해보세요</h2>
                <strong>테스트222</strong>
            </TitleArea>


            <TitleArea>
                <h2>2222과 함께 전<br/>
                세계를 여행해보세요</h2>
                <strong>테스트222</strong>
            </TitleArea>
        </div>
    )
}

export default Home;
