import { convertingRatingsList, getRatingColor } from "components/utils/functions";
import styles from "./ratings.module.scss";
import { RatingsProps } from "./ratings.types";
import RatingScale from "components/UI/RatingScale/RatingScale";

const Ratings = (props: RatingsProps) => {
    if(props.ratings.length === 0){
        console.log(`The game ${props.gameName} has no ratings.`);
        return null;
    }

    let ratings = convertingRatingsList(props.ratings);

    return (
        <div className={styles.ratings}>
            <p className={styles.ratings__rating} data-color={getRatingColor(props.rating)}>{props.rating}</p>
            <div className={styles.ratings__ratings_wrapper}>
                <RatingScale ratings={ratings}/>
                <ul className={styles.ratings__list}>
                    {
                        ratings.map((value) => {
                            return (
                                <li key={value.id} className={styles.ratings__item}>
                                    <div className={styles.ratings__item_dot} data-color={value.title}></div>
                                    <p className={styles.ratings__item_title}>{value.title}</p>
                                    <p className={styles.ratings__item_value}>{value.count}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Ratings;