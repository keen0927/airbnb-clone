import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderItem = styled.div`
    
    div {
        margin-right: 20px;
    }

    figure {
        width: 100%;
        height: auto;
        margin: 0;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    span {
        font-size: 10px;
        color: rgba(0,0,0,0.68);
    }
    
    p {
        margin: 0;
        font-size: 13px;
    }
`;


const SwiperMainItem = () => {

    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <SliderItem>
                    <div>
                        <figure>
                            <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt=""/>
                        </figure>
                        <span>집 전체 - 오스투니</span>
                        <p>I SETTE CONI - TRULLO EDERA</p>
                    </div>
                </SliderItem>
                <SliderItem>
                                        <div>
                        <figure>
                            <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt=""/>
                        </figure>
                        <span>집 전체 - 오스투니</span>
                        <p>I SETTE CONI - TRULLO EDERA</p>
                    </div>
                </SliderItem>
                <SliderItem>
                                        <div>
                        <figure>
                            <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt=""/>
                        </figure>
                        <span>집 전체 - 오스투니</span>
                        <p>I SETTE CONI - TRULLO EDERA</p>
                    </div>
                </SliderItem>
                <SliderItem>
                                        <div>
                        <figure>
                            <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt=""/>
                        </figure>
                        <span>집 전체 - 오스투니</span>
                        <p>I SETTE CONI - TRULLO EDERA</p>
                    </div>
                </SliderItem>
                <SliderItem>
                                        <div>
                        <figure>
                            <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt=""/>
                        </figure>
                        <span>집 전체 - 오스투니</span>
                        <p>I SETTE CONI - TRULLO EDERA</p>
                    </div>
                </SliderItem>                                                
            </Slider>
        </>
    )
}

export default SwiperMainItem;
