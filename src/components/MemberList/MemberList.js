import React, { Component } from 'react';

import css from './MemberList.module.css';
import MemberCard from './MemberCard/MemberCard';

class MemberList extends Component {
  state = {};

  render() {
    const { members } = this.props.members;

    return (
      members.length > 0 && (
        <section className={css.teamCardsSection}>
          <div className={css.container}>
            <MemberCard members={members} />
          </div>
        </section>
      )
    );
  }
}

export default MemberList;
