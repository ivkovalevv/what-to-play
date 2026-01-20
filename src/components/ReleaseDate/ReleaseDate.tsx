import { formatedDate } from "components/utils/functions";
import styles from "./releasedate.module.scss";

const ReleaseDate = ({ releaseDate }: {releaseDate: string}) => {
    if(!releaseDate){
        console.log(`The game hasn't been released yet.`);
        return null;
    }

    return (
        <div className={styles.releasedate}>
            <h3 className={styles.releasedate__title}>Released:</h3>
            <p className={styles.releasedate__date}>{formatedDate(releaseDate)}</p>
        </div>
    )
}

export default ReleaseDate;