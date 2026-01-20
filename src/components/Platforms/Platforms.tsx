import { convertingPlatformsList } from "components/utils/functions";
import styles from "./platforms.module.scss";
import { PlatformsProps } from "./platforms.types";

const Platforms = ({gameName, platforms = [] }: PlatformsProps) => {
    if(platforms.length === 0){
        console.log(`The game ${gameName} is not available on any of the platforms.`);
        return null;
    }

    let platformsList = convertingPlatformsList({platforms});

    return (
        <ul className={styles.platforms__list}>
            <li className={`${styles.platforms__item} ${styles.platforms__item_special}`}>
                <p className={styles.platforms__item_description}>Platforms:</p>
            </li>
            {platformsList.map((platform) => {
                return <li className={styles.platforms__item} key={platform} data-tooltip={platform}>
                    <img src={`/assets/images/${platform.toLowerCase()}-icon.png`} alt={platform} className={styles.platforms__icon}/>
                </li>
            })}
        </ul>
    )
}

export default Platforms;