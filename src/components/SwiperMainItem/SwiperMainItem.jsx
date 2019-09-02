import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderItem = styled.div`
    border: 1px solid #000;

    figure {
        width: 100%;
        height: 77px;
        margin: 0;
        background-image: url('https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80');
        background-size: cover;
        background-position: center center;
    }
`;


const SwiperMainItem = () => {

    // const [area, setArea] = useState('');

    const dummy = {
        data: [
            {
                national: '프랑스',
                capital: '파리',
                path: 'https://a0.muscache.com/im/pictures/4a63393d-9a81-4229-b6b6-7a029fdf3cb0.jpg?aki_policy=poster'
            },
            {
                national: '영국',
                capital: '런던',
                path: 'https://a0.muscache.com/im/pictures/105787762/a5cac5ad_original.jpg?aki_policy=large'
            },
            {
                national: '스위스',
                capital: '취리히',
                path: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-853090-media_library/original/7f0ff29a-d279-4e91-85b4-4609045a06af.jpeg?aki_policy=poster'
            },
            {
                national: '대한민국',
                capital: '서울',
                path: 'https://a0.muscache.com/im/pictures/f64595db-92b3-41c8-8bcb-50ce6b009e6c.jpg?aki_policy=poster'
            },            
        ]
    }

    // useEffect(() => {
    //     setArea(dummy.data[0]);
    // },[]);    

    const settings = {
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1
    };

    const testElement = dummy.data.map((n, index) => {
        return (
            <SliderItem key={index}>
                <figure style={{backgroundImage: 'url('+n.path+')'}}></figure>
                <div>
                    <strong>{n.national}</strong>
                    <span>{n.capital}</span>
                </div>
            </SliderItem>
        );
    });

    return (
        <>
            
            <Slider {...settings}>
                {testElement}
            </Slider>

        </>
    )
}

export default SwiperMainItem;
