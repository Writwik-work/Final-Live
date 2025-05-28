// CounterArea.jsx
import React from "react";
import CounterAreaItem from "../CounterArea/CounterAreaItem ";

const CounterArea = ({ items }) => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-item-wrap">
          <div className="row">
            {items &&
              items.map((item, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <CounterAreaItem amount={item.amount} info={item.info} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
