import React from 'react';
import css from './UserMenu.module.css';

function UserMenu() {
  return (
    <div className={css.container}>
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
    </div>
  );
}

export default UserMenu;
