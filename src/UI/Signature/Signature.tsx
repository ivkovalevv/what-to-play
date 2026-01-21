import styles from "./signature.module.scss"

const Signatire = () => {
    return (
        <div className={styles.signature__wrapper}>
            <p className={styles.signature}>
                Created by 
                <a href="https://github.com/ivkovalevv" target="_blank" className={styles.signature__link}>Ivkovalevv</a> 
                © 2026
            </p>
            <p className={styles.signature}>
                All Rights Reserved
            </p>
        </div>
    );
};

export default Signatire;