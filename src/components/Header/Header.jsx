import s from './Header.module.css';
import Logo from "./Logo/Logo";
import React from 'react';

const Header = () => {
    return (
        <header className={s.header}>
          <Logo />
        </header>
    );
};

export default Header;