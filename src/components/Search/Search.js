import React, { Component } from 'react';
import css from './Search.module.css';
import Filter from './Filter/Filter';

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
            <Filter />
          </form>
        </div>
      </section>
    );
  }
}

export default Search;
