import React from 'react';
import styled from 'styled-components';
import withChildFunction from '../../../hoc';
import image from '../../../../assets/img/home/mane.svg'
import facebook from '../../../../assets/img/home/facebook.svg';
import instagram from '../../../../assets/img/home/instagram.svg';

const Banner = styled.div`
    width: 100%;
    height: 800px;
    overflow: hidden;
    display: flex;
    @media screen and (max-width: 525px) {
        height: 550px;
    }
`;


const BannerText = styled.div`
    display: relative;
    width: 40%;
    font-family: Avenir Next;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
`;

const BannerInfo = styled.div`
    position: absolute;
    font-family: Avenir Next;
    font-style: italic;
    font-size: 2.2rem;
    line-height: 150%;
    color: #FFFFFF;
    width: 546px;
    height: 108px;
    left: 10.6%;
    top: 30%;
    @media screen and (max-width: 620px) {
        width: 80%;   
    }
    @media screen and (max-width: 550px) {    
        top: 20%;    
    }
    @media screen and (max-width: 350px) {    
        font-size: 1.5rem  
    }
`;

const BannerButton = styled.div`
    position: absolute;
    width: 200px;
    height: 28px;
    left: 10.6%;
    right: 80.32%;
    top: 58.31%;
    bottom: 36.07%;
    background: #F14F42;
    border-radius: 100px;
    text-align: center;
    padding: 0.5rem 0;
    color: #FFFFFF;
    :hover{
        cursor: pointer;
        box-shadow: 0 0 10px #FFFFFF;
        border: 1px solid #FFFFFF
    }
`;

const BannerSocials = styled.div`
    position: absolute;
    bottom: 5%;
    left: 10.6%;
    img{
        margin-right: 30px;
    }
`;

const BannerImg = styled.div`
    width: 60%;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }   
    @media screen and (max-width: 525px) {
        display: none;
    }
`;

const HeaderCard = () => {
    return (
        <Banner>
            <BannerText>
                <BannerInfo>Ваша краса у надійних руках наших професіоналів.</BannerInfo>
                <BannerButton>Записатись</BannerButton>
                <BannerSocials>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                </BannerSocials>
            </BannerText>
            <BannerImg>
                <img src={image} alt=""/>
            </BannerImg>
        </Banner>
    )
}

export default withChildFunction()(HeaderCard);