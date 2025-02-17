import React from "react";

export const Section = () => {
  return (
    <section className="px-4 py-20 lg:py-40 bg-color1">
      <h2 className="text-3xl text-center text-activeWhite lg:text-5xl font-roboto">
        Top-Notch Care For You and Your Beloved
      </h2>
      <div className="grid grid-cols-1 gap-10 pt-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        <div className="flex flex-col p-4 text-white gap-y-5 group hover:bg-activeWhite bg-color2 ">
          <h2 className="text-2xl group-hover:text-gray-700 font-lato">
            Home Care Service
          </h2>
          <p className="font-mono text-sm text-gray-300 group-hover:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nascetur ridiculus.
          </p>
        </div>
        <div className="flex flex-col p-4 text-white gap-y-5 group hover:bg-activeWhite bg-color2 ">
          <h2 className="text-2xl group-hover:text-gray-700 font-lato">
            Intensive Care Service
          </h2>
          <p className="font-mono text-sm text-gray-300 group-hover:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nascetur ridiculus.
          </p>
        </div>
        <div className="flex flex-col p-4 text-white gap-y-5 group hover:bg-activeWhite bg-color2 ">
          <h2 className="text-2xl group-hover:text-gray-700 font-lato">
            Senior Care Service
          </h2>
          <p className="font-mono text-sm text-gray-300 group-hover:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nascetur ridiculus.
          </p>
        </div>
        <div className="flex flex-col p-4 text-white gap-y-5 group hover:bg-activeWhite bg-color2 ">
          <h2 className="text-2xl group-hover:text-gray-700 font-lato">
            Health Consultation
          </h2>
          <p className="font-mono text-sm text-gray-300 group-hover:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nascetur ridiculus.
          </p>
        </div>
        <div className="flex flex-col p-4 text-white gap-y-5 group hover:bg-activeWhite bg-color2 ">
          <h2 className="text-2xl group-hover:text-gray-700 font-lato">
            Ratirement Home
          </h2>
          <p className="font-mono text-sm text-gray-300 group-hover:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nascetur ridiculus.
          </p>
        </div>
        <div className="flex flex-col p-4 text-white gap-y-5 group hover:bg-activeWhite bg-color2 ">
          <h2 className="text-2xl group-hover:text-gray-700 font-lato">
            Child Care Service
          </h2>
          <p className="font-mono text-sm text-gray-300 group-hover:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nascetur ridiculus.
          </p>
        </div>
      </div>
    </section>
  );
};

// import React from 'react';

export const GETINTOUCH = () => {
  // Replace this URL with your Unsplash image URL
  const unsplashImageUrl = "https://plus.unsplash.com/premium_photo-1664475811964-75af7d90ee4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="relative h-[70vh] flex items-center justify-center bg-cover object-fill bg-center"
      style={{ backgroundImage: `url(${unsplashImageUrl})` }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-2xl font-bold lg:text-6xl font-roboto">Care Is Easier Than Ever!</h1>
        <p className="mb-8 font-serif text-lg">
        Let us treat your loved ones like family. <br></br>
        Call us directly — 123-456-7890
        </p>
        <button className="px-6 py-2 text-white transition duration-300 border rounded-full hover:bg-color2">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};
