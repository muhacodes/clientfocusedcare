import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function HomeCare() {
  

  return (
    <section className="flex flex-col items-center w-full px-4 py-40 lg:px-20 md:flex-row md:space-x-20">
      <div className="w-full md:w-1/2">
        <Image
          className="text-center lg:float-end"
          width={600}
          height={700}
          alt="ALT"
          src="https://media.istockphoto.com/id/1413996445/photo/elderly-patient-being-taken-care-of-modern-healthcare-nurse-professional-senior-caucasian.jpg?s=2048x2048&w=is&k=20&c=ZNi-rlZlK7BFkLW9J-U41DYAjVIil5JaJ2OkP921XvY="
        />
      </div>
      <div className="flex flex-col w-full space-y-10 md:w-1/2">
        <h2 className="max-w-md text-2xl md:text-5xl font-roboto">
          Your Home Care Experience Matters
        </h2>
        <p className="max-w-md text-gray-500">
          {" "}
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus
          et magnis dis parturient montes.{" "}
        </p>
        <ul className="flex flex-col space-y-4">
          <li className="flex items-center gap-5">
            <FontAwesomeIcon
              className="text-xl text-orange-600"
              icon={faCheck}
            />
            <span> Excelent Protection </span>
          </li>

          <li className="flex items-center gap-5">
            <FontAwesomeIcon
              className="text-xl text-orange-600"
              icon={faCheck}
            />
            <span> High Saving Potential </span>
          </li>

          <li className="flex items-center gap-5">
            <FontAwesomeIcon
              className="text-xl text-orange-600"
              icon={faCheck}
            />
            <span> Maximun Time Savings </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
