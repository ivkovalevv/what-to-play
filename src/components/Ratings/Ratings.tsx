import { convertingRatingsList } from "components/utils/functions";
import styles from "./ratings.module.scss";
import { RatingsProps } from "./ratings.types";

const Ratings = (props: RatingsProps) => {

    let ratings = convertingRatingsList(props.ratings);

    return (
        <div className={styles.ratings}>
            <p className={styles.ratings__rating}>{props.rating}</p>
            <ul>
                {
                    ratings.map((value) => {
                        return <li key={value.id} style={{display: "flex"}}>
                            <p>{value.title}</p>
                            <p>{value.count}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Ratings;