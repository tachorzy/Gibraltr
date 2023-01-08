import styles from '../styles/Home.module.css'

const HomePageInfo = () => {

    return(
        <div>
            <h2 className={styles.infoTitle}>It's always best to know, before you go.</h2>
            <p className={styles.info}>That's why we're to keep you aware of visa requirements for wherever you're headed.<br/>Stay informed of the different tourist visas in your destination and how to get them!</p>
    </div>
    );
}

export default HomePageInfo;