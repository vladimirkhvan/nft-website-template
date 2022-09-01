import React from 'react';

import style from './NavPill.module.scss';

interface PropsNavPill {
    name: string;
    icon: string;
    isActive?: boolean;
}

export const NavPill: React.FC<PropsNavPill> = ({ name, icon, isActive = false }) => {
    return (
        <div className={`${style.pill}` + (isActive ? ` ${style.active}` : '')}>
            <img src={icon} alt={name} width={24} height={24}/> {name}
        </div>
    );
};
