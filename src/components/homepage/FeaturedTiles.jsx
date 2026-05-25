
import { getTilesInfo } from '@/lib/data';
import React from 'react';

const FeaturedTiles = async() => {

    const tiles = await getTilesInfo();

    return (
        <div>All Tiles is loading here</div>
    );
};

export default FeaturedTiles;