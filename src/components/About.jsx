import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
      style={{
        //backgroundColor: "#000000",
        backgroundImage: "linear-gradient(135deg, #000000 100%, #400c55 64%)",
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(135deg, #000000 30%, #400c55 74%)",
        }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
          style={{ color: "white", fontFamily: "sans-serif" }}
        >
          Introduction
        </p>
        <h2
          className={styles.sectionHeadText}
          style={{ color: "white", fontFamily: "sans-serif" }}
        >
          Overview.
        </h2>
        <div
          style={{
            textAlign: "justify",
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          I am a creative and dedicated individual specializing in developing
          applications. Currently pursuing Masters's in Software Engineering
          systems at Northeastern University, Boston with a focus on System
          Design and Application Development. I possess good knowledge of Data
          Structures and Algorithms and gained hands-on experience in various
          frontend and backend technologies. Currently learning Machine learning
          technologies, Along with technical skills, I have developed
          Problem-solving, critical thinking, and analytical reasoning. In
          addition to these I have improved my Interpersonal skills. I love
          solving real-world problems and working on real-time projects.
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      ></motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
