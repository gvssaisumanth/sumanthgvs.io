import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { FaGithub, FaLinkedin, FaEnvelope, FaShareAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse sm:flex-row
      flex gap-10 w-full sm:w-full"
      style={{ fontFamily: "sans-serif" }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-xl w-full sm:w-full"
      >
        <p className={styles.sectionSubText} style={{ color: "white" }}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadTextLight} style={{ color: "white" }}>
          Contact.
        </h3>

        <div class="pt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full sm:w-full">
          <div
            class="rounded overflow-hidden shadow-lg max-w-sm"
            style={{
              backgroundColor: "#000000",
              backgroundImage:
                "linear-gradient(135deg, #000000 153%, #400c55 74%)",
            }}
          >
            <div class="pt-3">
              <div
                class="font-bold text-xl mb-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  content: "justify",
                }}
              >
                <FaEnvelope size={20} />
                <span class="px-3">Email Me </span>
              </div>

              <p class="px-3 text-white-700 text-base">
                gaali.v@northeastern.edu
              </p>
            </div>
          </div>

          <div
            class="rounded overflow-hidden shadow-lg max-w-sm"
            style={{
              backgroundColor: "#000000",
              backgroundImage:
                "linear-gradient(135deg, #000000 153%, #400c55 74%)",
            }}
          >
            <div class="px-6 py-4">
              <div
                class="font-bold text-xl mb-2 rounded overflow-hidden shadow-lg"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaShareAlt size={20} />
                <span className="px-3">Social</span>
              </div>
              <p class="text-gray-700 text-base pt-2">
                <div
                  className="flex justify-content space-x-4 rounded overflow-hidden shadow-lg"
                  style={{ color: "white" }}
                >
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
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
