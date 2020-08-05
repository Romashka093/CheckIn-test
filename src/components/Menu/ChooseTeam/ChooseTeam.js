import React from 'react';
import css from './ChooseTeam.module.css';

function ChooseTeam() {
  return (
    <form className={css.teamSelectorForm}>
      <select
        size="1"
        name="selectTeam"
        id="selectTeam"
        className={css.teamSelected}
      >
        <option value="1" className={css.selectTeamName}>
          1+1 digital innovational HAB
        </option>
        <option value="2" className={css.selectTeamName}>
          2+2 digital innovational HAB
        </option>
        <option value="3" className={css.selectTeamName}>
          3+3 digital innovational HAB
        </option>
      </select>
    </form>
  );
}

export default ChooseTeam;
