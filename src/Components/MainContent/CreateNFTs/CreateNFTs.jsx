import styles from "./CreateNFTs.module.scss";

const CreateNFTs = () => {
    return (
        <section className={styles.createNFTs}>
            <div className={styles.createNFTsContainer}>
                <h2 className={styles.visuallyHidden}>Create your NFTs</h2>
                <div className={styles.createNFTsContent}>
                    <h3>Create and Sell NFTs</h3>
                    <p>World’s Largest NFT Place</p>
                    <div className={styles.createNFTsButtonsContainer}>
                        <a href="#" className={`${styles.buttonNFT} ${styles.createNFTsExploreLink}`}>Explore More</a>
                        <a href="#" className={`${styles.buttonNFT} ${styles.createNFTsSellLink}`}>Sell Artwork</a>
                    </div>
                </div>
                <div className={styles.createNFTsImageContainer}>
                    <picture>
                        <source type="image/webp" media="(min-width: 1440px)" srcSet="/assets/content/create-sell-nft/createNFT-desktop.webp 1x, /assets/content/create-sell-nft/createNFT-desktop@2x.webp 2x" width="369" height="249" />
                        <source type="image/webp" media="(min-width: 1024px)" srcSet="/assets/content/create-sell-nft/createNFT-tablet.webp 1x, /assets/content/create-sell-nft/createNFT-tablet@2x.webp 2x" width="263" height="187" />
                        <source type="image/webp" srcSet="./assets/content/create-sell-nft/createNFT-mobile.webp 1x, ./assets/content/create-sell-nft/createNFT-mobile@2x.webp 2x" width="251" height="130" />
                        <source type="image/png" media="(min-width: 1440px)" srcSet="./assets/content/create-sell-nft/createNFT-desktop.png 1x, ./assets/content/create-sell-nft/createNFT-desktop@2x.png 2x" width="369" height="249" />
                        <source type="image/png" media="(min-width: 1024px)" srcSet="./assets/content/create-sell-nft/createNFT-tablet.png 1x, ./assets/content/create-sell-nft/createNFT-tablet@2x.png 2x" width="263" height="187" />
                        <img className={styles.createNFTsImage} src="./assets/content/create-sell-nft/createNFT-mobile.png" srcSet="./assets/content/create-sell-nft/createNFT-mobile@2x.png 2x" width="251" height="130" alt="Create and sell NFTs." />
                    </picture>
                    <img className={styles.createNFTsBlur} src="./assets/content/create-sell-nft/blurNFT.png" srcSet="./assets/content/create-sell-nft/blurNFT@2x.png 2x" alt='' />
                </div>

            </div>
        </section>
    );
};

export default CreateNFTs;