import React, { useEffect, useState } from "react";
import { supabase } from "./SupaClient";
import "./style.css";

const Contact = () => {
  const [kodeUsaha, setKodeUsaha] = useState([]);

  // Insert Data
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [code, setCode] = useState("");
  const [pesan, setPesan] = useState("");

  // Loading send data
  const [loading, setLoading] = useState(false);

  async function getKodeUsaha() {
    const { data } = await supabase.from("usaha").select();
    setKodeUsaha(data);
  }

  async function postPesan(e) {
    e.preventDefault();
    setLoading(true);
    const { data } = await supabase
      .from("message")
      .insert(
        {
          nama_lengkap: nama,
          telepon: telepon,
          kode_usaha: code,
          pesan_customer: pesan,
        },

        { upsert: true }
      )
      .single();

    // Reset Form
    setNama("");
    setTelepon("");
    setCode("");
    setPesan("");

    setLoading(false);
  }

  useEffect(() => {
    getKodeUsaha();
  }, []);

  return (
    <>
      <section id="contact" className="px-16 py-36 max-lg:px-4">
        <div
          className="flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-semibold">Hubungi Kami</h2>
          <p className="pt-1.5 font-medium max-lg:text-center">
            Anda juga dapat menghubungi kami, selaku admin dari website ini
          </p>
        </div>

        {/* Form Contact */}
        <form className="flex items-center flex-col pt-10" onSubmit={postPesan}>
          <div className="flex flex-col gap-2 w-3/4">
            <label>Nama Lengkap</label>
            <input
              type="text"
              className="flex max-lg:w-full rounded-md "
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mt-3">
            <label>No. Telepon</label>
            <input
              type="number"
              className="flex max-lg:w-full rounded-md"
              value={telepon}
              onChange={(e) => setTelepon(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 w-3/4 mt-3">
            <label>Kode Usaha</label>
            <select
              className="rounded-md max-lg:w-full"
              // value={code}
              onChange={(e) => setCode(e.target.value)}
            >
              <option value="#" disabled selected>
                Silahkan Pilih Kode Usaha
              </option>
              {kodeUsaha.map((kode) => (
                <option value={`US-${kode.id} - ${kode.nama_lengkap}`}>
                  US-{kode.id} ({kode.nama_lengkap})
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 w-3/4 mt-3">
            <label>Berikan Pesan Anda</label>
            <textarea
              rows="8"
              className="max-lg:w-full rounded-md resize-none"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-5 w-3/4">
            <button
              type="submit"
              className="w-full py-4 px-4 bg-red-700 text-white rounded-md transition duration-300 hover:bg-red-800"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
