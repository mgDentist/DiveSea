import { useState, useEffect } from "react";

import SliderTimer from "../SliderTimer/SliderTimer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';

import { ReactComponent as EthereumIcon } from "../../assets/icons/ethereum.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

import styles from "./SliderNFTs.module.scss";

const SliderNFTs = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/DB/slider.json`);
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error("Ошибка при загрузке данных слайдера:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <Swiper
            className="swiper"
            modules={[Navigation]}
            centeredSlides={true}
            centeredSlidesBounds={true}
            centerInsufficientSlides={true}
            loop={true}
            loopedSlides={8}
            spaceBetween={32}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            slidesPerGroup={1}
            allowTouchMove={true}
            simulateTouch={true}
            breakpoints={{
                375: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                },
                1024: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                },
                1440: {
                    slidesPerView: 'auto',
                    spaceBetween: 40,
                },
                1955: {
                    loop: false,
                    slidesPerView: 'auto',
                    spaceBetween: 50,
                },
            }}
        >
            {
                slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={styles.slideContent}>
                            <SliderTimer endDate={slide.endDate} />
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet={`${slide.imageURL["desktop-webp"]} 1x, ${slide.imageURL["desktopRetina-webp"]} 2x`}
                                    type="image/png"
                                />
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet={`${slide.imageURL["mobile-webp"]} 1x, ${slide.imageURL["mobileRetina-webp"]} 2x`}
                                    type="image/png"
                                />
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet={`${slide.imageURL["desktop-png"]} 1x, ${slide.imageURL["desktopRetina-png"]} 2x`}
                                    type="image/png"
                                />
                                <img
                                    className={styles.slideImage}
                                    src={slide.imageURL["mobile-png"]}
                                    srcSet={`${slide.imageURL["mobileRetina-png"]} 2x`}
                                    alt={slide.title}
                                />
                            </picture>
                            <div className={styles.slideInfo}>
                                <h3 className={styles.slideTitle}>{slide.title}
                                </h3>
                                <p className={styles.slideBid}>
                                    <span className={styles.slideBidTitle}>Current bid</span>
                                    <div className={styles.slidePriceContainer}>
                                        <EthereumIcon className={styles.slideIcon} />
                                        <span className={styles.slidePrice}>{slide.currentBid}</span>
                                    </div>
                                </p>

                                <a href="#" className={styles.slideButton}>Place bid</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className={styles.swiperButtonsContainer} >
                <div className="swiper-button-prev">
                    <ArrowIcon className={styles.swiperButtonPrevIcon} />
                </div>
                <div className="swiper-button-next">
                    <ArrowIcon className={styles.swiperButtonNextIcon} />
                </div>
            </div>
        </Swiper >
    )
};

export default SliderNFTs;