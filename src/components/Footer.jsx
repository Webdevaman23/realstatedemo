import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-lg font-semibold">Real State demo</h2>
            <p>(786) 752- Raipur</p>
            <p>info@realstatedemo.com</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold">ADDRESS</h3>
            <p>8569 Pines Blvd., #214</p>
            <p>Pembroke Pines, FL 33024</p>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  MEET THE TEAM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FEATURED LISTINGS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="text-sm mt-6">
          All information is deemed reliable but not guaranteed and should be
          independently reviewed and verified.
        </p>
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaEnvelope />
            </a>
          </div>
          <p>Website designed and developed by Aman & Subhankar</p>
          <p>
            Copyright © 2024 |{" "}
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
