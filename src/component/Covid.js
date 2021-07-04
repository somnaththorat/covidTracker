import React from "react";
import { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1>Live</h1>
        <h2>Covid Tracker</h2>

        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span>COUNTRY
                </p>
                <p className="card__total card__small">INDIA</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total</span>RECOVERD
                </p>
                <p className="card__total card__small">{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total</span>CONFIRMED
                </p>
                <p className="card__total card__small">{data.confirmed}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total</span>DEATH
                </p>
                <p className="card__total card__small">{data.deaths}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total</span>ACTIVE
                </p>
                <p className="card__total card__small">{data.active} </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Last</span>UPDATED
                </p>
                <p className="card__total card__small">
                  {data.lastupdatedtime}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
