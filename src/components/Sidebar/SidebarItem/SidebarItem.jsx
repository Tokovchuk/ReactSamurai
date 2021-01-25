import s from "./SidebarItem.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const SidebarItem = (props) => {
    return (
        <li className={s.sidebar__item}>
            <NavLink to={props.href} activeClassName={s.active}>{props.title}</NavLink>
        </li>
    )
}

export default SidebarItem;
