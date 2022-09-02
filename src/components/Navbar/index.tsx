import React from 'react';

import style from './Navbar.module.scss';

import { NavPill } from '../NavPill';

import dashboardImg from '../../assets/images/dashboard.svg';
import auctionsImg from '../../assets/images/auctions.svg';
import inboxImg from '../../assets/images/inbox.svg';
import favouritesImg from '../../assets/images/favourites.svg';

import bitcoinImg from '../../assets/images/bitcoin.png';
import ethereumImg from '../../assets/images/ethereum.png';
import usdcoinImg from '../../assets/images/usdcoin.png';

import infoImg from '../../assets/images/info.svg';
import settingsImg from '../../assets/images/settings.svg';
import darkmodeImg from '../../assets/images/darkmode.svg';

export const Navbar: React.FC = () => {
    const [isDark, setIsDark] = React.useState(false);

    return (
        <nav className={style.navbar}>
            <div className={style.pills}>
                <NavPill name="Dashboard" icon={dashboardImg} isActive={true} />
                <NavPill name="Auctions" icon={auctionsImg} />
                <NavPill name="Inbox" icon={inboxImg} />
                <NavPill name="Favourites" icon={favouritesImg} />
            </div>

            <div className={style.coins}>
                <div className={style.addWallet}>
                    <button className={style.addBtn}>
                        <span>+</span>
                    </button>
                    WALLETS
                    <span className={style.dropdown}></span>
                </div>

                <NavPill name="BitCoin" icon={bitcoinImg} />
                <NavPill name="Ethereum" icon={ethereumImg} />
                <NavPill name="USD Coin" icon={usdcoinImg} />
            </div>

            <div className={style.help}>
                <NavPill name="Settings" icon={settingsImg} />
                <NavPill name="Help & FAQ" icon={infoImg} />
                <div className={style.darkSwitch}>
                    <img src={darkmodeImg} alt="darkmode" />
                    Dark mode
                    <span
                        className={`${style.switch} ` + (isDark ? style.active : '')}
                        onClick={() => setIsDark((prevIsDark) => !prevIsDark)}>
                        <span className={style.ball}></span>
                    </span>
                </div>
            </div>
        </nav>
    );
};
