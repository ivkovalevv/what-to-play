import styles from "./signature.module.scss"

const Signatire = () => {
    return (
        <p className={styles.signature}>
            Created by 
            <a href="https://github.com/ivkovalevv" target="_blank" className={styles.signature__link}>Ivkovalevv</a> 
            © 2026
        </p>
    );
};

export default Signatire;