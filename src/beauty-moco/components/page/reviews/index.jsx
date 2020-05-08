import React from 'react';
import styled from 'styled-components';
import ReviewSlider from "./ReviewSlider";
import {func} from 'prop-types';
import withMetadata from "../../../../../_hocs/withMetadata";
import 'react-id-swiper/lib/styles/scss/swiper.scss'

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 100px;
  background: #f4f4f682;
  @media screen and (max-width: 700px) {
    padding: 40px;
  }
`;

const Reviews = () => {
  return (
    <Wrapper>
      <ReviewSlider />
    </Wrapper>
  );
};

Reviews.propTypes = {
  t: func.isRequired,
};

export default withMetadata(Reviews);
