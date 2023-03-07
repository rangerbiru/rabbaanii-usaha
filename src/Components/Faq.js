import React, { useEffect } from "react";
import "tw-elements";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="faq" className="px-16 py-36 max-lg:px-4">
      <div
        className="flex flex-col items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-semibold">FAQ</h2>
        <p className="pt-1.5 font-medium max-lg:text-center">
          Jika masih bingung dengan seputar website ini, mungkin
          pertanyaan-pertanyaan ini dapat membantu Anda
        </p>
      </div>
      <div className="accordion py-8" id="accordionExample">
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-medium
        max-lg:text-sm
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Webiste apakah ini?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 max-lg:text-justify max-lg:text-sm">
              <strong>Website Portal Usaha Rabbaanii</strong> merupakan sebuah
              usaha bagi siswa-siswa kami di sekolah SMKI Rabbaanii, yang
              memiliki tekad dan kemauan untuk memulai usaha
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        max-lg:text-sm
        font-medium
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Bagaimana kami melakukan pemesanan di website ini?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 max-lg:text-justify max-lg:text-sm">
              <p>
                Anda dapat menghubungi kami melalui Anak didik kami, dengan
                menggunakan alamat Email yang telah kami sediakan, atau Anda
                dapat bertanya kepada kami melalui{" "}
                <a href="#contact">
                  <strong>Form Contact</strong>
                </a>{" "}
                yang telah kami sediakan
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        max-lg:text-sm
        font-medium
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Kenapa anda harus menggunakan website ini?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 max-lg:text-justify max-lg:text-sm">
              <p>
                Dengan website ini, Anda dapat menemukan berbagai jasa, karya,
                dan usaha dari anak didik SMKI Rabbaanii, selain harganya yang
                terbilang cukup terjangkau, Anda juga dapat berkontribusi kepada
                anak didik kami dalam mencari sebuah pengalaman berwirausaha.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingFour">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        max-lg:text-sm
        font-medium
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Kenapa kami tidak dapat menghubungi via No.Telepon?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 max-lg:text-justify max-lg:text-sm">
              <p>
                Karena memang anak-anak siswa SMKI Rabbaanii tidak diperkenankan
                untuk menggunakan Handphone pada hari biasanya (Senin - Sabtu).
                Adapun mereka diizinkan menggunakan Handphone pada{" "}
                <b>hari Ahad</b> saja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
