import React from 'react';

import style from './FeaturedNFT.module.scss';

import { NftCard } from '../NftCard';

import nft1 from '../../assets/images/nft1.png';
import nft2 from '../../assets/images/nft2.png';
import nft3 from '../../assets/images/nft3.png';

import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';

export const FeaturedNFT: React.FC = () => {
    return (
        <section className={style.featuredNft}>
            <header>
                <h2>Featured NFTs</h2>

                <div className={style.sort}>
                    <a href="#" className={style.dropdown}>
                        Popular <span className={style.dropdownIcon}></span>
                    </a>

                    <a href="#" className={style.prev}>
                        <span></span>
                    </a>
                    <a href="#" className={style.next}>
                        <span></span>
                    </a>
                </div>
            </header>

            <div className={style.nfts}>
                <NftCard
                    nft={nft1}
                    heading="Ready Players"
                    userImg={user1}
                    username="@Debbie111"
                    price={1.57}
                />
                <NftCard
                    nft={nft2}
                    heading="Dragon’s Den"
                    userImg={user2}
                    username="@alic_cila"
                    price={1.22}
                />
                <NftCard
                    nft={nft3}
                    heading="Crippled World"
                    userImg={user3}
                    username="Crippled World"
                    price={1.18}
                />
            </div>
        </section>
    );
};
