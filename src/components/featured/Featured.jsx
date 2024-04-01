import React from "react";
import { FaEye, FaHeart, FaSearch } from "react-icons/fa";
import "./featured.css";
import Navbar from "../navbar/Navbar";

const Featured = () => {
  return (
    <div className="featured">
        <Navbar/>
      <h1 className="heading">
        <span>featured books</span>
      </h1>
      <div className="featured-slider">
        <div className="wrapper">
          <div className="box">
            <div className="icons">
              <a href="/">
                <FaSearch />
              </a>
              <a href="/">
                <FaHeart />
              </a>
              <a href="/">
                <FaEye />
              </a>
            </div>
            <div className="image">
              <img src="./book1.jpg" alt="" />
            </div>
            <div className="content">
              <h3>featured </h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <a href="" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="/">
                <FaSearch />
              </a>
              <a href="/">
                <FaHeart />
              </a>
              <a href="/">
                <FaEye />
              </a>
            </div>
            <div className="image">
              <img src="./book2.jpg" alt="" />
            </div>
            <div className="content">
              <h3>featured </h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <a href="" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="/">
                <FaSearch />
              </a>
              <a href="/">
                <FaHeart />
              </a>
              <a href="/">
                <FaEye />
              </a>
            </div>
            <div className="image">
              <img src="./book3.jpg" alt="" />
            </div>
            <div className="content">
              <h3>featured </h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <a href="" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="/">
                <FaSearch />
              </a>
              <a href="/">
                <FaHeart />
              </a>
              <a href="/">
                <FaEye />
              </a>
            </div>
            <div className="image">
              <img src="./book4.jpg" alt="" />
            </div>
            <div className="content">
              <h3>featured </h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <a href="" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="/">
                <FaSearch />
              </a>
              <a href="/">
                <FaHeart />
              </a>
              <a href="/">
                <FaEye />
              </a>
            </div>
            <div className="image">
              <img src="./book5.jpg" alt="" />
            </div>
            <div className="content">
              <h3>featured </h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <a href="" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="/">
                <FaSearch />
              </a>
              <a href="/">
                <FaHeart />
              </a>
              <a href="/">
                <FaEye />
              </a>
            </div>
            <div className="image">
              <img src="./book6.jpg" alt="" />
            </div>
            <div className="content">
              <h3>featured </h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <a href="/" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
