import React from 'react';
import styled, {css} from 'styled-components';
import Icon from 'react-icons-kit';
import {quotesLeft} from 'react-icons-kit/icomoon/quotesLeft'

const SwiperSlide = styled.div.attrs({
  className: 'swiper-slide'
})`
  && {
    padding-top: 20px;
    height: 410px;
  }
  display: flex;
`;

const Wrapper = styled.li`
list-style: none;
  position:relative;
  border: 1px solid rgba(67, 67, 67, 0.24);
  box-shadow: 0 0 5px rgba(67, 67, 67, 0.24);
  border-radius: 4px;
  display:flex;
  flex-direction: column;
  flex: 1;
  ${({theme}) => css`
    background-color: ${theme.colors.bodyColor};
  `}
`;

const QuoteIcon = styled(Icon).attrs({
  icon: quotesLeft,
  size: 36
})`
  position:absolute;
  left: 24px;
  right: 24px;
  color: #F14F42;
`;
const AvatarWrap = styled.div`
  border: 1px solid rgba(229, 229, 229, 0.17);
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(36, 42, 68, 0.08);
  width: 64px;
  height: 64px;
  overflow:hidden;
  border-radius: 50%;
  margin: 0 auto;
  
  img {
    width: 100%;
  }
`;
const AuthorLine = styled.div`
  padding: 10px 20px;
  min-height: 72px;
  display:flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-family: Avenir Next;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #021D21;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
`;

const QuoteWrap = styled.div`
  flex: 1;
  padding: 32px 36px;
`;

const QuoteText = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #021D21;
  padding: 40px 0;
`;

const Review = ({
  profile,
  img,
  text,
    id
}) => {
  return (
    <SwiperSlide>
      <Wrapper key={id}>
        <QuoteWrap>
          <QuoteIcon/>
          <AvatarWrap>
            <img alt={profile} src={img} />
          </AvatarWrap>
          <QuoteText>
            {text}
          </QuoteText>
        </QuoteWrap>
        <AuthorLine>
          {profile}
        </AuthorLine>
      </Wrapper>
    </SwiperSlide>
  );
};

export default Review;
