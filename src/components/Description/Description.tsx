import styles from "./description.module.scss";

const Description = ({ description }: { description: string }) => {
    return (
        <div className={styles.description}>
            <div className={styles.description__wrapper}>
                <p className={styles.description__content}>{description}</p>
            </div>
        </div>
    );
};

export default Description;