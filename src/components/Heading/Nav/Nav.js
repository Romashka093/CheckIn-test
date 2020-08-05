import React from 'react';

import css from './Nav.module.css';

function Nav({ handleOpenMenu }) {
  return (
    <>
      <nav className={css.navigation}>
        <button
          onClick={handleOpenMenu}
          name="openMenu"
          type="button"
          className={css.burger}
        />

        <span className={css.burgerBar} />
      </nav>
    </>
  );
}

export default Nav;
