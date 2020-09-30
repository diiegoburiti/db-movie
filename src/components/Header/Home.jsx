import React, { useEffect, useState } from "react";
import HomeMovies from "../Home/HomeMovies";
import Title from "../Home/Title";

const Home = () => {
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setPages((page) => [...page, page.length + 1]);
        wait = true;

        setTimeout(() => {
          wait = true;
        }, 500);
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <section className="container">
      <Title title={"Movies"} />
      {pages.map((page) => (
        <HomeMovies page={page} key={page} />
      ))}
    </section>
  );
};

export default Home;
