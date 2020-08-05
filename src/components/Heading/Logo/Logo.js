import React from 'react';
import logo from '../../../assets/img/logo.svg';
import css from './Logo.module.css';

function Logo({ handleOpenSideBar }) {
  return (
    <a onClick={handleOpenSideBar} href={'/'} className={css.logo}>
      <img className={css.logoImg} src={logo} alt="checkIn logo" />
    </a>
  );
}

export default Logo;
