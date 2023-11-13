import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from "swiper/modules"
import { SLIDES } from "../../utils/constants"
import SliderItem from "../UI/slider-item/SliderItem"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import styled from "styled-components"

export default function MainSlider() {
  return (
    <SwiperOverrides>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        effect={"fade"}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliderItem bgimage={slide.image} action_element={slide.motion_item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperOverrides>
  )
}
const SwiperOverrides = styled.div`
  .swiper-pagination {
    text-align: left;
    margin: 0 0 30px 80px;
  }

  .swiper-pagination-bullet {
    background-image: url("/bullet-icon.svg");
    opacity: 1;
    width: 30px;
    height: 30px;
    background-size: cover;
    border: none;
  }
  .swiper-pagination-bullet-active {
    background: #5084ec;
    background-size: cover;
  }

  @media (max-width: 768px) {
    .swiper-pagination {
      text-align: center;
      margin: 0;
    }
  }

  @media (max-width: 480px) {
  }
`
