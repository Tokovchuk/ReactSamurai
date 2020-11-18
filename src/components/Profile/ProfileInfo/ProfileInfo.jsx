import s from './ProfileInfo.module.css';
import React from 'react';
import ProfileItem from "./ProfileItem/ProfileItem";
import ProfileName from "./ProfileName/ProfileName";


const ProfileInfo = () => {
  return (
      <div className={s.profile__info}>
        <img src='https://i.pinimg.com/originals/62/19/87/6219878a5bee02e840796a354beb2fff.png' alt='avatar' />
        <div>
          <ProfileName name='Thor' />
          <ProfileItem title='Date of Birth' value='2 August' />
          <ProfileItem title='City' value='Asgard' />
          <ProfileItem title='Education' value='Asgard State University' />
          <ProfileItem title='Web Site' value='www.asgard.com' />
        </div>

      </div>
  );
};

export default ProfileInfo;