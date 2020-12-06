import React, { useEffect } from 'react';

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
    <div className="main">
      <div className="item">
        <img
          src="https://blog.novasafra.com.br/wp-content/uploads/2018/03/comida-arabe-780x450.jpg"
          alt="comida"
        />
        <p>Very Long Name Restaurants Number 1 in listaaaaaaaaaaaaaaaaa</p>

        <button>LEARN MORE</button>
      </div>

    </div>
  );
}
