import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Form/Button";
import { device } from "../../device";

const Wrapperheader = styled.header`
  background-color: var(--header-bg);

  a {
    color: var(--white);
    font-size: 1.25rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const InnerContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Brand = styled.div`
  a {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  li {
    display: inline-block;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${device.mobile} {
    li {
      a {
        font-size: 0.875rem;
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapperheader>
      <div className="container">
        <InnerContent>
          <Brand>
            <Link to="/">Movies</Link>
          </Brand>
          <NavLinks>
            <li>
              <Link to="/watchlist">WatchList</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/Add">
                <Button>+ Add</Button>
              </Link>
            </li>
          </NavLinks>
        </InnerContent>
      </div>
    </Wrapperheader>
  );
};

export default Header;
