import React from "react";
import logoRB from "./images/logo-rabbaanii.png";
import "./style.css";

const Footer = () => {
  return (
    <footer className="p-10 bg-footer rounded-t-2xl">
      <div className="flex flex-col items-center">
        <img src={logoRB} alt="Logo Rabbaanii" className="w-36 h-auto mr-3" />

        <div className="py-2 text-center">
          <p className="text-2xl font-bold max-lg:mb-2">
            Rabbaanii Islamic School
          </p>
          <p>TK – SD – SMP – SMP & SMK Putra Boarding</p>
        </div>

        <div className="pt-3">
          <p className="text-xs max-lg:text-center">
            Jl. Cimandiri No. 8 B RT 06/02, Perum Graha Asri, Jatireja, Cikarang
            Timur – Bekasi
          </p>
        </div>

        <div className="flex gap-3 py-6">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.9138775164374!2d107.18122290333613!3d-6.286358828215273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b445d8375b1%3A0x2be0e0c5314813b1!2sSMP%20-%20SMK%20Boarding%20Rabbaanii%20Islamic%20School!5e0!3m2!1sid!2sid!4v1673399422552!5m2!1sid!2sid"
            width="300"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-sm"
          ></iframe> */}

          <a
            href="https://www.facebook.com/hariprasetyo76"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 text-xl rounded-full p-2 border-2 transition duration-300 hover:bg-blue-700 hover:border-blue-700 flex justify-center items-center"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/rabbaanii_official/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 text-xl rounded-full p-2 border-2 transition duration-300 hover:btrg-fuchsia-700 hover:border-fuchsia-700 flex justify-center items-center"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCe6yNYXmRTGGPXtyXdYSG3A"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 text-xl rounded-full p-2 border-2 transition duration-300 hover:bg-red-600 hover:border-red-700 flex justify-center items-center"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>

          {/* <div className="">
            <a
              href="https://www.instagram.com/rabbaanii_official/"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div> */}
        </div>

        <div className="text-center">
          <p className="text-xs">
            © 2019, Rabbani Islamic School. All Rights Reserved. Web by
            <strong className="text-blue-400"> Rangerbiru</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
