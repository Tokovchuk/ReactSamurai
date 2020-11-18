import s from './ProfileImage.module.css';
import React from 'react';

const ProfileImage = () => {
  return (
      <div className={s.profile__image}>
        <img src='https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/AsgardDarkWorld.png/revision/latest?cb=20160405121323&path-prefix=ru' width='2200' heght='907' alt='Асгард' />
      </div>
  )
}

export default ProfileImage;
