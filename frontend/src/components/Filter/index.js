import React from 'react';

import style from './style.css';

import Header from '../Header';

export default function Filter({ handlePriceFilter, priceSelect }) {
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
              <span>{priceSelect}</span>
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
              <span>FilterCategory</span>
              <div className="dropdown-content">
                <button type="button">
                  All
              </button>
                <button
                  type="button"
                >
                  Italian
              </button>
                <button
                  type="button"
                >
                  Seafood
              </button>
                <button
                  type="button"
                >
                  Steakhouses
              </button>
                <button
                  type="button"
                >
                  Japanese
              </button>
                <button
                  type="button"
                >
                  American
              </button>
                <button
                  type="button"
                >
                  Mexican
              </button>
                <button
                  type="button"
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
