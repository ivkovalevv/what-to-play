import { GenresProps } from "./genres.types";
import styles from "./genres.module.scss";
import { useEffect, useRef } from "react";

const Genres = (props: GenresProps) => {
    if(props.genres.length === 0){
        console.log(`The game ${props.gameName} is not available on any of the platforms.`);
        return null;
    }

    const scrollXContainer = useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        const container = scrollXContainer.current;
        if (!container) return;

        container.addEventListener("wheel", (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });
    }, []);

    return (
        <div className={styles.genres}>
            <h3 className={styles.genres__title}>Genres:</h3>
            <ul ref={scrollXContainer} className={styles.genres__list}>
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