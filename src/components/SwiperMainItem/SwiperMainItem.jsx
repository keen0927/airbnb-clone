import React, { useState } from 'react';
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
    }
`;


const SwiperMainItem = () => {

    const settings = {
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <SliderItem>
                    <figure></figure>
                    <div>
                        <strong>파리</strong>
                        <span>프랑스</span>
                    </div>
                </SliderItem>
                <SliderItem>
                    <figure></figure>
                    <div>
                        <strong>파리</strong>
                        <span>프랑스</span>
                    </div>
                </SliderItem>
                <SliderItem>
                    <figure></figure>
                    <div>
                        <strong>파리</strong>
                        <span>프랑스</span>
                    </div>
                </SliderItem>
                <SliderItem>
                    <figure></figure>
                    <div>
                        <strong>파리</strong>
                        <span>프랑스</span>
                    </div>
                </SliderItem>
                <SliderItem>
                    <figure></figure>
                    <div>
                        <strong>파리</strong>
                        <span>프랑스</span>
                    </div>
                </SliderItem>                                                
            </Slider>

        </>
    )
}

export default SwiperMainItem;
