import { ReactComponent as CurveArrow } from "../../../assets/icons/arrow-curve.svg";
import { ReactComponent as MultiDots } from "../../../assets/icons/dots-multi.svg";

import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContentContainer}>
                    <h2 className={styles.heroTitle}>
                        Discover And Create NFTs
                    </h2>
                    <p className={styles.heroDescriptionTop}>
                        OVER 1M CREATORS
                    </p>
                    <p className={styles.heroDescription}>
                        Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className={styles.heroDescriptionBonus}>$20 bonus</span>
                        <span className={styles.heroDescriptionDot}>.</span>
                    </p>
                    <div className={styles.heroButtonsContainer}>
                        <a href="#" className={styles.heroButton}>
                            Explore More
                        </a>
                        <a href="#" className={`${styles.heroButton} ${styles.heroButtonWhite}`}>
                            Create NFT
                        </a>
                    </div>

                    <div className={styles.statsContainer}>
                        <div className={styles.statsItem}>
                            <p className={styles.statsItemNumber}>430K+</p>
                            <p className={styles.statsItemDescription}>Art Works</p>
                        </div>
                        <div className={styles.statsItem}>
                            <p className={styles.statsItemNumber}>159K+</p>
                            <p className={styles.statsItemDescription}>Creators</p>
                        </div>
                        <div className={styles.statsItem}>
                            <p className={styles.statsItemNumber}>87K+</p>
                            <p className={styles.statsItemDescription}>Collections</p>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImagesContainer}>
                    <div className={styles.heroMainImageContainer}>
                        <picture>
                            <source
                                media="(min-width: 1440px)"
                                srcSet="./assets/content/hero/hero-main-img-desktop.webp 1x, ./assets/content/hero/hero-main-img-desktop@2x.webp 2x"
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 1440px)"
                                srcSet="./assets/content/hero/hero-main-img-desktop.png 1x, ./assets/content/hero/hero-main-img-desktop@2x.png 2x"
                                type="image/png"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet="./assets/content/hero/hero-main-img-tablet.webp 1x, ./assets/content/hero/hero-main-img-tablet@2x.webp 2x"
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet="./assets/content/hero/hero-main-img-tablet.png 1x, ./assets/content/hero/hero-main-img-tablet@2x.png 2x"
                                type="image/png"
                            />
                            <source
                                media="(min-width: 375px)"
                                srcSet="./assets/content/hero/hero-main-img.webp 1x, ./assets/content/hero/hero-main-img@2x.webp 2x"
                                type="image/webp"
                            />
                            <img
                                className={styles.heroMainImage}
                                src='./assets/content/hero/hero-main-img.png'
                                srcSet='./assets/content/hero/hero-main-img@2x.png 2x'
                                width='210'
                                height='210'
                                alt='Main Hero content'
                            />
                        </picture>

                        <picture>
                            <source
                                media="(min-width: 1440px)"
                                src="./assets/content/hero/hero-main-img-blur-desktop.png"
                                type="image/png"
                            />
                            <source
                                media="(min-width: 1024px)"
                                src="./assets/content/hero/hero-main-img-blur-tablet.png"
                                type="image/png"
                            />
                            <img
                                className={styles.heroMainImageBlur}
                                src='./assets/content/hero/hero-main-img-blur.png'
                                width='210'
                                height='210'
                                alt='Main Hero content'
                            />
                        </picture>
                    </div>

                    <div className={styles.heroSideImageContainer}>
                        <picture>
                            <source
                                media="(min-width: 1440px)"
                                srcSet="./assets/content/hero/hero-side-img-desktop.webp 1x, ./assets/content/hero/hero-side-img-desktop@2x.webp 2x"
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 1440px)"
                                srcSet="./assets/content/hero/hero-side-img-desktop.png 1x, ./assets/content/hero/hero-side-img-desktop@2x.png 2x"
                                type="image/png"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet="./assets/content/hero/hero-side-img-tablet.webp 1x, ./assets/content/hero/hero-side-img-tablet@2x.webp 2x"
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet="./assets/content/hero/hero-side-img-tablet.png 1x, ./assets/content/hero/hero-side-img-tablet@2x.png 2x"
                                type="image/png"
                            />
                            <source
                                media="(min-width: 375px)"
                                srcSet="./assets/content/hero/hero-side-img.webp 1x, ./assets/content/hero/hero-side-img@2x.webp 2x"
                                type="image/webp"
                            />
                            <img
                                className={styles.heroSideImage}
                                src='./assets/content/hero/hero-side-img.png'
                                srcSet='./assets/content/hero/hero-side-img@2x.png 2x'
                                width='170'
                                height='170'
                                alt='Main Hero side content'
                            />
                        </picture>

                        <picture>
                            <source
                                media="(min-width: 1440px)"
                                src="./assets/content/hero/hero-side-img-blur-desktop.png"
                                type="image/png"
                            />
                            <source
                                media="(min-width: 1024px)"
                                src="./assets/content/hero/hero-side-img-blur-tablet.png"
                                type="image/png"
                            />
                            <img
                                className={styles.heroSideImageBlur}
                                src='./assets/content/hero/hero-side-img-blur.png'
                                width='170'
                                height='170'
                                alt='Main Hero side content'
                            />
                        </picture>
                    </div>

                    <CurveArrow className={styles.heroCurveArrow} />
                    <MultiDots className={styles.heroMultiDots} />
                </div>
            </div>
        </section>
    );
};

export default Hero;