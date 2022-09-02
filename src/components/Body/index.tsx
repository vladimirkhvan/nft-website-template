import React from 'react';

import style from './Body.module.scss';

import { Auction } from '../Auction';
import { FeaturedNFT } from '../FeaturedNFT';

export const Body: React.FC = () => {
    return (
        <div className={style.body}>
            <Auction />
            <FeaturedNFT />
        </div>
    );
};
