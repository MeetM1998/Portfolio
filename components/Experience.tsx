import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Albiorix from "./works/Albiorix";
import Inexture from "./works/Inexture";
import Uffizio from "./works/Uffizio";

const Experience = () => {
  const [workUffizio, setWorkUffizio] = useState(true);
  const [workReactbd, setWorkReactbd] = useState(false);
  const [workGoogle, setWorkGoogle] = useState(false);

  const handleUffizio = () => {
    setWorkUffizio(true);
    setWorkReactbd(false);
    setWorkGoogle(false);
  };

  const handleReactbd = () => {
    setWorkUffizio(false);
    setWorkReactbd(true);
    setWorkGoogle(false);
  };

  const handleGoogle = () => {
    setWorkUffizio(false);
    setWorkReactbd(false);
    setWorkGoogle(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleUffizio}
            className={`${
              workUffizio
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Uffizio
          </li>
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Albiorix
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Inexture
          </li>
        </ul>
        {workUffizio && <Uffizio />}
        {workReactbd && <Albiorix />}
        {workGoogle && <Inexture />}
      </div>
    </section>
  );
};

export default Experience;
