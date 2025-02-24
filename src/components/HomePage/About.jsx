import React from "react";
import welding from "../../assets/images/welding.jpg";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center py-11 px-6 md:px-20 lg:px-28 gap-10 bg-[#F3F4F6]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={welding}
          alt="About Image"
          className="w-full h-auto max-w-lg rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold underline mb-6">About Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          At EA Welding & Fabrication, we specialize in high-quality welding and
          metal fabrication, delivering durable and precision-crafted solutions
          for industrial, commercial, and residential needs. With years of
          experience in the industry, our team of skilled fabricators and
          certified welders ensures every project meets the highest standards of
          strength, safety, and craftsmanship.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          From custom metal structures and machinery repairs to architectural
          designs and industrial fabrication, we bring innovation and expertise
          to every job. Whether you need structural welding, stainless steel
          work, aluminum fabrication, or custom metal parts, we have the tools
          and skills to bring your vision to life.
        </p>
        <p className="text-lg leading-relaxed">
          We are committed to quality, precision, and customer satisfaction. We
          work closely with our clients to understand their specific
          requirements, ensuring tailored solutions that exceed expectations. No
          project is too big or too small—we weld it all!
        </p>
      </div>
    </div>
  );
};

export default About;