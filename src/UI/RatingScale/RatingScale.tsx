import { Rating } from "components/components/Ratings/ratings.types";
import styles from "./ratingscale.module.scss";

const RatingScale = ({ ratings }: {ratings: Rating[]}) => {
    return (
        <ul className={styles.ratingscale}>
            {
                ratings.map(rating => {
                    return <li style={{
                        width: `${rating.percent}%`
                    }} className={styles.ratingscale__line} data-color={rating.title}></li>
                })
            }
        </ul>
    )
}

export default RatingScale;