/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {  github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, miniprograms } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  id,
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={id !== 1 ? 'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer': 'hidden'}
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

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
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <h2 className='text-white font-bold text-[32px] mt-10'>AR Application</h2>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="">
        <video controls width="320" height="240">
            <source src="/ar-app-1.mp4" type="video/mp4"/>
        </video>
      </div>
     
      <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>AR Endutainment Application</h3>
          <p className='mt-2 text-secondary text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias aliquam nobis nam expedita, voluptates fugiat dolorem natus accusamus tempora. Similique aperiam illum reprehenderit earum? Odio repudiandae corrupti architecto iure.</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {projects[0].tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      
      <h2 className='text-white font-bold text-[32px] mt-10'>Web Application</h2>
      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.slice(1, 4).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} id={project.id}/>
        ))}
      </div>
      <h2 className='text-white font-bold text-[32px] mt-10'>WeChat Mini-Program</h2>
      <div className='mt-10 flex flex-wrap gap-7'>
        {miniprograms.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} id={project.id}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
