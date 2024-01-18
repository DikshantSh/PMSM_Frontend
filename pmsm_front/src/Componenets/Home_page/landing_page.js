import React, {useEffect} from "react";
import "./navbar.css";
import VideoBackground from "./videobackground";


const Landing_page = () => {
    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = "#000";
        } else {
          navbar.style.backgroundColor = "transparent";
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <div>
        <header className="navbar" id="navbar">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <div className="auth-buttons right">
                {/* <button className="signup">Sign Up</button> */}
                <button className="login">Login</button>
              </div>
            </ul>
          </nav>
        </header>
        <VideoBackground/>
        <div className="page1"></div>
        <div className="page2"></div>
      </div>
    </>
  );
};

export default Landing_page;
