import React from "react";
import "./Testimoniols.css";
import AVTR2 from "../img/avatar/av2.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';


const Testimoniols = () => {
  return (
    <section id="Testimoniols">
      <h3>Review from Clients</h3>
      <h2>Testimonials</h2>

      {/*  */}

      <Swiper className="container testimonials_container"

          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
        
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 2" />
          </div>
          <h3 className="client_name">Rob Koster</h3>
          <small className="client_review">
            You have the natural ability to understand and feel what your
            customers are experiencing, and you are able to meet their needs
            effectively. You're really good at focusing on what customers need
            and require. You have a real instinct to understand our customers.
            Good work! Well done!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 2" />
          </div>
          <h3 className="client_name">Rob Koster</h3>
          <small className="client_review">
            You have the natural ability to understand and feel what your
            customers are experiencing, and you are able to meet their needs
            effectively. You're really good at focusing on what customers need
            and require. You have a real instinct to understand our customers.
            Good work! Well done!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 2" />
          </div>
          <h3 className="client_name">Rob Koster</h3>
          <small className="client_review">
            You have the natural ability to understand and feel what your
            customers are experiencing, and you are able to meet their needs
            effectively. You're really good at focusing on what customers need
            and require. You have a real instinct to understand our customers.
            Good work! Well done!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 2" />
          </div>
          <h3 className="client_name">Rob Koster</h3>
          <small className="client_review">
            You have the natural ability to understand and feel what your
            customers are experiencing, and you are able to meet their needs
            effectively. You're really good at focusing on what customers need
            and require. You have a real instinct to understand our customers.
            Good work! Well done!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 2" />
          </div>
          <h3 className="client_name">Rob Koster</h3>
          <small className="client_review">
            You have the natural ability to understand and feel what your
            customers are experiencing, and you are able to meet their needs
            effectively. You're really good at focusing on what customers need
            and require. You have a real instinct to understand our customers.
            Good work! Well done!
          </small>
        </SwiperSlide>  
        </Swiper>
     
  
    </section>
  );
};

export default Testimoniols;
