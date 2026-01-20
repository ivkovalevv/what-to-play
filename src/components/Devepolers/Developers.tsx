import { DevelopersProps } from "./developers.types";
import styles from "./developers.module.scss";
import { useEffect, useRef } from "react";

const Developers = (props: DevelopersProps) => {
    if(props.developers.length === 0){
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
        <div className={styles.developers}>
            <h3 className={styles.developers__title}>Developers:</h3>
            <div className={styles.developers__list_wrapper}>
                <ul ref={scrollXContainer} className={styles.developers__list}>
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
        </div>
    )
}

export default Developers;