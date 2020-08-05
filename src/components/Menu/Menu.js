import React, { Component } from 'react';
import css from './Menu.module.css';
import TeamSettings from './TeamSettings/TeamSettings';
import ChooseTeam from './ChooseTeam/ChooseTeam';
import TeamStatistic from './TeamStatistic/TeamStatistic';

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className={css.hover}>
        <div className={css.sideBar}>
          <button
            className={css.closeMenu}
            onClick={this.props.handleOpenMenu}
          />
          <div className={css.container}>
            <ul className={css.sideBarMenu}>
              <li className={css.sideBarItem}>Menu</li>
            </ul>
          </div>
          <div className={css.formWrap}>
            <div className={css.container}>
              <ChooseTeam />
            </div>
          </div>
        </div>
        <section className={css.teamStatistic}>
          <div className={css.container}>
            <TeamSettings />
            <TeamStatistic />
          </div>
        </section>
      </div>
    );
  }
}

export default Menu;
