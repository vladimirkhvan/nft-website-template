import React from 'react';

import style from './Header.module.scss';

import messageImg from '../../assets/images/message.svg';
import notificationsImg from '../../assets/images/notifications.svg';
import profileImg from '../../assets/images/profile.svg';

import searchImg from '../../assets/images/search.svg';

export const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <div className={style.search}>
                <input type="text" placeholder="Search" />
                <img src={searchImg} alt="search" width={16} height={16}/>
            </div>

            <nav>
                <img src={messageImg} alt="message" className={style.message} />
                <img src={notificationsImg} alt="notifications" className={style.notifications} />
                <img src={profileImg} alt="profile" className={style.profile} />
            </nav>
        </div>
    );
};
