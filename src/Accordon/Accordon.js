import React, { useState } from 'react';
import data from './data';
import './accord.css';

function Accordon() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId,selected)
    

    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="accord">
      <div className="accordion">

        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSingleSelection(item.id)}
            className={`item ${selected === item.id ? 'selected' : ''}`}
          >
            <div className="title">
              <h3>{item.question}</h3>
              <span>+</span>
              {/* {item.id} */}

            </div>
            {selected === item.id && <div className="content">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordon;
