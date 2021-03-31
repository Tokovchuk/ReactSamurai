import s from './ProfileInfo.module.css';
import React from 'react';
import ProfileName from "./ProfileName/ProfileName";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile__info}>
            <img src='https://i.pinimg.com/originals/62/19/87/6219878a5bee02e840796a354beb2fff.png' alt='avatar'/>
            <div>
                <ProfileName name='Thor'/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <img src={props.profile.photos.large} alt='dsad'/>

        </div>

    );
};

export default ProfileInfo;