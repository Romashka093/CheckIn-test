import React from 'react';
import css from './Filter.module.css';

function Filter() {
  return (
    <ul className={css.filter}>
      <li className={css.filterListCategoriesGroup}>
        <ul className={css.filterCategoryType}>
          <li className={css.filterItemType}>
            <a href={'/'}>Всі</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>Є блокер</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>Виконано</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>Не виконано</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>не заповнив ЧекІн</a>
          </li>
        </ul>
      </li>
      <li className={css.filterListCategoriesGroup}>
        <ul className={css.filterCategoryType}>
          <li className={css.filterItemType}>
            <a href={'/'}>Всі</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>ЧекІн команди</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>індивідуальний ЧекІн</a>
          </li>
          <li className={css.filterItemType}>
            <a href={'/'}>Вимкнений чекін</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Filter;
