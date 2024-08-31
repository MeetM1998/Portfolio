import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Inexture = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Apprenticeship
        <span className="text-textGreen tracking-wide">
          @Inexture Solution LLP
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2021 - Jun 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern and performant code for customer end basic website.
        </li>
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked on small features and bugs as an individual contributor,
          understood end-to-end flows of all the services.
        </li>
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Learned new techniques,and it’s applications in industry life.
        </li>
      </ul>
    </motion.div>
  );
};

export default Inexture;
