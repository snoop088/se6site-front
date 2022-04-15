import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { useWindowSize } from "hooks/useWindowSize";
import { Testimonial } from "interfaces/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { TestimonialItem } from "../testimonial-item/testimonial-item";
import styles from "./testimonials-slider.module.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}
export const TestimonialsSlider = ({
  testimonials,
}: TestimonialsSliderProps) => {
  const wSize = useWindowSize();
  return (
    <Wrapper isWide className={styles.container}>
      <Swiper
        spaceBetween={52}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        navigation={wSize.width! > 480}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.studyId}>
            <div className={styles.testimonialItem}>
              <TestimonialItem
                copyMd={testimonial.copyMd}
                personName={testimonial.person.name}
                personCompany={testimonial.client}
                personPosition={testimonial.person.position}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
