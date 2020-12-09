import React from 'react';

import style from './style.css';

import Header from '../Header';

export default function Filter({ handlePriceFilter, price, filterCategory, handleCategoryFilter }) {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <div className="filter">
          <div>
            <span>Filter By:</span>
            <div className="checkbox">
              <label htmlFor="open">
                <input
                  type="radio"
                  name="open"
                  id="open"
                />
              Open Now
            </label>
            </div>

            <div className="dropdownPrice">
              <span>{price}</span>
              <div className="dropdown-contentPrice">
                <button type="button" onClick={() => handlePriceFilter('')}>
                  All
                </button>
                <button type="button" onClick={() => handlePriceFilter('1')}>
                  $
                </button>
                <button type="button" onClick={() => handlePriceFilter('2')}>
                  $$
                </button>
                <button type="button" onClick={() => handlePriceFilter('3')}>
                  $$$
                </button>
                <button type="button" onClick={() => handlePriceFilter('4')}>
                  $$$$
               </button>
              </div>
            </div>

            <div className="dropdown">
              <span>{filterCategory === '' ? 'All' : filterCategory}</span>
              <div className="dropdown-content">
                <button type="button" onClick={() => handleCategoryFilter('')}>
                  All
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('italian')}
                >
                  Italian
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('seafood')}
                >
                  Seafood
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('steakhouses')}
                >
                  Steakhouses
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('jpanese')}
                >
                  Japanese
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('american')}
                >
                  American
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('mexican')}
                >
                  Mexican
              </button>
                <button
                  type="button"
                  onClick={() => handleCategoryFilter('thai')}
                >
                  Thai
              </button>
              </div>
            </div>
          </div>

          <div className="buttonfiler" >
            <span>clear all</span>
          </div>
        </div>
      </div>
    </div>
  );
}
