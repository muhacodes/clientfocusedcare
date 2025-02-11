import React from "react";
import FontAwesomeIcon from "./FontAwesomeWrapper";
import { faBook, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

type Props = {};

function SectionOne({}: Props) {
  return (
    <div className="w-full p-10 text-black bg-white md:p-20">
      <h2 className="my-10 font-sans text-2xl font-bold text-center md:text-4xl ">
        Compassionate Care Tailored to Your <br></br> Loved One's Unique Need
      </h2>
      <div className="flex flex-col gap-10 mx-auto md:flex-row max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <label className="text-2xl font-normal font-roboto">
            {" "}
            Dedicated Support for a comfortable and Dignified Life{" "}
          </label>
          <span>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.{" "}
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span>
            {" "}
            <FontAwesomeIcon className="text-orange-700" icon={faUser} />
          </span>
          <label className="text-2xl font-normal font-roboto">
            {" "}
            Dedicated Support for a comfortable and Dignified Life{" "}
          </label>
          <span>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.{" "}
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span>
            {" "}
            <FontAwesomeIcon icon={faBook} />{" "}
          </span>
          <label className="text-2xl font-normal font-roboto">
            {" "}
            Dedicated Support for a comfortable and Dignified Life{" "}
          </label>
          <span>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
