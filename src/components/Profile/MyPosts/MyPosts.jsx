import s from './MyPosts.module.css'
import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        if (props.newPostText) {
            props.addPost();
        }
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.like}/>);

    return (
        <div>
            <h2>My Posts</h2>
            <div className={s.posts__input}>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts__list}>
                {postsElements}
            </div>
        </div>

    );
};


export default MyPosts;