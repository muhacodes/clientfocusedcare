import React from "react";

type Props = {};

function Section({}: Props) {
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
}

export default Section;
