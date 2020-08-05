import React from 'react';
import css from './TeamSettings.module.css';

function TeamSettings() {
  return (
    <div className={css.teamSettings}>
      <ul className={css.settings}>
        <li className={css.setting}>
          <a className={css.settingLink} href={'/'}>
            Налаштування чекінів
          </a>
        </li>
        <li className={css.setting}>
          <a className={css.settingLink} href={'/'}>
            Додати учасника
          </a>
        </li>
        <li className={css.setting}>
          <a className={css.settingLink} href={'/'}>
            редагувати команду
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TeamSettings;
