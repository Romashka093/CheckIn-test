import React, { Component } from 'react';
import css from './MemberCard.module.css';

class MemberCard extends Component {
  state = {};
  render() {
    return (
      <section className={css.teamCardsSection}>
        <div className={css.container}>
          <ul className={css.teamMemberCards}>
            <li className={css.teamMemberInfoCard}>
              <div className={css.member}>
                <div className={css.mamberInfo}>
                  <div className={css.memberStatus}>
                    <div className={css.memberAvatar}>
                      <img
                        alt="member avatar"
                        src={require('../../assets/img/member.png')}
                      />
                    </div>
                  </div>
                  <p className={css.memberName}>Georgia Mashford</p>
                  <p className={css.memberPosition}>Programmer</p>
                </div>
                <div className={css.memberActivities}>
                  <ul className={css.activities}>
                    <li className={css.activity}>
                      <p className={css.percentOfActivity}>88</p>
                      <p className={css.activityName}>Самопочуття</p>
                    </li>
                    <li className={css.activity}>
                      <p className={css.percentOfActivity}>88</p>
                      <p className={css.activityName}>Залученість</p>
                    </li>
                    <li className={css.activity}>
                      <p className={css.percentOfActivity}>88</p>
                      <p className={css.activityName}>Блокер</p>
                    </li>
                    <li className={css.activity}>
                      <p className={css.percentOfActivity}>88</p>
                      <p className={css.activityName}>Настрій</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MemberCard;
