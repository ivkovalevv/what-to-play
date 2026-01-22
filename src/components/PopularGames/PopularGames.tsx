"use client";

import {
  useGetGamesQuery,
  useGetInfiniteGamesQuery,
} from "components/store/api/rawg-api";
import { Card, Row, Col, Spin, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useState } from "react";
import styles from "./popular-games.module.scss";
import Link from "next/link";
import { formatedDate } from "components/utils/functions";

export const PopularGames = () => {
  const [page, setPage] = useState(1);
  /* const { data, error, isLoading } = useGetGamesQuery({ page: 1, pageSize: 12 }); */
  const { data, error, isLoading } = useGetInfiniteGamesQuery({ page });

  const { Text } = Typography;

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) return <Spin size="large" />;
  if (error) return <Text type="danger">An error has occurred!</Text>;

  return (
    <section id="popular-games" className={styles.popular}>
      <div className={`container ${styles.game_list__container}`}>
        <h2 className={styles.heading}>Popular Games</h2>
        <Row gutter={[16, 16]}>
          {data?.results.map((game) => (
            <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
              <Link href={`/games/${game.slug}`} className={styles.cardLink}>
                <Card
                  className={styles.card}
                  hoverable
                  cover={
                    <img
                      alt={game.name}
                      src={game.background_image}
                      style={{ height: 280, objectFit: "cover" }}
                    />
                  }
                >
                  <Card.Meta
                    className={`${styles["card-title"]} `}
                    title={game.name}
                    description={
                      <div className={styles.card__content}>
                        <p>{`Release date: ${formatedDate(game.released)}ㅤ|ㅤ`}</p>
                        <div className={styles.card__star_wrapper}>
                          <StarFilled className={styles.card__star} />{" "}
                          <p>{game.rating}</p>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <button onClick={loadMore} disabled={isLoading} className={styles.button_more}>
            {isLoading ? "Loading..." : "Load More"}
          </button>
      </div>
    </section>
  );
};
