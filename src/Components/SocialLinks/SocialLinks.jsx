import styles from './SocialLinks.module.scss';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as TwitterX} from '../../assets/icons/twitterX.svg';

const SocialLinks = ({ className }) => {
    return (
        <div className={`${styles.socialLinksContainer} ${className}`}>
            <ul>
                <li>
                    <a href="#">
                        <Instagram width={24} height={24} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Linkedin width={24} height={24} alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Facebook width={24} height={24} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <TwitterX width={24} height={24} alt="Twitter/X" />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default SocialLinks;