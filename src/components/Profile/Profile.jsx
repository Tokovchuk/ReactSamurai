import s from './Profile.module.css'
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from 'react';


const Profile = () => {
    return (
        <main className={s.profile}>
            <ProfileImage />
            <ProfileInfo />
        </main>
    );
};

export default Profile;