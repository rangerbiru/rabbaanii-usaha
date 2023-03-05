import React, { useEffect } from "react";
import "./style.css";
import bg from "./images/bg1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <section id="about" className="px-16 py-32 max-lg:py-28 max-lg:px-10">
      <div className="flex justify-center">
        <h2 className="text-4xl font-semibold max-lg:text-3xl">Tentang Kami</h2>
      </div>

      <div className="py-14 flex gap-8 max-lg:flex-col">
        <div
          className="w-1/2 max-lg:w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={bg}
            alt="bg"
            className="h-96 w-full object-cover rounded-lg max-lg:h-56"
          />
        </div>
        <div
          className="w-1/2 max-lg:w-full"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <h2 className="font-semibold text-3xl leading-normal">
            Usaha Pada Mata Pelajaran PKK <br />{" "}
            <span className="text-red-600">
              (Produk Kreatif & Kewirausahaan)
            </span>
          </h2>

          {/* <p className="text-justify mt-2 leading-normal">
            Portal Website Rabbaanii merupakan sebuah media pemasaran usaha,
            yang dibentuk untuk memaksimalkan kegiatan kewirausahaan siswa{" "}
            yang dibentuk oleh SMKI Rabbaanii untuk mempromosikan hasil kegiatan
            kewirausahaan siswa
          </p> */}

          <p className="text-justify mt-2 leading-normal">
            Website portal usaha adalah sebuah website yang mempromosikan usaha
            dan jasa dari talenta anak didik SMK Rabbaanii Islamic School. Kami
            menyediakan berbagai usaha dari anak didik kami yang meliputi
            desain, pembuatan aplikasi, dan lain-lain. Website ini didirikan
            dengan tujuan untuk meningkatkan skill kewirausahaan siswa sebagai
            tantangan untuk mempersiapkan diri menghadapi dunia kerja. Anda
            dapat menemukan berbagai jasa dan produk dari usaha anak didik kami,
            selain harganya yang terbilang cukup terjangkau, anda juga secara
            tidak langsung berkontribusi dengan memberikan pengalaman kepada
            anak didik kami. Portal usaha ini didirikan pada Januari 2023 dan
            dikelola oleh pihak sekolah. Para murid dan guru telah berkontribusi
            untuk web ini, dan mungkin kamu juga bisa berkontribusi dengan cara
            memesan salah satu jasa dari anak didik kami. Anda bisa mulai
            memesan jasa atau produk dengan menghubungi pengusaha langsung dari
            email ataupun japri via WA
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
