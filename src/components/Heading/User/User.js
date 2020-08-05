import React from 'react';
import css from './User.module.css';

function User() {
  return (
    <div className={css.user}>
      <div className={css.userInfo}>
        <div className={css.userDataWrap}>
          <div className={css.userName}>Georgia Mashford</div>
          <div className={css.userPosition}>Programmer</div>
        </div>
        <picture className={css.userAvatar}>
          <source
            media="(min-width: 768px)"
            sizes="183px"
            srcSet={`${require('../../../assets/img/mainUser/mainUser-desktop@1x.png')} 1x, ${require('../../../assets/img/mainUser/mainUser-desktop@2x.png')} 2x`}
          />
          <source
            media="(min-width: 320px)"
            sizes="122px"
            srcSet={`${require('../../../assets/img/mainUser/mainUser-mobile@1x.png')} 1x, ${require('../../../assets/img/mainUser/mainUser-mobile@2x.png')} 2x`}
          />
          <img
            src={require('../../../assets/img/mainUser/mainUser.png')}
            alt="user avatar"
          />
        </picture>
      </div>
    </div>
  );
}

export default User;
