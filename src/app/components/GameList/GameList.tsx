'use client';

import { useGetGamesQuery, useGetInfiniteGamesQuery } from "components/app/store/api/rawg-api";
import { Card, Row, Col, Spin, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useState } from "react";
import styles from "./game-list.module.scss";

export const GameList = () => {
    const [page, setPage] = useState(1);
    /* const { data, error, isLoading } = useGetGamesQuery({ page: 1, pageSize: 12 }); */
    const { data, error, isLoading } = useGetInfiniteGamesQuery({ page });

    const { Text } = Typography;

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    if(isLoading) return <Spin size="large"/>;
    if (error) return <Text type="danger">An error has occurred!</Text>;

    return (
        <div className="container">
            <h2 className={styles.heading}>Popular Games</h2>
            <Row gutter={[16, 16]}>
                {data?.results.map((game) => (
                <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
                    <Card
                        className={styles.card}
                        hoverable
                        cover={<img alt={game.name} src={game.background_image} style={{ height: 280, objectFit: 'cover' }} />}
                    >
                        <Card.Meta 
                            className={styles['card-title']} 
                            title={game.name} 
                            description={
                                <>
                                    {`Released: ${game.released} | `}
                                    <StarFilled className={styles.card__star} /> {game.rating}
                                </>
                                } />
                    </Card>
                </Col>
                ))}

                <button 
                    onClick={loadMore} 
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Load More'}
                </button>
            </Row>
        </div>
    )
}