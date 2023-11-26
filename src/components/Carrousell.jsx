import React from 'react';

const Carrousell = (props) => {
  return (
    <div className="overflow-x-auto w-full flex">
      <div className="min-w-max flex gap-2 px-5 py-7">
        {props.showedMenu.map((ele, i) => (
          <div key={i} className="card-96">
            <img src={ele.img} alt={ele.alt} className="card-96-img" />
            <div className="card-shade">
              <div className="column">
                <p className="card-title">{ele.produk}</p>
                <p className="card-desc">{ele.desc}</p>
                <button className="button-card">Maww beliii!😋</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousell;
