/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import VRApplication from "../pages/VRApplication";
import WeChatMiniProgram from "../pages/WeChatMiniProgram";
import AIApplication from "../pages/AIApplication";
import ARApplication from "../pages/ARApplication";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

     <ARApplication />
      <VRApplication />
      <AIApplication />
      <WeChatMiniProgram />
    </>
  );
};

export default SectionWrapper(Works, "work");
