import React from "react";
import portrait from "../Assets/portrait-smile.JPG";

export default function About() {
  return (
    <main id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-4x1 text-4xl mb-4 font-medium text-white leading-loose">
            Hi! I'm Joshua an aspiring Web Developer,
            <br className="hidden lg:inline-block" /> who enjoys working in
            Front-End but also gets a kick out of Back-End!
          </h1>
          <h2 className="title-font sm:text-4x1 text-2xl mb-4 font-medium text-white leading-loose">
            Who am I you may ask?
          </h2>

          <p className="mb-8">
            Well my name you already know, so heres the rest, I am originally
            from New Zealand now based in Berlin, Germany. I come from a
            background of hospitality and restaurant management but decided that
            it was time for a career change, with a life long interest in the
            internet and technology I thought "why not give coding a try?", so
            that's when I jumped into 1.5 year long Boot Camp. I am becoming
            more inspired everyday by the challenge of learning skills for the
            future and the joy of writing clean code.
          </p>
          <div className="flex justify-center">
            <button className="btn btn-outline my-5 mx-2">
              <a href="#contact">Get in touch</a>
            </button>
            <button className="btn btn-outline my-5 mx-2">
              <a href="https://github.com/j-d-m">See my Github</a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-sm max-h-sm lg:w-full md:w-1/2 w-5/6 h-1/2">
          <img src={portrait} alt="Hero" />
        </div>
      </div>
    </main>
  );
}
