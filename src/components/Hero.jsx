import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { bwpic, sumanth } from "../assets/index.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-black text-white min-h-screen overflow-hidden py-12 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bwpic})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-Poppins uppercase`}
              style={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: window.innerWidth < 768 ? "24px" : "48px",
              }}
            >
              Hi, I'm{" "}
              <span
                className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase"
                style={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: window.innerWidth < 768 ? "24px" : "48px",
                }}
              >
                Sumanth
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} text-eerieBlack`}
              style={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: window.innerWidth < 768 ? "16px" : "18px",
              }}
            >
              Software Engineer, Full Stack Developer, MachineLearning
              Enthusiast <br className="sm:block hidden" />
            </p>
            <div className="flex justify-content space-x-4 mb-2 mt-1 pt-1 pb-2">
              <a
                href="https://github.com/gvssaisumanth"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 hover:scale-110"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/gvs-sai-sumanth-49b739138/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 hover:scale-110"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end pt-5">
            {/* <img
              src={sumanth}
              alt="Image"
              style={{
                width: window.innerWidth < 768 ? "200px" : "300px",
                height: window.innerWidth < 768 ? "300px" : "400px",
                objectFit: "cover",
              }}
            /> */}
            <img
              src={sumanth}
              alt="Image"
              style={{
                width: window.innerWidth < 768 ? "400px" : "300px",
                height: window.innerWidth < 768 ? "400px" : "300px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
