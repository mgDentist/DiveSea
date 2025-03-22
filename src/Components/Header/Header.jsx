import { useState, useEffect } from "react";

import SocialLinks from "../SocialLinks/SocialLinks";

import styles from "./Header.module.scss";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [scrolled, isScrolled] = useState(false);

    const handleBurgerClick = () => {
        if (isBurgerOpen) {
            setIsClosing(true);

            setTimeout(() => {
                setIsBurgerOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsBurgerOpen(true);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isBurgerOpen) {
                setIsBurgerOpen(false);
                setIsClosing(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isBurgerOpen]);

    useEffect(() => {
        if (isBurgerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isBurgerOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                isScrolled(true);
            } else {
                isScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Статичный хедер */}
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.headerContainer}>
                    <div className={styles.logoContainer}>
                        <picture>
                            <source media="(max-width: 1023px" srcSet="/icons/logo-full.svg" type="image/svg+xml" />
                            <img className={styles.logoImg} src="/icons/logo.svg" width={38} height={38} alt="Logo of DiveSea" />
                        </picture>
                    </div>
                    <button
                        onClick={() => handleBurgerClick()}
                        className={styles.menuButton}>
                        <img src={isBurgerOpen ? "/icons/close-cross.svg" : "/icons/burger.svg"} alt="Menu" />
                    </button>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <a href="#">Discover</a>
                            </li>
                            <li>
                                <a href="#">Creators</a>
                            </li>
                            <li>
                                <a href="#">Sell</a>
                            </li>
                            <li>
                                <a href="#">Stats</a>
                            </li>
                        </ul>
                    </nav>
                    <SocialLinks className={styles.socialLinksContainer}></SocialLinks>
                    <button className={styles.connectWalletButton}>Connect Wallet</button>
                </div>
            </header>

            {/* Мобильное меню */}
            {(isBurgerOpen || isClosing) && (
                <div className={`${styles.mobileMenu} ${isBurgerOpen ? styles.open : ''} ${isClosing ? styles.closing : ''}`}>
                    <div className={styles.mobileMenuContainer}>
                        <nav className={styles.navMobile}>
                            <ul className={styles.navListMobile}>
                                <li>
                                    <a href="#">Discover</a>
                                </li>
                                <li>
                                    <a href="#">Creators</a>
                                </li>
                                <li>
                                    <a href="#">Sell</a>
                                </li>
                                <li>
                                    <a href="#">Stats</a>
                                </li>
                            </ul>
                        </nav>
                        <SocialLinks className={styles.socialLinksContainerMobile}></SocialLinks>
                        <button className={`${styles.connectWalletButton} ${styles.connectWalletButtonMobile}`}>Connect Wallet</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;