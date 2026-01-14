"use client";

import { useParams } from "next/navigation";
import { useGetOneGameQuery, useGetScreenshotsOneGameQuery } from "../../../store/api/rawg-api";
import Link from "next/link";
import styles from "./game-page.module.scss";
import ImageSlider from "components/components/ImageSlider/ImageSlider";
import Platforms from "components/components/Platforms/Platforms";

export default function GamePage() {
  const params = useParams();
  const { slug } = params;

  const {
    data: game,
    isLoading,
    error,
  } = useGetOneGameQuery({ slug: String(slug) });

  const { 
    data: screenshots, 
    isLoading: isLoadingScreenshots, 
    error: errorScreenshots,
  } = useGetScreenshotsOneGameQuery({ slug: String(slug) });

  if (isLoading)
    return (
      <div className={styles.game}>
        <div className={`container ${styles.game__container}`}>
          <div className="text-xl">Loading game details...</div>
        </div>
      </div>
    );

  if (error)
    return (
    <div className={styles.game}>
      <div className={`container ${styles.game__container}`}>
        <Link
          href="/"
          className="block text-center mt-4 text-blue-500 hover:underline"
        >
          ← Back to games
        </Link>
        <div className="text-red-500 text-center text-xl">
          Error loading game
        </div>
      </div>
    </div>
    );

  if (!game)
    return (
    <div className={styles.game}>
      <div className={`container ${styles.game__container}`}>
        <Link
          href="/"
          className="block text-center mt-4 text-blue-500 hover:underline"
        >
          ← Back to games
        </Link>
        <div className="text-center text-xl">Game not found</div>
      </div>
    </div>
    );

  return (
    <div className={styles.game}>
      <div className={`container ${styles.game__container}`}>
          <div className={styles.game__information_wrapper}>
            <h1 className={styles.game__title}>{game.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: game.description }} className={styles.game__description}/>
          </div>
          <ImageSlider screenshots={screenshots}/>
      </div>
      <Platforms platforms={game.platforms}/>
    </div>
  )
}
