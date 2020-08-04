import React, { Component, Fragment } from 'react';
import Heading from '../../components/Heading/Heading';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';
import MemberCard from '../../components/MemberCard/MemberCard';

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
          <Heading handleOpenMenu={this.handleOpenMenu} />
        ) : (
          <Menu handleOpenMenu={this.handleOpenMenu} />
        )}
        <main>
          <Search />
          <MemberCard />
        </main>
      </Fragment>
    );
  }
}

export default Dashboard;
