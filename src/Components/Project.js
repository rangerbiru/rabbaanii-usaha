import React, { useEffect } from "react";
import Usaha from "./Usaha/Usaha";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="project" className="px-16 py-32 max-lg:px-4">
      <div
        className="flex items-center flex-col"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-semibold max-lg:text-center max-lg:text-3xl">
          Project SMKI Rabbaanii
        </h2>
        <p className="pt-1.5 font-medium max-lg:text-center max-lg:text-sm max-lg:mt-2">
          Berikut Adalah Beberapa Usaha Yang Telah Kami Buat
        </p>
      </div>

      {/* card Usaha */}
      <Usaha />
    </section>
  );
};

export default Project;
