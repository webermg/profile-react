import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a class="navbar-brand px-2" href="index.html">Matt Weber</a> */}
      <Link to="/" className="navbar-brand px-2">
              Matt Weber
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            {/* <a class="nav-link" href="contact.html">Contact</a> */}
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
        </Link>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="portfolio.html">Portfolio</a> */}
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
        </Link>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="index.html">About <span class="sr-only">(current)</span></a> */}
            <Link to="/about" className={location.pathname === "/" || location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
        </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
