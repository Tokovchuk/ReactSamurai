import s from './Header.module.css';
import Logo from "./Logo/Logo";
import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <Logo/>
            <div className={s.login}>
                {props.isAuth
                    ? <span>{props.login} - <button onClick={props.logout}>Log Out</button></span>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;