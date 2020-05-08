import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import withChildFunction from '../hoc';
import {Icon} from "react-icons-kit";
import {alignJustify} from 'react-icons-kit/fa/alignJustify'
import {close} from 'react-icons-kit/fa/close'
import styled, {css} from "styled-components";
import {LINKS} from "../links";
import {createGlobalStyle} from "styled-components";

const BodyOverflow = createGlobalStyle`
  body {
    @media (max-width: 956px) {
      max-height: 100%;
      overflow:hidden;
    }
  }
`;
const Hamburger = styled(Icon).attrs({
    icon: alignJustify,
    size: 28,
})`
    display: none !important;
    cursor:pointer;
    margin-right: 20px;

    @media screen and (max-width: 956px) {
        display: flex !important;
    }
`;

const CloseMenuIcon = styled(Icon).attrs({
    icon: close,
    size: 28,
})`
    display: none !important;
    position:absolute;
    top: 18px;
    left: 10px;
    cursor: pointer;

    @media screen and (max-width: 956px) {
        display: block !important;
    }
`;


const MenuWrap = styled.div`
    display:flex;
  
  @media screen and (max-width: 956px) {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(100%);
    transition: transform .3s;
  }
  
  
  ${({open}) => open && css`
    @media screen and (max-width: 956px) {
      transform: translateX(0);
    }
  `}
`;

const Overlay = styled.div`
  display:none;
  
  @media screen and (max-width: 956px) {
    display:block;
    flex: 1;
  }
`;

const MenuLink = styled(Link)`
    padding: 8px 14px;
    color: #011D22;
    text-decoration: none;
    font-family: AvenirNextMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid transparent;
  
    @media screen and (max-width: 956px) {
        color: #4a4a4a;
        margin-right: 0;
        color: #000000;
        padding: 10px 30px;
        border-radius: 0;
    }
  
  &:last-child {
    margin-right: 0;
  }
  
  &.active {
    border-radius: 6px;
    color: #E92819;
    
    @media screen and (max-width: 956px) {
      background-color: red;
      color: #ffffff;
      border-radius: 0;
    }
  }
`;

const MenuList = styled.div`
  @media screen and (max-width: 956px) {
    width: 250px;
    display:flex;
    flex-direction: column;
    background-color: #F4F4F6;
    padding: 65px 0 50px;
    position:relative;
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Hamburger onClick={() => setOpen(true)}/>
      <MenuWrap open={open}>
        { open && <BodyOverflow />}
        <Overlay onClick={() => setOpen(false)}/>
        <MenuList>
          <CloseMenuIcon onClick={() => setOpen(false)}/>
          {
            LINKS.map((item, index) => (
              <MenuLink
                key={index}
                to={item.route}
                onClick={() => setOpen(false)}
              >
                {(item.name)}
              </MenuLink>
            ))
          }
        </MenuList>
      </MenuWrap>
    </div>
  )
};

export default withChildFunction()(Menu);