import React from "react";
import portrait from "../Assets/portrait-smile.JPG";

export default function About() {
  return (
    <main id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-4x1 text-4xl mb-4 font-medium text-white leading-loose">
            Hi! I'm Joshua a Full Stack Web Developer,
            <br className="hidden lg:inline-block" /> who enjoys working in
            Front-End but also gets a kick out of Back-End!
          </h1>
          <h2 className="title-font sm:text-4x1 text-2xl mb-4 font-medium text-white leading-loose">
            Who am I you may ask?
          </h2>

          <p className="mb-8">
            Hi there! My name you already know, so here&apos;s the rest of the
            story. After spending 13 incredible years in Berlin, Germany,
            I&apos;ve returned to my roots in New Zealand. With nearly two
            decades of experience in various roles within the hospitality
            industry, I decided it was time for a career change. A lifelong
            interest in the internet and technology led me to think, "Why not
            give coding a try?" And so, I jumped into an intensive fulltime
            full-stack web development boot camp. Throughout my career, I've
            demonstrated a passion for problem-solving and a commitment to
            delivering high-quality solutions. From managing teams to organizing
            large-scale events, I&apos;ve honed my ability to communicate
            effectively and adapt quickly. Now, I'm eager to leverage this rich
            skill set in dynamic and collaborative software development
            environments. During my boot camp, I gained hands-on experience with
            a range of technologies, including JavaScript, HTML5, CSS3, React,
            Node.js, and MongoDB. The challenge of learning new skills and the
            joy of writing clean code inspire me every day. I&apos;m dedicated
            to ongoing self-teaching and self-development, regularly seeking out
            new resources, courses, and projects to expand my skills and stay
            updated on the latest industry trends and best practices. My goal is
            to contribute my diverse background and unwavering dedication to
            excellence to innovative software projects and teams. Let's build
            something amazing together!
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
