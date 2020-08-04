import React, { Component } from 'react';
import css from './Search.module.css';

class Search extends Component {
  state = {};
  render() {
    return (
      <section className={css.searchSection}>
        <div className={css.container}>
          <form className={css.searchForm}>
            <input
              className={css.searchInput}
              type="text"
              placeholder="Пошук"
            />
            <p className={css.searchIcon} />
            <button className={css.filterButton}>фільтр</button>
            <ul className={css.filter}>
              <li className={css.filterListCategoriesGroup}>
                <a href={'/'}>Всі блокери</a>
                <ul className={css.filterCategoryType}>
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
                <a href={'/'}>Всі ЧекІни</a>
                <ul className={css.filterCategoryType}>
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
          </form>
        </div>
      </section>
    );
  }
}

export default Search;
