import React, {useEffect} from 'react'
import GNB from '../../components/GNB';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import SwiperMainItem from '../../components/SwiperMainItem';
import { loginAction } from '../../reducers/user';
import HomeScrollComponent from '../../components/HomeScrollComponent';

const TopInfoArea = styled.div`

    margin: 131px 20px 0 20px;
    padding: 30px 0 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 12px;
    color: rgba(0,0,0,0.38);
    word-break: keep-all;
    line-height: 1.7;
`;

const TitleArea = styled.div`
    margin-bottom: 16px;
    padding: 35px 0 15px 0;
    h2 {
        padding: 0 20px;
        margin: 0;
        font-size: 22px;
        line-height: 1.3;
        font-weight: normal;
        color: #484848;

    }
    strong {
        display: block;
        padding: 5px 20px 15px 20px;
        font-size: 16px;
        font-weight: normal;
        color: rgba(0,0,0,0.48);
    }
`;

const Home = () => {

    return (
        <div>
            <GNB />

            <TopInfoArea>
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다. 관광세가 추가로 부과될 수 있습니다.
            </TopInfoArea>

            <TitleArea>
                <h2>에어비앤비와 함께 전<br/>
                세계를 여행해보세요</h2>
                <HomeScrollComponent />
            </TitleArea>

            <TitleArea>
                <h2>최고 평점을 받은 숙소</h2>
                <strong>최고의 평점을 받은 전 세계의 숙소를 둘러보세요.</strong>
                <SwiperMainItem />
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


            <TitleArea>
                <h2>2222과 함께 전<br/>
                세계를 여행해보세요</h2>
                <strong>테스트222</strong>
            </TitleArea>
        </div>
    )
}

export default Home;
