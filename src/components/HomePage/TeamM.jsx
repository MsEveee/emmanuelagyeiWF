import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team from "../../assets/images/team.jpg";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-full h-auto max-w-md p-4">
      <img
        src={team}
        alt="Farmers"
        className="object-cover w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center w-full p-6 text-center md:p-8">
      <h1 className="mb-4 text-2xl font-bold text-[#A93A01] md:text-4xl">
        A Dedicated Team
      </h1>
      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
        EA Welding & Fabrication was founded by two visionary co-founders, each
        bringing unique expertise and passion. Together, they are deeply
        committed to quality, precision, and customer satisfaction.
      </p>
      <h4 className="text-xl font-semibold underline">Our Vision</h4>
      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
        To be the leading provider of high-quality welding and fabrication
        solutions, recognized for innovation, craftsmanship, and customer
        satisfaction. We aim to build lasting structures and relationships by
        delivering excellence in every project.
      </p>
      <h4 className="text-xl font-semibold underline">Our Mission</h4>
      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
        At EA Welding & Fabrication, our mission is to provide superior welding
        and metal fabrication services that meet the highest industry standards.
      </p>
    </div>
  );
};

const AboutTeam = () => {
  const imageWrapperRef = useRef(null);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    // GSAP animation for image section
    gsap.fromTo(
      imageWrapperRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // GSAP animation for text section
    gsap.fromTo(
      textWrapperRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textWrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      id="AboutTeam"
      className="flex flex-col items-center justify-center w-full h-auto px-4 py-8 md:flex-row md:h-screen md:px-8"
    >
      {/* Image Section */}
      <div
        ref={imageWrapperRef}
        className="flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0"
      >
        <ImageSection />
      </div>

      {/* Text Section */}
      <div
        ref={textWrapperRef}
        className="flex items-center justify-center w-full md:w-1/2"
      >
        <TextSection />
      </div>
    </div>
  );
};

export default AboutTeam;
