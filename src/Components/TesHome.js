import React from "react";
import "./style.css";

const TesHome = () => {
  return (
    <section
      id="home"
      className="px-16 py-4 h-screen flex flex-col items-center justify-center max-lg:flex-col max-lg:px-2 max-lg:py-28 bg-home"
    >
      <h2
        className="text-white text-5xl font-semibold text-center leading-tight max-lg:text-3xl "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Selamat Datang Di <span className="text-red-600">Portal Web Usaha</span>
      </h2>

      <h2
        className="text-white text-5xl font-semibold text-center leading-tight max-lg:text-3xl "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        SMKI Rabbaanii
      </h2>

      {/* <h2 className="text-white text-5xl font-semibold text-center ">
        <span className="text-xl">Selamat Datang Di</span> <br />{" "}
        <span className="text-red-600 text-6xl">Portal Web Usaha</span> <br />{" "}
        SMKI Rabbaanii
      </h2> */}

      <p
        className="pt-3 text-white text-center text-lg max-md:text-base max-md:text-center max-lg:text-base"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        Temukan jasa & produk terbaik dari usaha para siswa{" "}
        <strong>SMKI Rabbaanii</strong>
      </p>
    </section>
  );
};

export default TesHome;
