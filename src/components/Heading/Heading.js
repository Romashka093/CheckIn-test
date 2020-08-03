import React, { Component } from 'react';
import css from './Heading.module.css';
import logo from '../../assets/img/logo.svg';
// import Menu from '../Menu/Menu';

class Heading extends Component {
  render() {
    return (
      <header className={css.header}>
        <aside className={css.asideBar}>menu for desktop</aside>

        <div className={css.container}>
          <div className={css.headerMobile}>
            <nav className={css.navigation}>
              <button
                onClick={this.props.handleOpenMenu}
                name="openMenu"
                type="button"
                className={css.burger}
              />

              <span className={css.burgerBar} />
            </nav>
            <a href={'/'} className={css.logo}>
              <img className={css.logoImg} src={logo} alt="checkIn logo" />
            </a>
            <div className={css.user}>
              <div className={css.userInfo}>
                <picture className={css.userAvatar}>
                  <source
                    media="(min-width: 768px)"
                    sizes="183px"
                    srcSet={`${require('../../assets/img/mainUser/mainUser-desktop@1x.png')} 1x, ${require('../../assets/img/mainUser/mainUser-desktop@2x.png')} 2x`}
                  />
                  <source
                    media="(min-width: 320px)"
                    sizes="122px"
                    srcSet={`${require('../../assets/img/mainUser/mainUser-mobile@1x.png')} 1x, ${require('../../assets/img/mainUser/mainUser-mobile@2x.png')} 2x`}
                  />
                  <img
                    src={require('../../assets/img/mainUser/mainUser.png')}
                    alt="user avatar"
                  />
                </picture>
                <div className={css.userName} />
                <div className={css.userPosition} />
              </div>
            </div>
          </div>
        </div>
        <ul className={css.userActions}>
          <li className={css.userActionItem}>
            <a className={css.userTeamLink} href={'/'}>
              Ваша команда
            </a>
          </li>
          <li className={css.userActionItem}>
            <a className={css.checkingTeamLink} href={'/'}>
              Чекіни команди
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Heading;
