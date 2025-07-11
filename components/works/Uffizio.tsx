import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Uffizio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmer
        <span className="text-textGreen tracking-wide">
          @Uffizio IOTech Private Limited
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Migrated a legacy XSLT-based vehicle tracking system to a scalable
          React.js frontend with Leaflet.js for real-time map visualizations and
          geo-fencing.
        </li>
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered a role-based dynamic theming system, enabling user-level UI
          customization and reducing redundant styles and components.
        </li>
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built multilingual report generation with i18n, supporting time zone
          localization and language preferences.
        </li>
        <li className="text-base flex gap-2 text-textDark text-justify">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented a custom SOS alert system UI and optimized state
          management and file structure to improve performance, scalability, and
          maintainability.
        </li>
      </ul>
    </motion.div>
  );
};

export default Uffizio;
