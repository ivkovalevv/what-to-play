import { GenresProps } from "./genres.types";
import styles from "./genres.module.scss";

const Genres = (props: GenresProps) => {
    if(props.genres.length === 0){
        console.log(`The game ${props.gameName} is not available on any of the platforms.`);
        return null;
    }

    return (
        <ul className={styles.genres__list}>
            <li className={`${styles.genres__item} ${styles.genres__item_special}`}>
                <p className={styles.genres__item_description}>Genres:</p>
            </li>
            {
                props.genres.map((genre) => {
                    return <li className={styles.genres__item}>{genre.name}</li>
                })
            }
        </ul>
    )
}

export default Genres;