import { DevelopersProps } from "./developers.types";
import styles from "./developers.module.scss";

const Developers = (props: DevelopersProps) => {
    if(props.developers.length === 0){
        console.log(`The game ${props.gameName} is not available on any of the platforms.`);
        return null;
    }

    return (
        <div className={styles.developers}>
            <h3 className={styles.developers__title}>Developers:</h3>
            <ul className={styles.developers__list}>
                {props.developers.map((developer) => (
                <li 
                    key={developer.id} 
                    className={styles.developers__item}
                >
                    {developer.name}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Developers;