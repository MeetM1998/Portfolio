import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="quiz-app"
          des="I developed a React-based quiz app utilizing Tailwind CSS for responsive design and unit test cases to ensure robust functionality. The app offers an interactive quiz experience with seamless UI components, and the testing framework guarantees the reliability of each feature, enhancing user engagement and application stability."
          listItem={["Reactjs","Typescript", "Unit Test"]}
          link="https://quiz-app-iota-one-98.vercel.app/"
        />
        <ArchiveCard
          title="Interview System"
          des="Developed a React-based interview-review system utilizing Material UI for a sleek and responsive user interface. The platform allows users to submit, review, and rate interview experiences, with features like dynamic form handling, pagination, and real-time data updates, ensuring an intuitive and efficient user experience."
          listItem={["Reactjs", "Javascript", "material-ui"]}
          link="https://interview-system.vercel.app/"
        />
        <ArchiveCard
          title="Luxury watch landing Page"
          des="luxury watch landing page using React and SCSS, focusing on a sleek, modern design that highlights the elegance of the brand. The page features smooth animations, high-quality images, and responsive layouts to ensure a premium user experience across all devices."
          listItem={["Reactjs","Javascript", "SCSS"]}
          link="https://luxury-watch-landing-page.vercel.app/"
        />
        <ArchiveCard
          title="Drag and Drop"
          des="I'm developing a dynamic website using React with drag-and-drop functionality, styled with Tailwind CSS. The site utilizes react-xarrows for drawing interactive arrows between elements and react-draggable to enable seamless dragging of components. This combination creates an intuitive and visually engaging user experience for organizing and connecting elements on the page."
          listItem={["Reactjs","Javascript", "Tailwind CSS"]}
          link="https://drag-and-drop-omega-beige.vercel.app/"
        />
        <ArchiveCard
          title="React Big Calendar"
          des="Implement a dynamic event management system using React Big Calendar, allowing users to effortlessly create, update, and delete events. Styled Components are used to ensure a modern and responsive design, providing a seamless and visually appealing user experience."
          listItem={["Reactjs","Javascript", "style-component"]}
          link="https://react-big-calendar-rose.vercel.app/"
        />
        <ArchiveCard
          title="Bingo Board"
          des="Build an interactive Bingo Board with React, styled elegantly using styled-components. This project leverages dynamic styling to create a responsive and visually engaging board, allowing users to enjoy a seamless gaming experience across all devices."
          listItem={["Reactjs", "Typescript", "Tailwind CSS"]}
          link="https://bingo-board-taupe.vercel.app/"
        />

        {/* {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="OREBI e-commerce Shopping store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="https://orebishopping.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Noor Online Shopping Store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://noorshop.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://my-blog-delta-eight.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://shoppersyt.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliotwo.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliothree.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://bazar.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://blog101.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://youtubetodo.vercel.app/"
              />
            </motion.div>
          </>
        )} */}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
