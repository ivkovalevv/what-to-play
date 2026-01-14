import { Screenshot, Screenshots } from "components/store/api/rawg-api";
/* import Swiper from 'react-id-swiper'; */
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import styles from "./image-slider.module.scss";

type ImageSliderProps = {
    screenshots?: Screenshots;
}

const ImageSlider = ({ screenshots }: ImageSliderProps) => {
    const params = {
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        }
    }

    return (
        <Swiper {...params} className={styles.slider}>
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