import React from 'react';
import s from './Users.module.css';
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    return (
        <section>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {
                props.users.map((u) => {
                    return <User user={u} followingProgress={props.followingProgress} follow={props.follow}
                                 unfollow={props.unfollow}/>
                })
            }
        </section>
    )
}


export default Users;
