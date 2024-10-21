import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.css";
import Navbar from "./Navbar";
import home_image from "../assets/home_image.png";
import Footer from "./Footer";
import Menu from "./Menu";
import Testimonial from "./Testimonials";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div>
      <Navbar />

      <div className="home_intro">
        <div className="intro_left">
          <h1>Savor the Flavors of Authentic Cuisine</h1>
          <p>
            At Delicious, we believe that food is more than just sustenance it's
            a reason to celebrate. Join us in our cozy, vibrant setting and
            indulge in a culinary journey that will tantalize your taste buds
            and warm your soul. Let's make every meal a memory"
          </p>
          <button onClick={() => navigate("/about")}>About Us</button> {/* Redirect to About */}
        </div>

        <div className="intro_right">
          <img src={home_image} alt="Home" />
        </div>
      </div>
      <Menu />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
