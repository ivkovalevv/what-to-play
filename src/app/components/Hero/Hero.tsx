'use client';

import styles from "./hero.module.scss";
import { Typography, Button } from 'antd';

const Hero = () => {
    const { Title } = Typography;
    const { Text } = Typography;

    return (
        <section className={styles.hero}>
            <video autoPlay loop muted controls={false} className={styles.hero__background_video}>
                <source src="/assets/video/background-video.mp4" type="video/mp4"/>
            </video>
            <div className={`container ${styles.hero__сontainer}`}>
                {<div className={styles.hero__сontent}>
                    <Text className={styles.hero__intro}>BEST GAME STORE</Text>
                    <Title className={styles.hero__title} level={1}>Your Next Game is Here</Title>
                    <Text className={styles.hero__description}>Find your perfect match. Compare the ratings.<br/> Make a decision in a matter of seconds.</Text>
                    <Button className={styles.hero__button}>Get Started</Button>
                </div>}
            </div>
        </section>
    )
}

export default Hero;