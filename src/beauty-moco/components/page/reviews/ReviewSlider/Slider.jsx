import React, {memo} from 'react';
import Swiper from "react-id-swiper";
import styled from 'styled-components';

const Slider = memo(({
  className,
  children,
  ...params
}) => (
  <Swiper {...params} containerClass={`swiper-container ${className}`}>
    {children}
  </Swiper>
));

const StyledSwiper = styled(Slider)`
  && {
    padding-bottom: 65px;
  }
  
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 7px;
    &:focus {
      outline: none;
      
    }
    
    &-active {
      background-color: #0B184B;
    }
  }
`;

export default StyledSwiper;