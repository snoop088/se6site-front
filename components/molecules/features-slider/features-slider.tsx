import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { FeatureEnterprise } from "interfaces/feature-enterprise";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./features-slider.module.scss";

import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactMarkdown from "react-markdown";
import { useWindowSize } from "hooks/useWindowSize";

interface FeaturesSliderProps {
  features: FeatureEnterprise[];
}
export const FeaturesSlider = ({ features }: FeaturesSliderProps) => {
  const wSize = useWindowSize();
  return (
    <Wrapper isWide className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={52}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
        }}
        navigation={wSize.width! > 480}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.title}>
            <div className={styles.enterpriseFeature}>
              <h1>{feature.title}</h1>
              <div className={styles.copy}>
                <ReactMarkdown>{feature.copyMd}</ReactMarkdown>
              </div>
              <div className={styles.contract}>{feature.contract}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
