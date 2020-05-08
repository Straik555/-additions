import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Banner = styled.li`
  width: 49%;
  margin: 0 0.5% 0.5% 0.5%;
  box-shadow: 0 0 5px rgba(108, 111, 112, 0.3);
  background: #FFFFFF;
  border-radius: 4px;
  height: 96px;
  padding: 20px 40px;
  display: flex;
`;

const BannerText = styled.p`
  width: 50%;
  text-align: left;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #17202B;
`;

const BannerPrice = styled.h2`
  width: 50%;
  text-align: right;
  font-family: Avenir Next;
  font-style: normal;
  ont-weight: bold;
  font-size: 16px;
  line-height: 181%;
  text-align: right;
  color: #F14F42;

`;

const ServicesCard = ({categories: {id, key, price}}) => {

    return (
        <Banner key={id}>
            <BannerText>
                {key}
            </BannerText>
            <BannerPrice>
                {price && price.amount} грн
            </BannerPrice>
        </Banner>
    )
}

ServicesCard.propTypes = {
        categories: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
    })
}

export default ServicesCard;