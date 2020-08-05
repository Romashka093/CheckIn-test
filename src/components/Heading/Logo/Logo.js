import React, { Fragment } from 'react';
import logo from '../../../assets/img/logo.svg';
import css from './Logo.module.css';

function Logo({ handleOpenSideBar }) {
  return (
    <Fragment>
      {window.matchMedia('(max-width: 1023px)').matches && (
        <a href={'/'} className={css.logo}>
          <img className={css.logoImg} src={logo} alt="checkIn logo" />
        </a>
      )}
      {window.matchMedia('(min-width: 1024px)').matches && (
        <a onClick={handleOpenSideBar} href={'/'} className={css.logo}>
          <img className={css.logoImg} src={logo} alt="checkIn logo" />
        </a>
      )}
    </Fragment>
  );
}

export default Logo;
