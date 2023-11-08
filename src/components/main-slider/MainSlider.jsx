import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from "swiper/modules"
import { SLIDES } from "../../utils/constants"
import SliderItem from "../UI/slider-item/SliderItem"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

export default function MainSlider() {
  return (
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
  )
}
