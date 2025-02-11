// import React from "react";
// import Fontawesome from "../components/FontAwesomeWrapper";
// import {
//   faEnvelope,
//   faHome,
//   faLocationPin,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";

// type Props = {};

// function Footer({}: Props) {
//   return (
//     <div className="grid grid-cols-1 px-4 py-20 mx-auto sm:grid-cols-5 max-w-7xl">
//       <div className="flex flex-col col-span-2 space-x-4 space-y-10">
//         <span className="flex gap-4">
//           <Fontawesome className="text-4xl" icon={faHome} />
//           <h2 className="text-4xl font-bold font-roboto"> Logo </h2>
//         </span>
//         <p className="max-w-5xl">
//           Specialized form of health care service that brings the expertise of
//           professional nurses
//         </p>
//       </div>

//       <div className="flex flex-col columns-1 gap-y-5">
//         <label> Contact </label>
//         <ul>
//           <li>
//             <span className="flex gap-4">
//               <Fontawesome icon={faPhone} className="text-lg text-gray-400" />
//               <label> +4478654556568 </label>
//             </span>
//             <span className="flex gap-4">
//               <Fontawesome
//                 icon={faEnvelope}
//                 className="text-lg text-gray-400"
//               />
//               <label> support@clientfocusedcare.org </label>
//             </span>
//             <span className="flex gap-4">
//               <Fontawesome
//                 icon={faLocationPin}
//                 className="text-lg text-gray-400"
//               />
//               <label>
//                 {" "}
//                 Flat 8, Building name, <br></br>
//                 Chessington, KT9 2RT
//               </label>
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from 'react';
import Fontawesome from './FontAwesomeWrapper'
import { faEnvelope, faLocationPin, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="col-span-2 mb-8 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">NURSEY</h2>
            <p className="text-gray-400">
              Specialized form of healthcare service that brings the expertise of professional nurses.
            </p>
          </div>

          {/* Sitemap Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Sitemap</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex gap-2 text-gray-400"> <span> <Fontawesome  icon={faPhone} /> </span> +447380840980</li>
              <li className="flex gap-2 text-gray-400"> <span> <Fontawesome  icon={faEnvelope} /> </span>  support@nursey.com</li>
              <li className="flex gap-2 text-gray-400"> <span> <Fontawesome  icon={faLocationPin} /> </span>   JL Sunset Road <br></br> No. 99x, <br></br>  Kuta - Bali</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            Copyright © 2023 Nursery By JegRonne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;