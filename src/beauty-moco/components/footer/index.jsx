import React, {useContext} from 'react';
import instagram from "../../assets/img/home/instagram.svg";
import facebook from "../../assets/img/home/facebook.svg";
import styled from "styled-components";
import {CompanyContext} from "../../../../context/company.context";
import {get} from "lodash";

const Banner = styled.div`
  width: 100%;
  height: 90px;
  background: #021D21;
`;

const BannerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`;

const Title = styled.p`
  color: #F2F2F2;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-right: 30px;
  @media screen and (max-width: 325px) {
        margin-right: 10px;
    }
`;

const BannerSocials = styled.div`
    display: flex;
    position: absolute;
    top: 20%;
    left: 2%;
    a{
        margin-right: 30px;
        margin-top: 4%;
    }
    @media screen and (max-width: 325px) {
        margin-right: 10px;
    }
`;

const Footer = () => {
    const {landingInfo } = useContext(CompanyContext);
    const Facebook = get(landingInfo, 'socials.facebook', false);
    const Instagram = get (landingInfo, 'socials.instagram', false);
    return (
        <Banner>
            <BannerWrap>
                <BannerSocials>
                    <Title>Ми в соц мережах</Title>
                    <a href={Instagram} target='_blank'><img src={instagram} alt=""/></a>
                    <a href={Facebook} target='_blank'><img src={facebook} alt=""/></a>
                </BannerSocials>
            </BannerWrap>
        </Banner>
    )
}

export default Footer;