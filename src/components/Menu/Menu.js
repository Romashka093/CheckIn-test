import React, { Component, Fragment } from 'react';
import css from './Menu.module.css';

class Menu extends Component {
  state = {};
  render() {
    return (
      <Fragment>
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
              <form className={css.teamSelectorForm}>
                <select
                  size="1"
                  name="selectTeam"
                  id="selectTeam"
                  className={css.teamSelected}
                >
                  <option value="1" className={css.selectTeamName}>
                    1+1 digital innovational HAB
                  </option>
                  <option value="2" className={css.selectTeamName}>
                    2+2 digital innovational HAB
                  </option>
                  <option value="3" className={css.selectTeamName}>
                    3+3 digital innovational HAB
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <section className={css.teamStatistic}>
          <div className={css.container}>
            <div className={css.teamSettings}>
              <ul className={css.settings}>
                <li className={css.setting}>
                  <a className={css.settingLink} href={'/'}>
                    Налаштування чекінів
                  </a>
                </li>
                <li className={css.setting}>
                  <a className={css.settingLink} href={'/'}>
                    Додати учасника
                  </a>
                </li>
                <li className={css.setting}>
                  <a className={css.settingLink} href={'/'}>
                    редагувати команду
                  </a>
                </li>
              </ul>
            </div>

            <div className={css.container}>
              <h2 className={css.sectionTitle}>Статистика команди</h2>
              <div className={css.statisticContainers}>
                <ul className={css.allTeamContainers}>
                  <li className={css.activityContainer}>
                    <canva className={css.visualProgressStatistic} />
                    <p className={css.totalPercentOfActivity}>88</p>
                    <p className={css.teamActivityName}>Середній настрій</p>
                  </li>
                  <li className={css.activityContainer}>
                    <canva className={css.visualProgressStatistic} />
                    <p className={css.totalPercentOfActivity}>88</p>
                    <p className={css.teamActivityName}>Залученість</p>
                  </li>
                  <li className={css.activityContainer}>
                    <canva className={css.visualProgressStatistic} />
                    <p className={css.totalPercentOfActivity}>88</p>
                    <p className={css.teamActivityName}>Блокер</p>
                  </li>
                  <li className={css.activityContainer}>
                    <canva className={css.visualProgressStatistic} />
                    <p className={css.totalPercentOfActivity}>88</p>
                    <p className={css.teamActivityName}>Самопочуття</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Menu;
