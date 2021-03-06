import React, { useEffect, useState } from "react";
import HomeMovies from "../components/Home/HomeMovies";
import Title from "../components/Helper/Title";

const Home = () => {
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setPages((page) => [...page, page.length++]);
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
  }, [pages]);

  return (
    <section className="container">
      <Title margimBottom={3} title={"Movies"} />
      {pages.map((page) => (
        <HomeMovies page={page} key={page} />
      ))}
    </section>
  );
};

export default Home;
