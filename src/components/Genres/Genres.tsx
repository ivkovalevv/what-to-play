import { GenresProps } from "./genres.types";
import styles from "./genres.module.scss";

const Genres = (props: GenresProps) => {
    if(props.genres.length === 0){
        console.log(`The game ${props.gameName} is not available on any of the platforms.`);
        return null;
    }

    return (
        <div className={styles.genres}>
            <h3 className={styles.genres__title}>Genres:</h3>
            <ul className={styles.genres__list}>
                {
                    props.genres.map((genre) => {
                        return <li key={genre.id} className={styles.genres__item}>{genre.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Genres;