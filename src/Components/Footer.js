import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="p-10 footer bg-base-300 text-base-content">
      <div>
        <span className="footer-title">Phone</span>
        <p>On Request</p>
      </div>
      <div>
        <span className="footer-title">Email</span>
        <p>j.moir.dev@gmail.com</p>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <p>13189, Berlin, Germany.</p>
      </div>

      <div>
        <span className="footer-title">Social</span>

        <div className="flex justify-center text-center ">
          <a href="https://www.linkedin.com/in/joshua-moir/">
            {" "}
            <BsLinkedin className="w-8 h-5" />
          </a>
          <a href="https://github.com/j-d-m/my-portfolio">
            {" "}
            <BsGithub className="w-8 h-5" />
          </a>
        </div>
      </div>

      <div className="footer-title flex justify-items-center align-center">
        <a href="#about"> Back to the top</a>
        <AiOutlineArrowUp className="w-4 h-5 ml-1" />
      </div>
    </footer>
  );
}
