import workerwelding from "../../assets/images/workerwelding.jpg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const texts = ["Welcome to EA Welding & Fabrication!"];

  const textRefs = useRef([]);

  useEffect(() => {
    if (textRefs.current.length > 0) {
      // GSAP animation to fade in each text line with a stagger effect
      gsap.fromTo(
        textRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      className="relative w-full bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${workerwelding})` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"
        aria-hidden="true"
      ></div>

      {/* Overlay Content */}
      <div className=" absolute  inset-0 flex flex-col items-center justify-center text-center px-4 ">
        <div className="text-white">
          {texts.map((text, index) => (
            <div
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 "
            >
              {text}
            </div>
          ))}
        </div>
        <div className="text-white text-2xl">
          <h3>
            we specialize in high-quality welding and custom metal fabrication
            services.{" "}
          </h3>
        </div>

        <button
          className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500"
          onClick={() => navigate("/contact")}
        >
          Book Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
