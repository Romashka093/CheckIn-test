import React, { Component } from 'react';
import css from './Heading.module.css';
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import User from './User/User';
import UserMenu from './User/UserMenu/UserMenu';

class Heading extends Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.container}>
          <Nav handleOpenMenu={this.props.handleOpenMenu} />
          <div className={css.headerMobile}>
            <Logo />
            <User />
          </div>
        </div>
        <UserMenu />
      </header>
    );
  }
}

export default Heading;
