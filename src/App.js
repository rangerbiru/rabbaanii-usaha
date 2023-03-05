import About from "./Components/About";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Home from "./Components/Home";
import Project from "./Components/Project";
import TesHome from "./Components/TesHome";

import { ThreeCircles } from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react";
import Contact from "./Components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      {loading ? (
        <div className="flex flex-col h-screen justify-center items-center">
          <ThreeCircles
            height="50"
            width="50"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
          <h2 className="font-semibold">Tunggu Sebentar Yaa...</h2>
        </div>
      ) : (
        <>
          <Header />
          <main>
            {/* <Home /> */}
            <TesHome />
            <About />
            <Project />
            <Faq />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
