"use client";

import { useParams } from "next/navigation";
import { useGetOneGameQuery, useGetScreenshotsOneGameQuery } from "../../../store/api/rawg-api";
import Link from "next/link";
import styles from "./game-page.module.scss";

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

  console.log(screenshots?.results);

  if (isLoading)
    return (
      <div className={`container ${styles.game__container}`}>
        <div className="text-xl">Loading game details...</div>
      </div>
    );

  if (error)
    return (
      <div className={`container ${styles.game__container}`}>
        <div className="text-red-500 text-center text-xl">
          Error loading game
        </div>
        <Link
          href="/"
          className="block text-center mt-4 text-blue-500 hover:underline"
        >
          ← Back to games
        </Link>
      </div>
    );

  if (!game)
    return (
      <div className={`container ${styles.game__container}`}>
        <div className="text-center text-xl">Game not found</div>
        <Link
          href="/"
          className="block text-center mt-4 text-blue-500 hover:underline"
        >
          ← Back to games
        </Link>
      </div>
    );

  return (
      <div className={`container ${styles.game__container}`}>
        <h1 className={styles.game__title}>{game.name}</h1>
    </div>
  )
}
