import SocialLinks from "../SocialLinks/SocialLinks";
import { ReactComponent as FooterLogo } from "../../assets/icons/logo-full.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogoContainer}>
                    <FooterLogo className={styles.footerLogo} width={144} height={46} alt="Logo of DiveSea" />
                </div>
                <SocialLinks className={styles.socialLinksContainerFooter} />
                <ul className={styles.footerNavList}>
                    <li>
                        <a href="#">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Term & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>
                    </li>
                </ul>
                <p className={styles.footerCopyright}>
                    © 2023 <span>DiveSea All Rights Reserved.</span>
                </p>
            </div>
        </footer>
    )
};

export default Footer;