import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <section>
            <ProfileImage />
            <ProfileInfo />
            <MyPostsContainer />
        </section>
    );
};

export default Profile;