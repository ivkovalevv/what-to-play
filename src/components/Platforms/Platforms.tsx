import styles from "./platforms.module.scss";

export type Platform = {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}

const Platforms = ({ platforms }: { platforms: Platform[] }) => {
    return (
        <ul className={styles.platforms__list}>
            {platforms.map((platform) => {
                return <li className={styles.platforms__item} key={platform.platform.id}>{
                    platform.platform.name === "Xbox One" || platform.platform.name === "Xbox Series S/X"
                    ? <img src="/assets/images/xbox-icon.png" alt={platform.platform.name} /> 
                    : platform.platform.name
                }</li>
            })}
        </ul>
    )
}

export default Platforms;