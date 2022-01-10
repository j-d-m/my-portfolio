import React from "react";
import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <div className="container w-screen h-3/6">
      <h1 className="text-white title-font">
        "Sorry This Is Not The Page You Are Looking For!"
      </h1>
      <button class="btn btn-outline no-underline">
        <Link to="/">Return home</Link>
      </button>
    </div>
  );
}
