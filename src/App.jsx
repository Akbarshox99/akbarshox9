import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// rasim
import otahon from './assets/img/otahon.jpg'
import kalendar from './assets/img/kalendar.jpg'
import bosqich from './assets/img/bosqich.jpg'
import boylik from './assets/img/boylik.jpg'
import dars from './assets/img/dars.jpg'
import haftalik from './assets/img/haftalik.jpg'
import inson from './assets/img/inson.jpg'
import biznes from './assets/img/biznes.jpg'
import qarz from './assets/img/qarz.jpg'
import qars from './assets/img/qars.jpg'
import cc from './assets/img/cc.jpg'
import ccc from './assets/img/ccc.jpg'
import zzz from './assets/img/zzz.jpg'
import fff from './assets/img/fff.jpg'
import rrrr from './assets/img/rrrr.jpg'
import aaa from './assets/img/aaa.jpg'
import q from './assets/img/q.jpg'
import o from './assets/img/o.jpg'
import oo from './assets/img/oo.jpg'
import r from './assets/img/r.jpg'
import t from './assets/img/t.jpg'
import p from './assets/img/p.jpg'
import m from './assets/img/m.jpg'
import v from './assets/img/v.jpg'
import i from './assets/img/i.jpg'
import ii from './assets/img/ii.jpg'
import iii from './assets/img/iii.jpg'
import u from './assets/img/u.jpg'
import uu from './assets/img/uu.jpg'
import rr from './assets/img/rr.jpg'
import a from './assets/img/a.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='w-full max-w-6xl mx-auto px-5'>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src={kalendar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={bosqich} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={boylik} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dars} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={haftalik} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={inson} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={biznes} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={qarz} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={qars} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={cc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ccc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zzz} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={fff} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={rrrr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={aaa} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={q} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={o} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={oo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={r} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={t} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={m} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={v} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ii} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={iii} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={u} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uu} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={rr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={a} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={otahon} alt="" />
        </SwiperSlide> */}
        </div>
   
      </Swiper>
    </>
  );
}
