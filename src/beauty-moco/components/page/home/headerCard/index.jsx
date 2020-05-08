import React, {useContext} from 'react';
import styled from 'styled-components';
import withChildFunction from '../../../hoc';
import image from '../../../../assets/img/home/mane.svg'
import facebook from '../../../../assets/img/home/facebook.svg';
import instagram from '../../../../assets/img/home/instagram.svg';
import {CompanyContext} from "../../../../../../context/company.context";
import {get} from 'lodash';

const Banner = styled.div`
    width: 100%;
    overflow: hidden;
    height: 800px;
    display: flex;
    flex-grow: 1;
    text-align: left;
    background: linear-gradient(92.45deg, #011A1E 1.93%, #042026 98.88%);
    @media screen and (max-width: 525px) {
        height: 550px;
    }
`;


const BannerText = styled.div`
    position: relative;
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
        width: 90%;
        font-size: 1.5rem     
    }
    @media screen and (max-width: 550px) {    
        top: 10%;    
    }
`;

const BannerButton = styled.div`
    position: absolute;
    width: 200px;
    height: 38px;
    left: 10.6%;
    right: 80.32%;
    top: 58.31%;
    bottom: 36.07%;
    background: #F14F42;
    border-radius: 100px;
    text-align: center;
    padding: 0.3rem 0;
    color: #FFFFFF;
    :hover{
        cursor: pointer;
        box-shadow: 0 0 10px #FFFFFF;
        border: 1px solid #FFFFFF
    }
`;

const BannerSocials = styled.div`
    width: 100%;
    position: absolute;
    bottom: 5%;
    left: 10.6%;
    img{
        margin-right: 30px;
    }
    @media screen and (max-width: 325px) {
        margin-right: 10px;
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
    const {landingInfo} = useContext(CompanyContext);
    const Facebook = get(landingInfo, 'socials.facebook', false);
    const Instagram = get (landingInfo, 'socials.instagram', false);
    const Title = get(landingInfo, 'title', false);

    return (
        <Banner>
            <BannerText>
                <BannerInfo>{Title}</BannerInfo>
                <BannerButton>Записатись</BannerButton>
                <BannerSocials>
                    <a href={Instagram} target='_blank'><img src={instagram} alt=""/></a>
                    <a href={Facebook} target='_blank'><img src={facebook} alt=""/></a>
                </BannerSocials>
            </BannerText>
            <BannerImg>
                <img src={image} alt=""/>
            </BannerImg>
        </Banner>
    )
}

export default withChildFunction()(HeaderCard);