import React, { FC } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import './header.scss';
import FirstLab from "../pages/FirstLab/FirstLab";
import SecondLab from "../pages/SecondLab/SecondLab";
import ThirdLab from "../pages/ThirdLab/ThirdLab";
import FourthLab from "../pages/FourthLab/FourthLab";
import FivthLab from "../pages/FivthLab/FivthLab";

export const Header: FC= () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            STP
          </Link>
          <div className="header__links">
            <Link to="/" className="header__link">Lab 1</Link>
            <Link to="/lab2" className="header__link">Lab 2</Link>
            <Link to="/lab3" className="header__link">Lab 3</Link>
            <Link to="/lab4" className="header__link">Lab 4</Link>
            <Link to="/lab5" className="header__link">Lab 5</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
