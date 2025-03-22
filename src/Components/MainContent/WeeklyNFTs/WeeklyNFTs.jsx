import SliderNFTs from "../../SliderNFTs/SliderNFTs";

import styles from "./WeeklyNFTs.module.scss";

const WeeklyNFTs = () => {
    return (
        <section className={styles.weeklyNFTs}>
            <h2 className={styles.weeklyNFTs__title}>Weekly - Top NFT</h2>
            <SliderNFTs />
        </section>
    )
};

export default WeeklyNFTs;