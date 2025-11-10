'use client';

import { useGetGamesQuery, useGetInfiniteGamesQuery } from "components/app/store/api/rawg-api";
import { Card, Row, Col, Spin } from 'antd';
import { useState } from "react";

export const GameList = () => {
    const [page, setPage] = useState(1);
    /* const { data, error, isLoading } = useGetGamesQuery({ page: 1, pageSize: 12 }); */
    const { data, error, isLoading } = useGetInfiniteGamesQuery({ page });

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    if(isLoading) return <Spin size="large"/>;
    if (error) return <div>An error has occurred!</div>;

    return (
        <div>
            <h2>Popular Games</h2>
            <Row gutter={[16, 16]}>
                {data?.results.map((game) => (
                <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
                    <Card
                        hoverable
                        cover={<img alt={game.name} src={game.background_image} style={{ height: 200, objectFit: 'cover' }} />}
                    >
                        <Card.Meta title={game.name} description={`Released: ${game.released} | Rating: ${game.rating}`} />
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