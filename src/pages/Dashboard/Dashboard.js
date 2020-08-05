import React, { Component, Fragment } from 'react';
import members from '../../data/data.json';
import Heading from '../../components/Heading/Heading';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';
import MemberList from '../../components/MemberList/MemberList';
import TeamSettings from '../../components/Menu/TeamSettings/TeamSettings';
import TeamStatistic from '../../components/Menu/TeamStatistic/TeamStatistic';
import SideBar from '../../components/Heading/SideBar/SideBar';
import css from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    isOpenMenu: false,
    isOpenSideBar: false,
  };

  handleOpenMenu = evt => {
    if (evt.target) {
      this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }
  };

  handleOpenSideBar(evt) {
    evt.preventDefault();
    if (evt.target) {
      this.setState({ isOpenSideBar: !this.state.isOpenSideBar });
    }
  }

  render() {
    const { isOpenMenu, isOpenSideBar } = this.state;
    return (
      <Fragment>
        {!isOpenMenu ? (
          <Fragment>
            {isOpenSideBar &&
              window.matchMedia('(min-width: 1024px)').matches && <SideBar />}
            <div
              className={isOpenSideBar ? css.containerForSideBar : undefined}
            >
              <Heading
                handleOpenMenu={this.handleOpenMenu}
                handleOpenSideBar={this.handleOpenSideBar.bind(this)}
              />
              <main>
                {window.matchMedia('(min-width: 1024px)').matches && (
                  <TeamSettings />
                )}
                <Search />
                {window.matchMedia('(min-width: 1024px)').matches && (
                  <TeamStatistic />
                )}
                <MemberList members={members} />
              </main>
            </div>
          </Fragment>
        ) : (
          <Menu handleOpenMenu={this.handleOpenMenu} />
        )}
      </Fragment>
    );
  }
}

export default Dashboard;
