import styled, {css} from "styled-components";

const Banner = styled.div`
  width: 100%;
  ${({theme}) => css`
    background-color: ${theme.colors.bodyColor};
  `};
`;

const BannerWrap = styled.div`
  padding: 50px 10px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 669px){
      flex-direction: column;
  }
`;

const BannerLeft = styled.div`
  width: 49%;
  margin-right: 1%;
  @media screen and (max-width: 669px){
      width: 100%;
      margin: 1% 0 0 0;
  }
`;

const BannerRight = styled.div`
  width: 49%;
  margin-left: 1%;
  padding-top: 20px;
  iframe {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: none;
      @media screen and (max-width: 669px){
        height: 300px;
      }
    }
   @media screen and (max-width: 669px){
      width: 100%;
      margin: 1% 0 0 0;
  }
`;

export {
    Banner,
    BannerWrap,
    BannerLeft,
    BannerRight
}