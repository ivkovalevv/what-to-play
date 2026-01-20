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
        <div className={styles.platforms}>
            <h3 className={styles.platforms__title}>Platforms:</h3>
            <ul className={styles.platforms__list}>
                {platformsList.map((platform) => {
                    return <li key={platform} className={styles.platforms__item} data-tooltip={platform}>
                        <img src={`/assets/images/${platform.toLowerCase()}-icon.png`} alt={platform} className={styles.platforms__icon}/>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Platforms;