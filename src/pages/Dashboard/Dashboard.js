import React, { Component, Fragment } from 'react';
import members from '../../data/data.json';
import Heading from '../../components/Heading/Heading';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';
import MemberList from '../../components/MemberList/MemberList';
import TeamSettings from '../../components/Menu/TeamSettings/TeamSettings';
import TeamStatistic from '../../components/Menu/TeamStatistic/TeamStatistic';
import SideBar from '../../components/Heading/SideBar/SideBar';
console.log(members);
// import css from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    isOpenMenue: false,
  };

  handleOpenMenu = evt => {
    if (evt.target) {
      this.setState({ isOpenMenue: !this.state.isOpenMenue });
    }
  };

  render() {
    const { isOpenMenue } = this.state;
    return (
      <Fragment>
        {!isOpenMenue ? (
          <Fragment>
            {window.matchMedia('(min-width: 1024px)').matches && <SideBar />}
            <Heading handleOpenMenu={this.handleOpenMenu} />
            <main>
              {/* {window.matchMedia('(min-width: 1024px)').matches && <TeamSettings />} */}
              <Search />
              {window.matchMedia('(min-width: 1024px)').matches && (
                <TeamStatistic />
              )}
              <MemberList members={members} />
            </main>
          </Fragment>
        ) : (
          <Menu handleOpenMenu={this.handleOpenMenu} />
        )}
      </Fragment>
    );
  }
}

export default Dashboard;
