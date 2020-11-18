import s from "./SidebarItem.module.css";
import React from "react";

const SidebarItem = (props) => {
  return (
      <li className={s.sidebar__item}>
        <a href="#s">{props.title}</a>
      </li>
  )
}

export default SidebarItem;
