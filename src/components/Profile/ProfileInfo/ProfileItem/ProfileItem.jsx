import s from "./ProfileItem.module.css";
import React from "react";

const ProfileItem = (props) => {
  return (
      <p className={s.profile__item}>{props.title}: <span>{props.value}</span></p>
  )
}


export default ProfileItem;