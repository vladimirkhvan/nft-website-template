import React from 'react'

import style from './Body.module.scss';

import { Auction } from '../Auction';

export const Body:React.FC = () => {
    return <div className={style.body}>
        <Auction />

    </div>
}