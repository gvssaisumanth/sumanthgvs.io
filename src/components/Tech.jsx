import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";

const Tech = () => {
  let [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextLight} style={{ color: "white" }}>
            My skills
          </p>
          <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight} style={{ color: "white" }}>
          My skills
        </p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>
    </>;
  }
};

export default SectionWrapper(Tech, "");
