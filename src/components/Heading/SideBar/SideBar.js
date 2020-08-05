import React from 'react';
import css from './SideBar.module.css';

function SideBar() {
  return (
    <aside className={css.asideBar}>
      <form className={css.teamForm}>
        <ul className={css.teamList}>
          <li className={css.selectTeamName}>
            <a href={'/'}>1+1 digital innovational HAB</a>
          </li>
          <li className={css.selectTeamName}>
            <a href={'/'}>2+2 digital innovational HAB</a>
          </li>
          <li className={css.selectTeamName}>
            <a href={'/'}>3+3 digital innovational HAB</a>
          </li>
          <li className={css.selectTeamName}>
            <a href={'/'}>3+3 digital innovational HAB</a>
          </li>
        </ul>
      </form>
    </aside>
  );
}

export default SideBar;
