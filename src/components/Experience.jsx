import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "white",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="text-black lg:text-white text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3
        className="text-[24px] font-bold  tracking-[2px]"
        style={{ fontFamily: "Sans-Serif", color: "black" }}
      >
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-overcameBold tracking-[1px]"
        style={{ margin: 0, color: "black", fontFamily: "Sans-Serif" }}
      >
        {experience.company_name}
      </p>
      <p
        className="text-[18px]  ont-overcameBold tracking-[1px]"
        style={{ margin: 0, fontFamily: "Sans-Serif" }}
      >
        <ul style={{ listStyleType: "disc", color: "black" }}>
          {experience.description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}
          style={{ color: "white" }}
        >
          What I've done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}
          style={{ color: "white" }}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              className="px-6"
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
