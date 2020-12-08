import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
//import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
// import { FiXCircle } from 'react-icons/fi';
// import Modal from 'react-modal';

import Filter from '../../components/Filter';

import api from '../../services/api';

import style from './style.css';

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);
  const [price, setPrice] = useState('All');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterOpenNow, setFilterOpenNow] = useState(false);
  const [isLaoading, setIsLaoading] = useState(false);
  const [filterPrice, setFilterPrice] = useState('');

  const wd = window.innerWidth;


  useEffect(() => {
    loadRestaurant();
  }, [filterPrice, filterCategory, filterOpenNow]);

  async function loadRestaurant() {
    setIsLaoading(true);

    const response = await api.get("businesses/search", {
      params: {
        price,
        open_now: filterOpenNow,
      },
    });

    setRestaurants(response.data);
    setIsLaoading(false);
  }


  function priceSelect(valor) {
    switch (valor) {
      case '':
        setPrice('All');
        break;
      case '1':
        setPrice('$');
        break;
      case '2':
        setPrice('$$');
        break;
      case '3':
        setPrice('$$$');
        break;
      case '4':
        setPrice('$$$$');
        break;
      default:
        setPrice('All');
    }
  }

  function handlePriceFilter(valor) {
    setFilterPrice(valor);
    priceSelect(valor);
    //setFilerClean(true);
  }


  function handleCategoryFilter(category) {
    setFilterCategory(category);

    //setFilerClean(true);
  }

  return (
    <>
      <Filter
        handlePriceFilter={handlePriceFilter}
        price={price}
        filterCategory={filterCategory}
        handleCategoryFilter={handleCategoryFilter}
        filterOpenNow={filterOpenNow}
        setFilterOpenNow={setFilterOpenNow}
      />
      <main>
        <section className="ContainerListRest">
          <h2>All Restaurants</h2>
          <ul>
            {restaurants.map(restaurant => (
              <li
                key={restaurant.id}
                open={
                  restaurant.hours[0]
                    ? restaurant.hours[0].is_open_now
                    : false
                }
              >
                <img src={restaurant.image_url} alt="imagem" />
                <h1 className="titleRestaurant">{restaurant.name}</h1>
                <ReactStars
                  value={restaurant.rating}
                  color1="#fff"
                  color2="#002b56e0"
                  edit={false}
                  half
                />
                <div className="status">
                  <span className="statusText">
                    {`${restaurant.categories[0].title} - ${restaurant.price}`}
                  </span>
                  <span className="statusNow">
                    {wd <= 425 ? (
                      <span className="status">
                        {restaurant.hours[0] &&
                          restaurant.hours[0].is_open_now
                          ? 'open'
                          : 'closed'}
                      </span>
                    ) : (
                        <span className="status">
                          {restaurant.hours[0] &&
                            restaurant.hours[0].is_open_now
                            ? 'open now'
                            : 'closed'}
                        </span>
                      )}
                  </span>
                </div>

                <button>Learn More</button>
              </li>
            ))}
          </ul>
          {isLaoading && (
            <div className="loading">
              <ReactLoading
                type="bars"
                color=" #002b56"
                height="5%"
                width="5%"
              />
            </div>
          )}
        </section>
      </main >
    </>
  );
}
