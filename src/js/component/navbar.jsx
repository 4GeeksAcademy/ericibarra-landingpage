import React from "react";

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container d-flex justify-content-between">
          <a class="navbar-brand text-light" href="#">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item active">
                      <a class="nav-link text-light" href="#">Home</a>
                  </li>
                  <li class="nav-item active">
                      <a class="nav-link text-light" href="#">About</a>
                  </li>
                  <li class="nav-item active">
                      <a class="nav-link text-light" href="#">Services</a>
                  </li>
                  <li class="nav-item active">
                      <a class="nav-link text-light" href="#">Contact</a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;
