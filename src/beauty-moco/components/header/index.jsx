import React, {useContext} from 'react';
import styled from 'styled-components';
import Menu from '../menu';
import {Link} from "react-router-dom";
import image from '../../assets/img/header/logo.svg'
import {CompanyContext} from "../../../../context/company.context";
import {get} from 'lodash';

const Banner = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background: #FFFFFF;
`;

const BannerWrap = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const BannerLogo = styled.div`
    height: 90px;
    display: flex;
    a{
        text-decoration: none;
    }
`;

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
    img{
        max-height: 100%;
        max-width: 60vw;
        margin: auto 0;
        @media screen and (max-width: 1020px){
          max-width: 30vw;
        }
    }
`;

const LogoText = styled.div`
    color: #000000;
    display: flex;
    height: 100%;
    align-items: center;
    max-width: 420px;
    font-weight: bold;
    font-size: 23px;
    line-height: 31px;
    @media screen and (max-width: 425px) {
        min-width: 150px;
        font-size: 16px;
    }
`;

const Header = () => {
    const {landingInfo} = useContext(CompanyContext);
    const logoIMG = get(landingInfo, 'logoIMG', false);
    const logoText = get(landingInfo, 'logoText', false);
    return (
        <Banner>
            <BannerWrap>
                <BannerLogo>
                    <Link to='/' style={{display: 'flex'}}>
                        <LogoImg>
                            <img src={logoIMG || image} alt="Logo"/>
                        </LogoImg>
                        <LogoText>
                            {logoText || 'Moco Beauty Salon' }
                        </LogoText>
                    </Link>
                </BannerLogo>
                <Menu />
            </BannerWrap>
        </Banner>
    )
}

export default Header;