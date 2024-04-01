import React from "react";
import '../home/home.css';
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Icon from "../icon/Icon";
const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>upto 75% off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus fugit nisi quasi cupiditate architecto cumque! Atque
            nesciunt in eligendi libero!
          </p>
          <a href="/" className="btn">shop now</a>
        </div>
        <div className="book-slider">
           <div className="wraper">
           <a href="/"><img src="book1.jpg" alt="" srcset="" /></a>
            <a href="/"><img src="book2.jpg" alt="" srcset="" /></a>
            <a href="/"><img src="book3.jpg" alt="" srcset="" /></a>
            <a href="/"><img src="book4.jpg" alt="" srcset="" /></a>
            <a href="/"><img src="book5.jpg" alt="" srcset="" /></a>
            <a href="/"><img src="book6.jpg" alt="" srcset="" /></a>
            <a href="/"><img src="book7.jpg" alt="" srcset="" /></a>
           </div>
           {/* <img src="stand.jpg" className="stand" alt="" /> */}
        </div>
      </div>
    </section>
    <Icon/>
    </>
  );
};

export default Home;
