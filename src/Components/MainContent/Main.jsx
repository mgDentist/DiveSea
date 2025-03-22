import styles from "./Main.module.scss";
import CreateNFTs from "./CreateNFTs/CreateNFTs";
import WeeklyNFTs from "./WeeklyNFTs/WeeklyNFTs";
import Hero from "./Hero/Hero";

const Main = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <WeeklyNFTs />
            <CreateNFTs />
        </main>
    );
};

export default Main;