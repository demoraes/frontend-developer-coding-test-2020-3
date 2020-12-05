import React from 'react';

import style from './style.css';

export default function Header() {
  return (
    <div className="container">
      <div className="content">
        <nav>
          Filter By:

          <div className="open">
            <input type="radio" id="open" name="open" />
            <p>Open Now</p>
          </div>

            <div className="selects">
              <select name="categories" id="categories">
                <option value=""> Price </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <i className="fa fa-caret-down icon"></i>
            </div>

            <div className="selects">
              <select name="categories" id="categories">
                <option value=""> Categories </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <i className="fa fa-caret-down icon"></i>
            </div>
        </nav>

          <button type="button">CLEAR ALL</button>

      </div>
      </div>
  );
}
