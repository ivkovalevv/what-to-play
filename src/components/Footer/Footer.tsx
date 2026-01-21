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
                        <div className={styles.footer__content_container}>
                            <div className={styles.footer__content}>
                                <p className={styles.footer__content_heading}>Sitemap</p>
                                <ul className={styles.footer__content_list}>
                                    <li className={styles.footer__content_list_item}>Home</li>
                                    <li className={styles.footer__content_list_item}>Games List</li>
                                    <li className={styles.footer__content_list_item}>Gaming senter</li>
                                    <li className={styles.footer__content_list_item}>Contacts us</li>
                                </ul>
                            </div>
                            <div className={styles.footer__content}>
                                <p className={styles.footer__content_heading}>Company</p>
                                <ul className={styles.footer__content_list}>
                                    <li className={styles.footer__content_list_item}>Licensing</li>
                                    <li className={styles.footer__content_list_item}>Cookie Policy</li>
                                    <li className={styles.footer__content_list_item}>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footer__content_container}>
                            <div className={styles.footer__content}>
                                <p className={`${styles.footer__content_heading} ${styles.footer__content_heading_special}`}>Contacts</p>
                                <ul className={`${styles.footer__content_list} ${styles.footer__content_list_special}`}>
                                    <li className={styles.footer__content_list_item}>8 (915) 104-90-60</li>
                                    <li className={styles.footer__content_list_item}>ivkovalevv@gmail.com</li>
                                    <li className={styles.footer__content_list_item}>info@what-to-play.ru</li>
                                </ul>
                            </div>
                            <div className={styles.footer__content}>
                                <p className={`${styles.footer__content_heading} ${styles.footer__content_heading_special}`}>Socials</p>
                                <ul className={`${styles.footer__content_list} ${styles.footer__content_list_special}`}>
                                    <li className={styles.footer__content_list_item}>Github</li>
                                    <li className={styles.footer__content_list_item}>Telegram</li>
                                    <li className={styles.footer__content_list_item}>WhatsApp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Signatire/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;