import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import "tw-elements";
import "../style.css";
import { supabase } from "../SupaClient";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Usaha = () => {
  const [usahaDepro, setUsahaDepro] = useState([]);
  const [usahaEcommers, setUsahaEcommers] = useState([]);
  const [usahaOthers, setUsahaOthers] = useState([]);

  const [modalUsaha, setModalUsaha] = useState([]);

  const [fotoSlide, setFotoSLide] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getModalUsaha(id) {
    try {
      const { data } = await supabase.from("usaha").select().eq("id", id);

      console.log("Foto Slide : ", data[0].foto_usaha2);

      setTimeout(() => {
        setLoading(false);
        setModalUsaha(data[0]);
        setFotoSLide(data[0].foto_usaha2);
      }, 1000);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }

  // async function getFotoSlide(id) {
  //   const { data } = await supabase.from("usaha").select().eq("id", id);
  //   console.log("Foto Slide : ", data[0].foto_usaha2);
  //   setModalUsaha(data[0]);
  //   setFotoSLide(data[0].foto_usaha2);
  // }

  async function getUsahaDepro() {
    const { data } = await supabase
      .from("usaha")
      .select()
      .eq("jenis_usaha", "depro");
    console.log("depro", data);
    setUsahaDepro(data);
  }

  async function getUsahaEcommers() {
    const { data } = await supabase
      .from("usaha")
      .select()
      .eq("jenis_usaha", "ecommers");
    console.log("ecommers", data);
    setUsahaEcommers(data);
  }

  async function getUsahaOthers() {
    const { data } = await supabase
      .from("usaha")
      .select()
      .eq("jenis_usaha", "others");
    console.log("others", data);
    setUsahaOthers(data);
  }

  useEffect(() => {
    getUsahaDepro();
    getUsahaEcommers();
    getUsahaOthers();
    // getFotoSlide();
    // getModalUsaha();
  }, []);

  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  return (
    <div className="py-8">
      <ul
        className="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-homeJustify"
            class="
            color-tabs
      nav-link
      w-full
      block
      font-medium
      text-sm
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeJustify"
            role="tab"
            aria-controls="tabs-homeJustify"
            aria-selected="true"
          >
            Design & Programming
          </a>
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-profileJustify"
            class="
      nav-link
      w-full
      block
      font-medium
      text-sm
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileJustify"
            role="tab"
            aria-controls="tabs-profileJustify"
            aria-selected="false"
          >
            E-Commerce
          </a>
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-messagesJustify"
            class="
      nav-link
      w-full
      block
      font-medium
      text-sm
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesJustify"
            role="tab"
            aria-controls="tabs-messagesJustify"
            aria-selected="false"
          >
            Others
          </a>
        </li>
      </ul>

      {/* Content Usaha */}

      <div class="tab-content" id="tabs-tabContentJustify">
        <div
          class="tab-pane fade show active "
          id="tabs-homeJustify"
          role="tabpanel"
          aria-labelledby="tabs-home-tabJustify"
        >
          <div className="flex gap-6 py-2 px-14 flex-wrap justify-center max-lg:flex-col max-lg:px-2">
            {usahaDepro.map((depro) => (
              <div
                key={depro.id}
                className="flex flex-col border-card rounded-md p-2 w-1/4 items-center max-lg:w-full"
              >
                <img
                  src={depro.foto_usaha}
                  alt="gambar"
                  className="w-full h-60 rounded-md object-cover"
                />
                <h2 className="text-xl font-semibold text-center py-4">
                  {depro.nama_usaha}
                </h2>

                <p className="text-center mb-5">
                  {truncateString(`${depro.desc}`, 40)}
                </p>

                <button
                  type="button"
                  class="inline-block mb-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalXl"
                  value={modalUsaha}
                  onClick={(e) => getModalUsaha(depro.id)}
                  // onClick={(e) => getFotoSlide(depro.id)}
                >
                  Selengkapnya
                </button>

                <div
                  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                  id="exampleModalXl"
                  tabindex="-1"
                  aria-labelledby="exampleModalXlLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      {loading ? (
                        <div className="flex justify-center h-screen items-center flex-col">
                          <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="MagnifyingGlass-loading"
                            wrapperStyle={{}}
                            wrapperClass="MagnifyingGlass-wrapper"
                            glassColor="#c0efff"
                            color="#e15b64"
                          />
                          <h2>Sedang Melihat</h2>
                        </div>
                      ) : (
                        <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              class="text-2xl font-semibold leading-normal text-gray-800"
                              id="exampleModalXlLabel"
                            >
                              {modalUsaha.nama_usaha} -{" "}
                              {modalUsaha.nama_lengkap}
                            </h5>
                            <button
                              type="button"
                              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body flex gap-6 relative p-4 max-lg:flex-col">
                            <div className="w-1/2 max-lg:w-full">
                              {/* <img
                          src={modalUsaha.foto_usaha}
                          alt="Gambar Usaha"
                          className="rounded-md"
                        /> */}
                              <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                navigation={true}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                              >
                                {fotoSlide.map((foto) => (
                                  <SwiperSlide>
                                    <img
                                      src={foto.imgUsaha}
                                      alt="foto usaha 1"
                                      className="max-lg:rounded-md rounded-lg"
                                    />
                                    <span className="absolute top-0 right-0 p-2 bg-red-700 text-white rounded-bl-lg rounded-tr-lg">
                                      US - {modalUsaha.id}
                                    </span>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                            <div className="w-1/2 max-lg:w-full">
                              {/* Desc Usaha */}
                              <div className="desc">
                                <h2 className="text-lg font-semibold mb-1">
                                  Deskripsi Usaha
                                </h2>
                                <p className="leading-normal text-justify">
                                  {modalUsaha.desc}
                                </p>
                              </div>

                              {/* Price */}
                              <div className="harga py-3">
                                <h2 className="text-lg font-semibold mb-1">
                                  Harga Mulai Dari
                                </h2>
                                <p className="font-medium">
                                  Rp.{" "}
                                  {modalUsaha ? "-" : <>{modalUsaha.harga}</>}
                                </p>
                              </div>

                              {/* Telepon */}
                              <div className="pt-1 pb-4">
                                <h2 className="text-lg font-semibold mb-1">
                                  No. Telepon
                                </h2>
                                <p className="font-medium">
                                  {modalUsaha.telepon}
                                </p>
                              </div>

                              {/* Contact */}
                              <div className="contact">
                                <h2 className="text-lg font-semibold mb-1">
                                  Email
                                </h2>

                                <p>{modalUsaha.email}</p>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <a
                              href={`${modalUsaha.portfolio}`}
                              target="_blank"
                              type="button"
                              rel="noreferrer"
                              class="px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
                            >
                              Portfolio Penjual
                            </a>
                            <a
                              href={`mailto:${modalUsaha.email}`}
                              type="button"
                              class="px-6
    py-2.5
    bg-red-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-red-700 hover:shadow-lg
    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-red-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
    ml-1"
                            >
                              Hubungi Penjual
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tabs-profileJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <div className="flex gap-6 py-2 px-14 flex-wrap justify-center max-lg:flex-col max-lg:px-2">
            {usahaEcommers.map((ecomers) => (
              <div
                key={ecomers.id}
                className="flex flex-col border-card rounded-md p-2 w-1/4 items-center max-lg:w-full"
              >
                <img
                  src={ecomers.foto_usaha}
                  alt="gambar"
                  className="w-full h-60 rounded-md object-cover"
                />
                <h2 className="text-xl font-semibold text-center py-4">
                  {ecomers.nama_usaha}
                </h2>

                <p className="text-center mb-5">
                  {truncateString(`${ecomers.desc}`, 40)}
                </p>

                <button
                  type="button"
                  class="inline-block mb-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEcommers"
                  value={modalUsaha}
                  onClick={(e) => getModalUsaha(ecomers.id)}
                  // onClick={(e) => getFotoSlide(ecomers.id)}
                >
                  Selengkapnya
                </button>

                <div
                  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                  id="modalEcommers"
                  tabindex="-1"
                  aria-labelledby="exampleModalXlLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      {loading ? (
                        <>
                          <div className="flex justify-center h-screen items-center flex-col">
                            <MagnifyingGlass
                              visible={true}
                              height="80"
                              width="80"
                              ariaLabel="MagnifyingGlass-loading"
                              wrapperStyle={{}}
                              wrapperClass="MagnifyingGlass-wrapper"
                              glassColor="#c0efff"
                              color="#e15b64"
                            />
                            <h2>Sedang Melihat</h2>
                          </div>
                        </>
                      ) : (
                        <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              class="text-2xl font-semibold leading-normal text-gray-800"
                              id="exampleModalXlLabel"
                            >
                              {modalUsaha.nama_usaha} -{" "}
                              {modalUsaha.nama_lengkap}
                            </h5>
                            <button
                              type="button"
                              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body flex gap-6 relative p-4 max-lg:flex-col">
                            <div className="w-1/2 max-lg:w-full">
                              {/* <img
                            src={modalUsaha.foto_usaha}
                            alt="Gambar Usaha"
                            className="rounded-md"
                          /> */}
                              <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                navigation={true}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                              >
                                {fotoSlide.map((foto) => (
                                  <SwiperSlide>
                                    <img
                                      src={foto.imgUsaha}
                                      alt="foto usaha 1"
                                      className="max-lg:rounded-md rounded-lg"
                                    />
                                    <span className="absolute top-0 right-0 p-2 bg-red-700 text-white rounded-bl-lg rounded-tr-lg">
                                      US - {modalUsaha.id}
                                    </span>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                            <div className="w-1/2 max-lg:w-full">
                              {/* Desc Usaha */}
                              <div className="desc">
                                <h2 className="text-lg font-semibold mb-1">
                                  Deskripsi Usaha
                                </h2>
                                <p className="leading-normal text-justify">
                                  {modalUsaha.desc}
                                </p>
                              </div>

                              {/* Price */}
                              <div className="harga py-3">
                                <h2 className="text-lg font-semibold mb-1">
                                  Harga Mulai Dari
                                </h2>
                                <p className="font-medium">
                                  Rp.{" "}
                                  {modalUsaha ? "-" : <>{modalUsaha.harga}</>}
                                </p>
                              </div>

                              {/* Telepon */}
                              <div className="pt-1 pb-4">
                                <h2 className="text-lg font-semibold mb-1">
                                  No. Telepon
                                </h2>
                                <p className="font-medium">
                                  {modalUsaha.telepon}
                                </p>
                              </div>

                              {/* Contact */}
                              <div className="contact">
                                <h2 className="text-lg font-semibold mb-1">
                                  Email
                                </h2>

                                <p>{modalUsaha.email}</p>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <a
                              href={`${modalUsaha.portfolio}`}
                              target="_blank"
                              type="button"
                              rel="noreferrer"
                              class="px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
                            >
                              Portfolio Penjual
                            </a>
                            <a
                              href={`mailto:${modalUsaha.email}`}
                              type="button"
                              class="px-6
    py-2.5
    bg-red-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-red-700 hover:shadow-lg
    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-red-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
    ml-1"
                            >
                              Hubungi Penjual
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tabs-messagesJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <div className="flex gap-6 py-2 px-14 flex-wrap justify-center max-lg:flex-col max-lg:px-2">
            {usahaOthers.map((other) => (
              <div
                key={other.id}
                className="flex flex-col border-card rounded-md p-2 w-1/4 items-center max-lg:w-full"
              >
                <img
                  src={other.foto_usaha}
                  alt="gambar"
                  className="w-full h-60 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold text-center py-4">
                  {other.nama_usaha}
                </h2>

                <p className="text-center mb-5">
                  {truncateString(`${other.desc}`, 40)}
                </p>

                <button
                  type="button"
                  class="inline-block mb-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-toggle="modal"
                  data-bs-target="#modalOthers"
                  value={modalUsaha}
                  onClick={(e) => getModalUsaha(other.id)}
                >
                  Selengkapnya
                </button>

                <div
                  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                  id="modalOthers"
                  tabindex="-1"
                  aria-labelledby="exampleModalXlLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      {loading ? (
                        <>
                          <div className="flex justify-center h-screen items-center flex-col">
                            <MagnifyingGlass
                              visible={true}
                              height="80"
                              width="80"
                              ariaLabel="MagnifyingGlass-loading"
                              wrapperStyle={{}}
                              wrapperClass="MagnifyingGlass-wrapper"
                              glassColor="#c0efff"
                              color="#e15b64"
                            />
                            <h2>Sedang Melihat</h2>
                          </div>
                        </>
                      ) : (
                        <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              class="text-2xl font-semibold leading-normal text-gray-800"
                              id="exampleModalXlLabel"
                            >
                              {modalUsaha.nama_usaha} -{" "}
                              {modalUsaha.nama_lengkap}
                            </h5>
                            <button
                              type="button"
                              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body flex gap-6 relative p-4 max-lg:flex-col">
                            <div className="w-1/2 max-lg:w-full">
                              {/* <img
                            src={modalUsaha.foto_usaha}
                            alt="Gambar Usaha"
                            className="rounded-md"
                          /> */}
                              <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                navigation={true}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                              >
                                {fotoSlide.map((foto) => (
                                  <SwiperSlide>
                                    <img
                                      src={foto.imgUsaha}
                                      alt="foto usaha 1"
                                      className="max-lg:rounded-md rounded-lg"
                                    />
                                    <span className="absolute top-0 right-0 p-2 bg-red-700 text-white rounded-bl-lg rounded-tr-lg">
                                      US - {modalUsaha.id}
                                    </span>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                            <div className="w-1/2 max-lg:w-full">
                              {/* Desc Usaha */}
                              <div className="desc">
                                <h2 className="text-lg font-semibold mb-1">
                                  Deskripsi Usaha
                                </h2>
                                <p className="leading-normal text-justify">
                                  {modalUsaha.desc}
                                </p>
                              </div>

                              {/* Price */}
                              <div className="harga py-3">
                                <h2 className="text-lg font-semibold mb-1">
                                  Harga Mulai Dari
                                </h2>
                                <p className="font-medium">
                                  Rp.{" "}
                                  {modalUsaha ? "-" : <>{modalUsaha.harga}</>}
                                </p>
                              </div>

                              {/* Telepon */}
                              <div className="pt-1 pb-4">
                                <h2 className="text-lg font-semibold mb-1">
                                  No. Telepon
                                </h2>
                                <p className="font-medium">
                                  {modalUsaha.telepon}
                                </p>
                              </div>

                              {/* Contact */}
                              <div className="contact">
                                <h2 className="text-lg font-semibold mb-1">
                                  Email
                                </h2>

                                <p>{modalUsaha.email}</p>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <a
                              href={`${modalUsaha.portfolio}`}
                              target="_blank"
                              rel="noreferrer"
                              type="button"
                              class="px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
                            >
                              Portfolio Penjual
                            </a>
                            <a
                              href={`mailto:${modalUsaha.email}`}
                              type="button"
                              class="px-6
    py-2.5
    bg-red-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-red-700 hover:shadow-lg
    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-red-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
    ml-1"
                            >
                              Hubungi Penjual
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usaha;
