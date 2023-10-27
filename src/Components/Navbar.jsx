import React from "react";

const Navbar = ({ fetchUsrs }) => {
  return (
    <div className="container">
      <div className="navbar-container">
        <div className="logo">Logo </div>
        <nav>
          <p>
            <a href="#">Home </a>
          </p>
          <p>
            <a href="#">About </a>
          </p>
          <p>
            <a href="#" onClick={fetchUsrs}>
              {" "}
              Get Users
            </a>
          </p>
          <p>
            <a href="#">Product </a>
          </p>
          <p>
            <a href="#">Blog </a>
          </p>
          <p>
            <a href="#">Contact </a>
          </p>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search Here" />
          <button className="btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
