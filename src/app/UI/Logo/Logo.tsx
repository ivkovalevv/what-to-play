import styles from "./logo.module.scss"


const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <img src={"/assets/images/svg/logo.svg"} className={styles.logo} alt="логотип"/>
            <h4 className={styles.heading}>
                What To Play 
                <div className={styles.plusWrapper}>
                    <p className={styles.plus}>+</p>
                </div>
            </h4>
        </div>
    )
}

export default Logo