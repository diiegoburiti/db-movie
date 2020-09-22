import React from "react";
import { Link } from "react-router-dom";
import Button from "../Btn/Button";

import styled from "./Header.module.css";

const Header = () => {
  return (
    <header className={styled.header}>
      <div className="container">
        <div className={styled.inner_content}>
          <div className={styled.brand}>
            <Link className={styled.link} to="/">
              WatchList
            </Link>
          </div>
          <ul className={styled.nav_links}>
            <li>
              <Link className={styled.link} to="/">
                Watch List
              </Link>
            </li>
            <li>
              <Link className={styled.link} to="/watched">
                Watched
              </Link>
            </li>
            <li>
              <Link to="/Add">
                <Button>+ Add</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
