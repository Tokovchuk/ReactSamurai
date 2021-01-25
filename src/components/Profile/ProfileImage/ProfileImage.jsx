import s from './ProfileImage.module.css';
import React from 'react';

const ProfileImage = () => {
    return (
        <div className={s.profile__image}>
            <img src='http://vsgb.info/wp-content/uploads/2018/02/%D0%9F%D1%80%D0%B8%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%A3%D1%80%D0%B0%D0%B5-%D0%90%D0%A5%D0%90%D0%A0%D0%90%D0%A2-%D0%9F%D0%98%D0%A0%D0%90%D0%9C%D0%98%D0%94%D0%90.jpg'
                 width='2200' height='907' alt='Асгард'/>
        </div>
    )
}

export default ProfileImage;
