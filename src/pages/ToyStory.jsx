import React from 'react';
import { Layout, useState, SwitchMenu, Footer, Carrousell, useEffect } from '../exporter';

const ToyStory = () => {
  const Food = [
    {
      img: './images/buzzmeatball.png',
      alt: 'Buzz Meatball',
      produk: 'Buzz Meatball',
      desc: 'Kenya enak yang pastinya muannteepp!',
    },
    {
      img: './images/corndog.png',
      alt: 'Corndog',
      produk: 'Corndog',
      desc: 'Ngeyangin aku dan gak bikin belepotann, Nnyam',
    },
    {
      img: './images/dimsum.png',
      alt: 'Dimsum',
      produk: 'Dimsum',
      desc: 'Udah enak Sehat lagi apa yasng kurang ya??',
    },
    {
      img: './images/popcorn.png',
      alt: 'Popcorn T - Rex',
      produk: 'Popcorn T - Rex',
      desc: 'Biar manis aku juga ada kriuk nya',
    },
  ];

  const Drink = [
    {
      img: './images/strawberryLotso.png',
      alt: 'Strawberry Lotso',
      produk: 'Strawberry Lotso',
      desc: 'Asem adem di siang yang panas, Pas banget nih',
    },
    {
      img: './images/horseChoco.png',
      alt: 'Horse Chocolate',
      produk: 'Horse Chocolate',
      desc: 'Special buat yang suka Chocolate! ',
    },
    {
      img: './images/creamyLatte.png',
      alt: 'mojito',
      produk: 'Coffe Creamy Latte',
      desc: 'Suka kopi Cream, Yang ini pas buat kamu !',
    },
    {
      img: './images/unicornBonnie.png',
      alt: 'Unicorn Bonnie',
      produk: 'Unicorn Bonnie',
      desc: 'PCobain dehh, Muantab beuuuttt',
    },
    {
      img: './images/coffeCapuchino.png',
      alt: 'Coffe Cappucino',
      produk: 'Coffe Cappucino',
      desc: 'Kopi, biasa tapi spesial kalo kamu yang minum',
    },
    {
      img: './images/bluberryLemon.png',
      alt: 'Bluberry Lemon Sparkling',
      produk: 'Bluberry Lemon Sparkling',
      desc: 'Sueger buat suasana panas kayak gini',
    },
    {
      img: './images/woodiesCheese.png',
      alt: 'Woodie’s Cheese Chocolate',
      produk: 'Woodie’s Cheese Chocolate',
      desc: 'Rasa renyah, yang bisa melepas dahaga!',
    },
    {
      img: './images/jessieManggo.png',
      alt: 'Jessie Manggo',
      produk: 'Jessie Manggo',
      desc: 'Riiilll Segerr uyy no fek fekk, Wajib ambil satu teguk',
    },
    {
      img: './images/tehTarik.png',
      alt: 'Teh Tarik',
      produk: 'Teh Tarik',
      desc: 'Minummm, gak minumm ga seruu',
    },
  ];

  const [Menu, setMenu] = useState('food');
  const [showedMenu, setShowedMenu] = useState(Food);

  const showMenu = (menu) => {
    if (menu === 'food') {
      setShowedMenu(Food);
      setMenu('food');
    } else {
      setShowedMenu(Drink);
      setMenu('drink');
    }
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('visited');

    if (visited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('visited', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <div
        className={`bg-ds-blue bg-ds-patern-1 bg-no-repeat bg-cover fixed inset-0 flex items-center justify-center z-50 ${
          loading ? 'visible' : 'hidden'
        }`}
      >
        <img src="/svg/collabLogo.svg" alt="" />
      </div>
      <Layout className="bg-light-blue bg-no-repeat bg-patern-1">
        <div className="column-center w-full gap-10">
          <img src="/svg/collabLogo.svg" alt="" className="header-img" />
          <p className="bg-pink p-2 rounded-full text-sm text-red">TRY OUR FOOD</p>
          <img src="/svg/hero-title.svg" alt="" className="w-full" />
          <a data-scroll href="#ourMenu" className="hero-menu-btn">
            <p className="text-btn">Yuk liat menunya!</p>
          </a>
        </div>
      </Layout>

      <Layout className="column items-center gap-14 px-0 pb-32 w-full bg-ds-patern-2 bg-cover bg-red rounded-2xl">
        <div id="ourMenu" className=" w-full px-5 items-center column gap-10">
         <h1 className='font-montserrat text-white text-4xl font-bold text-center'>Ini List Menu Kami!</h1>
          <div className="btn-container">
            <SwitchMenu
              showMenu={showMenu}
              Menu={Menu}
              menu={'food'}
              img={'./svg/ep_food.svg'}
              text={'Makanan'}
            />
            <SwitchMenu
              showMenu={showMenu}
              Menu={Menu}
              menu={'drink'}
              img={'./svg/ep_drink.svg'}
              text={'Minuman'}
            />
          </div>
        </div>
        <Carrousell showedMenu={showedMenu} />
      </Layout>

      <Layout className="bg-ds-blue p-0 relative">
        <img src="/images/mascot.png" alt="" className=" h-60 absolute right-0 -top-28" />
        <img src="/images/chesspatern.png" alt="" />
        <div className="p-6 column gap-10">
          <img src="/svg/TakeALook.svg" alt="" className="w-3/5" />
          <h1 className="monserrat-white">
            Website ini adalah hasil kolaborasi antara Commit Studio dengan AM 2.
          </h1>
        </div>
        <img src="/images/chesspatern-2.png" alt="" />
      </Layout>
      <Layout className="bg-ds-orange">
        <Footer />
      </Layout>
    </>
  );
};

export default ToyStory;
