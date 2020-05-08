import React, {useContext, useEffect, useMemo, useState} from 'react';
import Slider from "./Slider";
import Review from "./Review";
import useWindowSize from '@rehooks/window-size';
import {CompanyContext} from "../../../../../../context/company.context";
import {getReviewsApi} from "../../../../../../_api/rewiews";
import Spinner from '../../../spinner';
import styled from 'styled-components';

const Banner = styled.div`
`;

const getSlidesPerView = (innerWidth) => (
  innerWidth > 1140
    ? 4 : innerWidth > 768
    ? 3 : innerWidth > 480
    ? 2 : 1
);

const ReviewSlider = () => {
  let { innerWidth } = useWindowSize();
  const slidesPerView = useMemo(()=>{
      return getSlidesPerView(innerWidth)
    }
  , [innerWidth]);

  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoadind] = useState(true);

  const {company}= useContext(CompanyContext);

  useEffect(() => {
    async function getReviews(id) {
      try{
        const {data} = await getReviewsApi(id);
        setReviewsList(data ? data : []);
        setLoadind(false);
      } catch (e) {
        setReviewsList([])
      }
    }
    getReviews(company.id);
  }, []);

  return (
    <Banner>
        {loading ? <Spinner /> :
            <Slider
                spaceBetween={28}
                slidesPerView={slidesPerView}
                pagination={{
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                }}
                rebuildOnUpdate={true}
            >
                {
                    reviewsList.map((review)=>(
                        <Review {...review} key={review.id} />
                    ))
                }
            </Slider>
        }
    </Banner>
  );
};

export default ReviewSlider;
