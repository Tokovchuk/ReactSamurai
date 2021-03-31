import s from './MyPosts.module.css'
import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../FormsContorls/FormControls";

const MyPosts = (props) => {

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.like}/>).reverse();

    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <AddNewPostReduxForm onSubmit={addNewPost} />
            <div className={s.posts__list}>
                {postsElements}
            </div>
        </div>
    );
};

const maxLength30 = maxLengthCreator(30)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.posts__input}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='my new post' validate={[required, maxLength30]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostReduxForm = reduxForm({
    form: 'newPostForm'
})(AddNewPostForm)


export default MyPosts;