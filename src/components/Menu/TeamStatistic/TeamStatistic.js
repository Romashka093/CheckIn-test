import React, { Fragment } from 'react';
import css from './TeamStatistic.module.css';

function TeamStatistic() {
  return (
    <Fragment>
      <h2 className={css.sectionTitle}>Статистика команди</h2>
      <div className={css.statisticContainers}>
        <ul className={css.allTeamContainers}>
          <li className={css.activityContainer}>
            {/* better to use <canva className={css.visualProgressStatistic} /> */}
            <p className={css.totalPercentOfActivity}>88</p>
            <p className={css.teamActivityName}>Середній настрій</p>
          </li>
          <li className={css.activityContainer}>
            {/* better to use <canva className={css.visualProgressStatistic} /> */}
            <p className={css.totalPercentOfActivity}>88</p>
            <p className={css.teamActivityName}>Залученість</p>
          </li>
          <li className={css.activityContainer}>
            {/* better to use <canva className={css.visualProgressStatistic} /> */}
            <p className={css.totalPercentOfActivity}>88</p>
            <p className={css.teamActivityName}>Блокер</p>
          </li>
          <li className={css.activityContainer}>
            {/* better to use <canva className={css.visualProgressStatistic} /> */}
            <p className={css.totalPercentOfActivity}>88</p>
            <p className={css.teamActivityName}>Самопочуття</p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default TeamStatistic;
