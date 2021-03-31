import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/user.png'
import {NavLink} from "react-router-dom";

let User = (props) => {
    return (
        <div className={s.users__wrapper}>
            <div className={s.users__avatar}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto} alt='user avatar'/>
                </NavLink>
                <div className={s.users__button}>
                    {props.user.followed ?
                        <button disabled={props.followingProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.unfollow(props.user.id)
                                }
                                }>Unfollow</button> :
                        <button disabled={props.followingProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.follow(props.user.id)
                                }
                                }>Follow</button>}
                </div>
            </div>
            <div className={s.users__description}>
                <div className={s.users__container}>
                    <span>{props.user.name}</span>
                    <span>{props.user.status}</span>
                </div>
                <div className={`${s.users__container} ${s.users__location}`}>
                    <span>{'user.location.city'}</span>
                    <span>{'user.location.country'}</span>
                </div>
            </div>
        </div>
    )
}


export default User;
