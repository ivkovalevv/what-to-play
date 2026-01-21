import localFont from 'next/font/local'
import styles from "./footer.module.scss";
import CircleLogo from 'components/UI/СircleLogo/CircleLogo';

const SpecialGothicExpandedOne = localFont({
  src: '../../fonts/SpecialGothicExpandedOne/SpecialGothicExpandedOne-Regular.ttf',
})

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <CircleLogo text={"What to play?"}/>
            </div>
        </footer>
    );
};

export default Footer;