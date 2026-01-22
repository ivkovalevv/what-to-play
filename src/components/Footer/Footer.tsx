import Signatire from "components/UI/Signature/Signature";
import styles from "./footer.module.scss";
import CircleLogo from 'components/UI/СircleLogo/CircleLogo';
import Link from "next/link";

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
                                    <li className={styles.footer__content_list_item}>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className={styles.footer__content_list_item}>
                                        <Link href="/profile">Profile</Link>
                                    </li>
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
                                    <li className={styles.footer__content_list_item}>
                                        <a href="tel:+79151049060">8 (915) 104-90-60</a>
                                    </li>
                                    <li className={styles.footer__content_list_item}>
                                        <a href="mailto:ivkovalevv@gmail.com">ivkovalevv@gmail.com</a>
                                    </li>
                                    <li className={styles.footer__content_list_item}>
                                        <a href="mailto:ivkovalevv@yandex.ru">ivkovalevv@yandex.ru</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.footer__content}>
                                <p className={`${styles.footer__content_heading} ${styles.footer__content_heading_special}`}>Socials</p>
                                <ul className={`${styles.footer__content_list} ${styles.footer__content_list_special}`}>
                                    <li className={styles.footer__content_list_item}>
                                        <a href="https://github.com/ivkovalevv" target="_blank">Github</a>
                                    </li>
                                    <li className={styles.footer__content_list_item}>
                                        <a href="https://t.me/x_kovalev" target="_blank">Telegram</a>
                                    </li>
                                    <li className={styles.footer__content_list_item}>
                                        <a href="https://wa.me/79151049060" target="_blank">WhatsApp</a>
                                    </li>
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