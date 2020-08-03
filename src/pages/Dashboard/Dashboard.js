import React, { Component, Fragment } from 'react';
import Heading from '../../components/Heading/Heading';
import Menu from '../../components/Menu/Menu';

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
      </Fragment>
    );
  }
}

export default Dashboard;
