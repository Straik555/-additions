import styled, {css} from "styled-components";

const Banner = styled.div`
  width: 100%;
  padding-top: 40px;
  ${({theme}) => css`
  background-color: ${theme.colors.bodyColor};
`}
`;

const BannerHeader = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  @media screen and (max-width: 769px){
    flex-wrap: wrap;
  }
`;

const BannerWrap = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  margin: 0.5%;
  height: 200px;
  padding: 30px;
  box-sizing: border-box;
  border: 3px solid transparent;
  border-radius: 5px;
   ${({background}) => css`
    background: url("${background}") silver;
  `}
  :hover{
  border: 3px solid #F36559;
  }
`;

const Title = styled.p`
  position: absolute;
  width: 50%;
  left: 5%;
  bottom: 5%;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;


color: #FFFFFF;
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: start;
  align-content: flex-start;
  padding: 0 20px 20px 20px;
`;

export {
    Banner,
    BannerHeader,
    BannerWrap,
    Title,
    BannerContainer
}