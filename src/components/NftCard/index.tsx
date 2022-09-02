import React from 'react';

import style from './NftCard.module.scss';

import heartImg from '../../assets/images/favourites.svg';

interface PropsNftCard {
    nft: string;
    heading: string;
    userImg: string;
    username: string;
    price: number;
}

export const NftCard: React.FC<PropsNftCard> = ({ nft, heading, userImg, username, price }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <img src={nft} alt={heading} className={style.nftImg}/>
                <div className={style.heading}>
                    {heading} <img src={heartImg} alt="like" width={16} height={14} />
                </div>
                <div className={style.user}>
                    <img src={userImg} alt="user" width={23} height={23} />
                    {username}
                </div>

                <div className={style.price}>
                    <span>Last Bid</span> <span>{price} ETH</span>
                </div>

                <button>Place a bid</button>
            </div>
        </div>
    );
};
