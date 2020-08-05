import React from 'react';
import css from './MemberCard.module.css';

function MemberCard({ members }) {
  console.log(members);
  return (
    <ul className={css.teamMemberCards}>
      {members.map(member => (
        <li className={css.teamMemberInfoCard} key={member.id}>
          <div className={css.member}>
            <div className={css.mamberInfo}>
              <div className={css.memberStatus}>
                <div className={css.memberAvatar}>
                  <img
                    alt="member avatar"
                    // src={member.avatar}
                    src={require('../../../assets/img/member.png')}
                  />
                </div>
              </div>
              <p className={css.memberName}>{member.name}</p>
              <p className={css.memberPosition}>{member.position}</p>

              <div className={css.memberActivities}>
                <ul className={css.activities}>
                  {member.activitys.map(activity => (
                    <li className={css.activity} key={activity.name}>
                      <p className={css.percentOfActivity}>
                        {activity.percent}
                      </p>
                      <p className={css.activityName}>{activity.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MemberCard;
