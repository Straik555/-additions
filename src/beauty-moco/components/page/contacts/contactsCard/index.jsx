import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Banner = styled.div`
  width: 100%;
  margin-top: 20px;
  ${({theme}) => css`
    background-color: ${theme.colors.white};
  `};
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(108, 111, 112, 0.3);
  display: flex;
  flex-direction: column;
  padding: 30px 35px;
`;

const BannerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const Icon = styled.img`
  margin-right: 20px;
`;

const Title = styled.div`
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #021D21;
`;

const BannerContainer = styled.div`
    padding-top: 10px;
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    ${({theme}) => css`
      color: ${theme.colors.darkGrey};
    `};
    a{
        font-family: Avenir Next;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        ${({theme}) => css`
          color: ${theme.colors.darkGrey};
        `};
        text-decoration: none;
    }
`;

const ContactsCard = ({title, icon, children}) => {
    return (
        <Banner>
            <BannerHeader>
                <Icon src={icon} />
                <Title>{title}</Title>
            </BannerHeader>
            <BannerContainer>
                {children}
            </BannerContainer>
        </Banner>
    )
}

ContactsCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ContactsCard;

