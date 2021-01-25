import s from "./ProfileName.module.css";
import React from "react";

const ProfileName = (props) => {
  return (
      <p className={`${s.profile__name} ${s.profile__item}`}>{ props.name }</p>
  )
}


export default ProfileName;