import styles from "./platforms.module.scss";

export type Platform = {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}

type PlatformsProps = {
    platforms: Platform[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
    return (
        <ul className={styles.platforms__list}>
            {platforms.map((platform) => {
                return <li className={styles.platforms__item} key={platform.platform.id}>{
                    platform.platform.name === "Linux"
                    ? <img src="/assets/images/linux-icon.png" alt={platform.platform.name} /> 
                    : platform.platform.name
                }</li>
            })}
        </ul>
    )
}

export default Platforms;