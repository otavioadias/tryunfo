import React from 'react';
import PropTypes from 'prop-types';

import '../css/filter.css';

class Filter extends React.Component {
  render() {
    const { filterByName,
      filterChange,
      filterTrunfoChange,
      rareFilter,
      filterTrunfo } = this.props;
    return (
      <section className="filter">
        FILTRO DE BUSCA
        <label htmlFor="filterByName">
          <input
            type="text"
            data-testid="name-filter"
            id="filterByName"
            value={ filterByName }
            onChange={ filterChange }
            disabled={ filterTrunfo }
            placeholder="Nome da carta"
          />
        </label>
        <label htmlFor="rareFilter">
          <select
            id="rareFilter"
            data-testid="rare-filter"
            onChange={ filterChange }
            value={ rareFilter }
            disabled={ filterTrunfo }
          >
            <option value="todas">Raridade</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="filterTrunfo"
            checked={ filterTrunfo !== false }
            onChange={ filterTrunfoChange }
          />
          Super Trybe Trunfo
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  filterByName: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  rareFilter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  filterTrunfoChange: PropTypes.func.isRequired,
};

export default Filter;
