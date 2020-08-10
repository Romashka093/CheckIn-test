import React, { Component } from 'react';

import css from './MemberList.module.css';
import MemberCard from './MemberCard/MemberCard';

class MemberList extends Component {
  state = {};

  render() {
    const { members } = this.props.members;

    members.map(member => {
      let initials = member.name.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || '') + (initials.pop() || '')
      ).toUpperCase();
      return console.log(initials);
    });

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
