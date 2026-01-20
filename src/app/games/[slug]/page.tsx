"use client";

import { useParams } from "next/navigation";
import { useGetOneGameQuery, useGetScreenshotsOneGameQuery } from "../../../store/api/rawg-api";
import Link from "next/link";
import styles from "./game-page.module.scss";
import ImageSlider from "components/components/ImageSlider/ImageSlider";
import Platforms from "components/components/Platforms/Platforms";
import localFont from 'next/font/local';
import { Button } from 'antd';
import { ArrowRightOutlined, HeartFilled } from '@ant-design/icons';
import Genres from "components/components/Genres/Genres";
import Developers from "components/components/Devepolers/Developers";

const ChaletComprime = localFont({
  src: '../../../fonts/ChaletComprime/ChaletComprime-CologneSixty.ttf',
})

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
          <div className={styles.game__content}>
            <div className="text-xl">Loading game details...</div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
    <div className={styles.game}>
      <div className={`container ${styles.game__container}`}>
        <div className={styles.game__content}>
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
    </div>
    );

  if (!game)
    return (
    <div className={styles.game}>
      <div className={`container ${styles.game__container}`}>
        <div className={styles.game__content}>
          <Link
            href="/"
            className="block text-center mt-4 text-blue-500 hover:underline"
          >
            ← Back to games
          </Link>
          <div className="text-center text-xl">Game not found</div>
        </div>
      </div>
    </div>
    );

  return (
    <div className={styles.game}>
      <div className={`container`}>
          <div className={styles.game__content}>
            <div className={styles.game__description_wrapper}>
              <div className={styles.game__information_wrapper}>
                <h1 className={`${styles.game__title} ${ChaletComprime.className}`}>{game.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: game.description }} className={styles.game__description}/>
              </div>
              <Developers gameName={game.name} developers={game.developers}/>
              <Genres gameName={game.name} genres={game.genres}/>
              <Platforms gameName={game.name} platforms={game.platforms}/>
            </div>
            <div className={styles.game__slider_wrapper}>
                <div className={styles.game__slider_actions}>
                  <Button className={styles.game__slider_like_button}>
                    <HeartFilled className={styles.game__slider_like_icon}/>
                  </Button>
                  <Button className={styles.game__slider_button} href={game.website} target="_blank">
                    <span>Jump to Website</span>
                    <ArrowRightOutlined className={styles.game__slider_button_icon}/>
                  </Button>
                </div>
                <ImageSlider screenshots={screenshots}/>
            </div>
          </div>
      </div>
      <Button className={styles.game__back_button} onClick={() => window.history.back()}>
        <ArrowRightOutlined/>
      </Button>
    </div>
  )
}
