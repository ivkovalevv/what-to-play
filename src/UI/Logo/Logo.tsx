import localFont from 'next/font/local'
import styles from "./logo.module.scss"
import Link from 'next/link'

const SpecialGothicExpandedOne = localFont({
  src: '../../fonts/SpecialGothicExpandedOne/SpecialGothicExpandedOne-Regular.ttf',
})

const Logo = () => {
    return (
        <Link href={'/'} className={styles.wrapper}>
            <img src={"/assets/images/svg/logo.svg"} className={styles.logo} alt="логотип"/>
            <h4 className={`${styles.heading} ${SpecialGothicExpandedOne.className}`}>
                What To Play 
                <div className={styles.plusWrapper}>
                    <p className={styles.plus}>+</p>
                </div>
            </h4>
        </Link>
    )
}

export default Logo