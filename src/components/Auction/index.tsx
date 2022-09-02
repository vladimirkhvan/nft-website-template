import React from 'react';

import style from './Auction.module.scss';

import auctionImg from '../../assets/images/auction.png';
import heartImg from '../../assets/images/heart.svg';
import userImg from '../../assets/images/user.png';

export const Auction: React.FC = () => {
    return (
        <section className={style.auction}>
            <h2 className={style.heading}>Top Auction</h2>

            <article>
                <img src={auctionImg} alt="auction" className={style.auctionItem} />

                <div>
                    <header>
                        <h1>Magic Bullets</h1>
                        <img src={heartImg} alt="heart" width={25} height={23} />
                    </header>

                    <div className={style.user}>
                        <img src={userImg} alt="user" width={54} height={54} />
                        <div className={style.userInfo}>
                            <h3>Debbie Reese</h3> <small>@Debbie111</small>
                        </div>
                    </div>

                    <div className={style.info}>
                        <div className={style.price}>
                            <p>Price per NFT</p> <h2>80 PLAYR</h2>
                        </div>

                        <div className={style.time}>
                            <p>Starts in</p> <h2>02h 32m 44s</h2>
                        </div>
                    </div>

                    <div className={style.buttons}>
                        <button className={style.showRewards}>View Rewards</button>
                        <button className={style.showCollection}>View Collection</button>
                    </div>
                </div>
            </article>
        </section>
    );
};
