import React from 'react';
import s from './../MyPosts.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://i.pinimg.com/originals/62/19/87/6219878a5bee02e840796a354beb2fff.png' alt='avatar'/>
            <div className={s.post__text}>{props.message}
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post;