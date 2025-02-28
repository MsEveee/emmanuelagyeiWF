import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/images/insta.jpg";
import link from "../assets/images/link.png";
import tiktok from "../assets/images/tiktok.webp";

const Footer = ({ bgcolor }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full px-6 py-8 bg-gray-800 text-white`}
      style={{ backgroundColor: bgcolor }}
    >
      <div className="flex flex-col gap-10 md:flex-row md:justify-evenly">
        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Contact Us</h4>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:bidigreenghanalimited@gmail.com"
              className="text-orange-500 hover:underline"
            >
              emmanuelagyeiotuo@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <br />
            <a
              href="tel"
              className="text-orange-500 hover:underline"
            >
              +233 247-989448
            </a>
            <br />
            <a
              href="tel:+233506078654"
              className="text-orange-500 hover:underline"
            >
              +233 200-409464
            </a>
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to=""
                className="text-orange-500 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-orange-500 hover:underline"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="" className="text-orange-500 hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link to="" className="text-orange-500 hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-10 h-10 rounded-lg"
              />
            </a>
            <a
              href="http://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link} alt="LinkedIn" className="w-10 h-10 rounded-lg" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" className="w-10 h-10 rounded-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center border-t border-gray-700">
        <p className="text-sm">
          &copy; {currentYear} EA Welding & Fabrication. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
