import FeaturedInStyle from "./featured-in.styled";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useCallback, useRef } from "react";
import SectionTitle from "@/components/utils/section-title";
const SlideImageStyle = styled.div`
  position: relative;
  width: 75%;
  height: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
  }
`;
const StyledSwiperBtn = styled.div`
  position: absolute;
  top: -50px;
  border-radius: 20px;
  background-color: #247eaf;
  padding: 6px;
  cursor: pointer;
  color: #fff;
  .icon {
    font-size: 25px;
  }
  ${(props) => {
    if (props?.placement === "right") return `right:0px`;
    else if (props?.placement === "left") return `right:50px`;
  }};
  @media only screen and (max-width: 768px) {
    top: -35px;
    .icon {
      font-size: 18px;
    }
  } ;
`;

const FeaturedIn = () => {
  SwiperCore.use([Autoplay]);
  const swiper = useRef();

  const hanleSwiperNextPrev = useCallback(
    (action) => {
      if (action === "next") {
        swiper?.current?.slideNext();
      } else {
        swiper?.current?.slidePrev();
      }
    },
    [swiper]
  );
  return (
    <FeaturedInStyle>
      <Container>
        <div className="featured-in">
          <SectionTitle title="Featured In" desc="Top cryptocurrencies" />
          <div className="slide">
            <Swiper
              onInit={(_) => (swiper.current = _)}
              slidesPerView={3}
              spaceBetween={20}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                567: {
                  width: 567,
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                320: {
                  width: 320,
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                // 768: {
                //   width: 768,
                //   slidesPerView: 3,
                //   spaceBetween: 20,
                // },
                // 992: {
                //   width: 992,
                //   slidesPerView: 4,
                //   spaceBetween: 30,
                // },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/coindesk.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/digital.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/forbes.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/coindesk.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/cryptocompare.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/hedgeweek.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/investopedia.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/kaiko.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImageStyle>
                  <Image src={"/delete/financemagnates.svg"} layout="fill" />
                </SlideImageStyle>
              </SwiperSlide>
            </Swiper>
            <StyledSwiperBtn
              className="swipbtn"
              placement="right"
              onClick={() => hanleSwiperNextPrev("next")}
            >
              <IoIosArrowForward className="icon" />
            </StyledSwiperBtn>
            <StyledSwiperBtn
              className="swipbtn"
              placement="left"
              onClick={() => hanleSwiperNextPrev("prev")}
            >
              <IoIosArrowBack className="icon" />
            </StyledSwiperBtn>
          </div>
        </div>
      </Container>
    </FeaturedInStyle>
  );
};

export default FeaturedIn;
