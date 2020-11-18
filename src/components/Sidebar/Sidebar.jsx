import s from './Sidebar.module.css';
import React from 'react';
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <ul className={s.sidebar__list}>
                <SidebarItem title='Profile' />
                <SidebarItem title='Messages' />
                <SidebarItem title='News' />
                <SidebarItem title='Music' />
                <SidebarItem title='Settings' />
            </ul>
        </aside>
    );
};

export default Sidebar;