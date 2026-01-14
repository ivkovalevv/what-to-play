import { Screenshot, Screenshots } from "components/store/api/rawg-api";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from "./image-slider.module.scss";

type ImageSliderProps = {
    screenshots?: Screenshots;
}

const ImageSlider = ({ screenshots }: ImageSliderProps) => {
    return (
        <Swiper 
            modules={[Autoplay, Pagination, EffectCoverflow]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
                rotate: 60,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }}
            loop
            pagination={{ clickable: true }}
            className={styles.slider}>
                {
                    screenshots?.results.map((screenshot: Screenshot) => {
                        return <SwiperSlide>
                            <img src={screenshot.image} alt="slide-image" className={styles.slider__image}/>
                        </SwiperSlide>
                    })
                }
        </Swiper>
    )
}

export default ImageSlider;