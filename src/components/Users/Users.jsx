import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                urlAvatar: 'https://land-soft.ucoz.ru/Pin/Tux_Avatar-1-.png',
                followed: false,
                fullName: 'Ilya T',
                status: 'status test',
                location: {city: 'ST.-Petersburg', country: 'Russia'}
            },
            {
                id: 2,
                urlAvatar: 'https://land-soft.ucoz.ru/Pin/Tux_Avatar-2-.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'it-kamasutra',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                urlAvatar: 'https://land-soft.ucoz.ru/Pin/Tux_Avatar-3-.png',
                followed: true,
                fullName: 'Masha',
                status: 's Uralmasha',
                location: {city: 'Uralmash', country: 'Russia'}
            },
            {
                id: 4,
                urlAvatar: 'https://land-soft.ucoz.ru/Pin/Tux_Avatar-5-.png',
                followed: true,
                fullName: 'Will',
                status: 'men in Black',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }
    return (
        <section>
            {
                props.users.map((u) => {
                    return (
                        <div className={s.users__wrapper} key={u.id}>
                            <div className={s.users__avatar}>
                                <img src={u.urlAvatar} alt='user avatar'/>
                                <div className={s.users__button}>
                                    {u.followed ?
                                        <button onClick={() => props.unfollow(u.id)}>Unfollow</button>:
                                        <button onClick={() => props.follow(u.id)}>Follow</button>}
                                </div>
                            </div>
                            <div className={s.users__description}>
                                <div className={s.users__container}>
                                    <span>{u.fullName}</span>
                                    <span>{u.status}</span>
                                </div>
                                <div className={`${s.users__container} ${s.users__location}`}>
                                    <span>{u.location.city}</span>
                                    <span>{u.location.country}</span>
                                </div>
                            </div>
                        </div>)

                })
            }
        </section>
    )
}

export default Users;
