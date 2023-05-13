import React from "react";

function About() {
  return (
    <div className="aboutUs-div">
      <h1 className="aboutTitle">About us</h1>
      <div className="about-content-one maxi-center">
        <h2 className="subTitle">How did it start?</h2>
        <p className="p-content">
          I wanted to make a project that is usefull to a lot of people. At
          firts I thought about making a recipes website. I made a whole plan
          for it but the API I chose didn't work. I needed to think all it over
          again and it came to me that I do love food but I love to watch movies
          even more, specialy Netflix. I couldn't make a movie website without
          buying the movies so I decided to make a trailer web where the client
          can search for a movie, watch its trailer and even mark his
          favorites.I'm also a designer, so I put a lot of thinking in the
          programming and also in the design itself, I even designed it its own
          logo. I used THE MOVIE DB API so the client would be able to get the
          recent cinema world update.
        </p>
      </div>
      <div className="about-content-two maxi-center">
        <p className="p-content par">
          In the future I plan to improve the website design and its UX UI so
          the client would want to stay more time in my website. I also plan to
          improve its functionality and maybe even actually use it on the open
          web, the real deal, where clients can register to it and use it to
          save their favorite movies so they can watch them later.
        </p>
        <h2 className="subTitle sub">Future development</h2>
      </div>
      <div className="banibanner"></div>
    </div>
  );
}

export default About;
