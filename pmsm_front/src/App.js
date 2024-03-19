import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Home from "./components/LandingPage/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginSignup/Login";
import UserProfile2 from "./components/UserProfile/UserProfile2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Readytrack from "./components/Readytrack/Readytrack";
import Adaptiveplatform from "./components/Adaptiveplatform/Adaptiveplatform";
import Platformadvantage from "./components/Platformadvantage/Platformadvantage";
import Contact from "./components/Contact/Contact";

function App() {
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const toggleModal = () => {
    setModal((prev) => {
      return !prev;
    });
  };

  const toggleLogstat = () => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  };

  // toast
  const notifysuccess = (c) => {
    toast.success(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };
  const notifyerror = (c) => {
    toast.error(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };

  return (
    <Router>
      <>
        <Navbar1
          setOpenModal={toggleModal}
          setLogstat={toggleLogstat}
          isLoggedIn={isLoggedIn}
          notifyerror={notifyerror}
          notifysuccess={notifysuccess}
        />
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="initiatives">
                  <Adaptiveplatform />
                </div>
                <div id="advantages">
                  <Platformadvantage />
                </div>
                <div id="track">
                <Readytrack />
                </div>
                <Footer />
              </>
            }
          />

          <Route exact path="/profile" element={<UserProfile2 />} />
          {/* <Route exact path="/current" element={<Current />} /> */}
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {modal && (
          <Login
            setOpenModal={toggleModal}
            setLogstat={toggleLogstat}
            notifysuccess={notifysuccess}
            notifyerror={notifyerror}
          />
        )}
      </>
    </Router>
  );
}

export default App;
