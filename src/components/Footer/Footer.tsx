import Signatire from "components/UI/Signature/Signature";
import styles from "./footer.module.scss";
import CircleLogo from 'components/UI/СircleLogo/CircleLogo';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__overlay}>
                <div className={`container ${styles.footer__container}`}>
                    <CircleLogo text={"What to play?"}/>
                    <div className={styles.footer__content_wrapper}>
                        <div className={styles.footer__content}></div>
                        <div className={styles.footer__content}></div>
                    </div>
                    <Signatire/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;