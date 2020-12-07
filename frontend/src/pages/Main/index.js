import React, { useEffect } from 'react';
import ReactStars from 'react-stars';
// import ReactLoading from 'react-loading';
// import { FiXCircle } from 'react-icons/fi';
// import Modal from 'react-modal';

import api from '../../services/api';

import style from './style.css';

export default function Main() {

  useEffect(() => {
    api.get("businesses/search", {
      params: {
        location: "kyoto",
        term: "coffee",
        limit: 10,
      },
    }).then(({ data }) => {
      let { businesses } = data
      businesses.forEach((b) => {
        console.log("Name: ", b.name)
      })
    })
  }, []);

  return (
    <main>
      <div className="ContainerListRest">
        <h2>All Restaurants</h2>
        <ul className="ListRestaurants">
          <li>
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <h1 className="titleRestaurant">
              Gordon Rmsay Hell's Kitchen
            </h1>
            <ReactStars
              color1="#000"
              color2="#002b56e0"
              edit={false}
              half
            />
            <div className="status">
              <span className="statusText">
                AMERICAN (NEW) - $$$
              </span>
              <span className="statusNow">
                open º
              </span>
            </div>

            <button>Learn More</button>
          </li>
        </ul>
      </div>
    </main >
  );

}
