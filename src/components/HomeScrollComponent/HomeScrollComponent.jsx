import React from 'react';
import styled from 'styled-components';


const HomeScrollWrap = styled.div `
    padding: 0 20px;
`;

const HomeScrollXWrap = styled.div `
    margin: 0 -20px;
    overflow: hidden;
`

const HomeScrollX = styled.div `
    white-space: nowrap;
    overflow-x: scroll;
    padding-bottom: 30px;
    margin-bottom: -30px;
`

const HomeScrollUL = styled.div `
white-space: nowrap;
    display: flex;
    > div {
        width: 200px;

        img {
            max-width: 100%;
        }
    }
`

const LinkItemThumbnailWrap = styled.div ` 
    padding: 0 24px;
    margin-bottom: 36px;
    > div {
        
        > div {
            margin: 0 -24px;
            overflow: hidden;
            > div {
                height: 100%;
                width: 100%;
                overflow-y: hidden;
                > div {
                    margin-bottom: -30px;
                    padding-bottom: 30px;
                    overflow-x: scroll;
                    white-space: nowrap;
                    > div {
                        display: flex;
                        a {
                            display: block;
                            width: 140px;
                            border: 1px solid rgba(0,0,0,0.2);
                            border-radius: 4px;
                            box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.06);
                            font-size: 13px;
                            div {
                                height: 50px;
                                padding: 10px 0 0 10px;
                            }
                            img {
                                width: 100%;
                            }
                            b {
                                display: block;
                                padding-bottom: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
`

const HomeScrollComponent = () => {
    return (
        <>
            <LinkItemThumbnailWrap>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <a href="#">
                                            <picture>
                                                <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                            </picture>
                                            <div>
                                                <b>파리</b>
                                                프랑스
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <picture>
                                                <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                            </picture>
                                            <div>
                                                <b>파리</b>
                                                프랑스
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <picture>
                                                <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                            </picture>
                                            <div>
                                                <b>파리</b>
                                                프랑스
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <picture>
                                                <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                            </picture>
                                            <div>
                                                <b>파리</b>
                                                프랑스
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <picture>
                                                <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                            </picture>
                                            <div>
                                                <b>파리</b>
                                                프랑스
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LinkItemThumbnailWrap>
            {/* <LinkItemThumbnail>
                <picture>
                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                </picture>
                <div>
                    <b>파리</b>
                    프랑스
                </div>
            </LinkItemThumbnail>
            <LinkItemThumbnail>
                <picture>
                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                </picture>
                <div>
                    <b>파리</b>
                    프랑스
                </div>
            </LinkItemThumbnail>             */}
            {/* <HomeScrollWrap>
                <HomeScrollXWrap>
                    <HomeScrollX>
                        <HomeScrollUL>
                            <div>
                                <picture>
                                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <img src="https://a0.muscache.com/4ea/air/v2/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="" />
                                </picture>
                            </div>
                        </HomeScrollUL>
                        
                    </HomeScrollX>
                </HomeScrollXWrap>
            
            </HomeScrollWrap> */}

        </>
    )
}

export default HomeScrollComponent;
