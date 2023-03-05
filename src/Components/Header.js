import React from "react";
import "./style.css";
import logoRB from "./images/logo-rabbaanii.png";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const [open, setOpen] = useState(false);

  return (
    <header
      id="header"
      className="flex items-center py-10 text-white px-16 fixed z-50 w-full max-lg:py-5 max-lg:px-3 header-transition"
    >
      <div className="flex items-center">
        <img
          src={logoRB}
          alt="logo"
          className="w-12 h-auto mr-3 max-lg:w-10 max-lg:mr-2"
        />
        <h2 className="text-2xl font-semibold max-lg:text-xl">Rabbaanii</h2>
      </div>

      <nav className="ml-auto max-lg:hidden">
        <ul className="flex gap-8 font-medium max-lg:text-xs max-lg:gap-2">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Tentang Kami</a>
          </li>
          <li>
            <a href="#project">Usaha Kami</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* hamburger */}
      <div className="hidden max-lg:block ml-auto ham-menu">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          color="#fff"
          rounded
          size={30}
        />
      </div>

      {open ? (
        <>
          <nav>
            <ul className="absolute bg-white left-0 top-20 w-full flex flex-col gap-5 p-4">
              <li>
                <a className="text-black" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-black" href="#about">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a className="text-black" href="#project">
                  Usaha Kami
                </a>
              </li>
              <li>
                <a className="text-black" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-black" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <></>
      )}

      {/* <ul className="flex gap-8">
        <li className="web">
          <a href="https://rabbaanii.sch.id/">
            <i class="fa-solid fa-globe"></i> Rabbaanii
          </a>
        </li>

        <li className="instagram">
          <a href="https://www.instagram.com/rabbaanii_official/?hl=id">
            <i class="fa-brands fa-instagram"></i> Rabbaanii
          </a>
        </li>

        <li className="facebook">
          <a href="https://id-id.facebook.com/hariprasetyo76/">
            <i class="fa-brands fa-facebook"></i> Rabbaanii
          </a>
        </li>
      </ul> */}
    </header>
  );
};

export default Header;
