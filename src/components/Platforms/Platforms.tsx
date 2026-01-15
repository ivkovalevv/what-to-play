import { convertingPlatformsList } from "components/utils/functions";
import styles from "./platforms.module.scss";

export type Platform = {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}

export type PlatformsProps = {
    platforms: Platform[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
    let platformsList = convertingPlatformsList({platforms});
    
    return (
        <ul className={styles.platforms__list}>
            {platformsList.map((platform) => {
                return <li className={styles.platforms__item} key={platform}>{
                    platform === "Linux"
                    ? <img src="/assets/images/linux-icon.png" alt={platform} /> 
                    : platform
                }</li>
            })}
        </ul>
    )
}

export default Platforms;