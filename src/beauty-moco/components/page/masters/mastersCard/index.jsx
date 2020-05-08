import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import one from '../../../../assets/img/master/employee0.png';
import too from '../../../../assets/img/master/employee1.png';
import three from '../../../../assets/img/master/employee2.png';
import four from '../../../../assets/img/master/employee4.png';

const Banner = styled.div`
    display: flex;
    width: 49%;
    height: 128px;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 10px;
    margin: 0.5%;
    border: 1px solid #DADADA;
    @media screen and (max-width: 668px){
        width: 100%;
        margin: 0;
        margin-top: 1%;
    }
`;

const BannerPhoto = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 20px;
    transform: translate(15%, 30%);
    img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
`;

const BannerText = styled.div`
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 600;
    transform: translateY(20%);
    margin-left: 5px;
    color: #021D21;
    h2{
        font-size: 18px;
        line-height: 150%;

    }
    p{
        font-size: 18px;
        line-height: 150%;

    }
`;

const masterCard = ({employee}) => {
    const { name, description, photo } = employee;
    return (
            <Banner>
                <BannerPhoto>
                    <img src={photo} alt={`${name}`}/>
                </BannerPhoto>
                <BannerText>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </BannerText>
            </Banner>
    )
}

masterCard.propTypes = {
    employee: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        photo: PropTypes.string,
        id: PropTypes.string
    })
}

export default masterCard;
