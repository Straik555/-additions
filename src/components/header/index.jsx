import React from 'react';
import styled from 'styled-components';
import Menu from '../menu';
import {Link} from "react-router-dom";
import image from '../../assets/img/header/logo.svg'

const Banner = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
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
    img{
        max-height: 100%;
        max-width: 80vw;
        margin: auto 0;
    }
`;

const LogoText = styled.div`
    color: #000000;
    font-size: 1.6rem;
    display: flex;
    height: 100%;
    align-items: center;
    max-width: 420px;
    font-weight: bold;
    line-height: 155.6%;
    @media screen and (max-width: 425px) {
        font-size: 1.1rem;
    }
`;

const Header = () => {
    return (
        <Banner>
            <BannerWrap>
                <BannerLogo>
                    <Link to='/' style={{display: 'flex'}}>
                        <LogoImg>
                            <img src={image} alt=""/>
                        </LogoImg>
                        <LogoText>
                            Moco Beauty Salon
                        </LogoText>
                    </Link>
                </BannerLogo>
                <Menu />
            </BannerWrap>
        </Banner>
    )
}

export default Header;