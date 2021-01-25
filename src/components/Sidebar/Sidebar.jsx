import s from './Sidebar.module.css';
import React from 'react';
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <ul className={s.sidebar__list}>
                <SidebarItem title='Profile' href='/profile' />
                <SidebarItem title='Messages' href='/dialogs' />
                <SidebarItem title='News' href='/news' />
                <SidebarItem title='Music' href='/music' />
                <SidebarItem title='Users' href='/users' />
                <SidebarItem title='Settings' href='/settings' />
            </ul>
        </aside>
    );
};

export default Sidebar;