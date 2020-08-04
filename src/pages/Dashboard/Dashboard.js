import React, { Component, Fragment } from 'react';
import members from '../../data/data.json';
import Heading from '../../components/Heading/Heading';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';
import MemberCard from '../../components/MemberCard/MemberCard';
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
            <Heading handleOpenMenu={this.handleOpenMenu} />
            <main>
              <Search />
              <MemberCard members={members} />
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
