'use client';

import localFont from 'next/font/local'
import styles from "./hero.module.scss";
import { Button } from 'antd';

const stackSansNotchFont = localFont({
  src: '../../fonts/StackSansNotch/StackSansNotch-Regular.ttf',
})

const Hero = () => {
    return (
        <section className={styles.hero}>
            <video autoPlay loop muted controls={false} className={styles.hero__background_video}>
                <source src="/assets/video/background-video.mp4" type="video/mp4"/>
            </video>
            <div className={`container ${styles.hero__сontainer}`}>
                {<div className={styles.hero__сontent}>
                    <p className={styles.hero__intro}>BEST GAME STORE</p>
                    <h1 className={`${styles.hero__title} ${stackSansNotchFont.className}`}>Your Next Game is Here</h1>
                    <p className={styles.hero__description}>Find your perfect match. Compare the ratings.<br/> Make a decision in a matter of seconds.</p>
                    <Button className={styles.hero__button} href="#popular-games">Get Started</Button>
                </div>}
            </div>
        </section>
    )
}

export default Hero;