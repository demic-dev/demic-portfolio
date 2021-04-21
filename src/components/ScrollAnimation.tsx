import React from "react";
import { motion } from "framer-motion";

const wheelVariants = {
  initial: {
    y: 2,
  },
  animate: {
    y: 5,
    transition: {
      duration: 0.5,
      yoyo: 4,
    },
  },
};

const arrowVariants = {
  initial: {
    y: 1,
  },
  active: {
    y: 4,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const ScrollAnimation: React.FC = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      version="1.1"
      x="0px"
      y="0px"
      width={"6.5rem"}
      height={"6.5rem"}
      variants={arrowVariants}
      animate="active"
      initial="initial"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#fff">
          <motion.path d="M40,41.0074017 L40,41.0074017 L40,58.9925983 C40,64.5218355 44.4762336,69 50,69 C55.5234877,69 60,64.5203508 60,58.9925983 L60,41.0074017 C60,35.4781645 55.5237664,31 50,31 C44.4765123,31 40,35.4796492 40,41.0074017 L40,41.0074017 Z M38,41.0074017 C38,34.3758969 43.3711258,29 50,29 C56.627417,29 62,34.3726755 62,41.0074017 L62,58.9925983 C62,65.6241031 56.6288742,71 50,71 C43.372583,71 38,65.6273245 38,58.9925983 L38,41.0074017 L38,41.0074017 Z" />
          <motion.path
            variants={wheelVariants}
            initial="initial"
            animate="animate"
            d="M49,36 L49,40 C49,40.5522847 49.4477153,41 50,41 C50.5522847,41 51,40.5522847 51,40 L51,36 C51,35.4477153 50.5522847,35 50,35 C49.4477153,35 49,35.4477153 49,36 L49,36 Z"
          />
          <motion.path
            variants={arrowVariants}
            initial="initial"
            animate="active"
            d="M50,81.9929939 L55.4998372,76.4931567 C55.8903615,76.1026324 56.5235265,76.1026324 56.9140508,76.4931567 C57.3045751,76.883681 57.3045751,77.516846 56.9140508,77.9073703 L50.7071068,84.1143143 C50.5118446,84.3095764 50.2559223,84.4072075 50,84.4072075 C49.7440777,84.4072075 49.4881554,84.3095764 49.2928932,84.1143143 L43.038379,77.8598002 C42.6478547,77.4692759 42.6478547,76.8361109 43.038379,76.4455866 C43.4289033,76.0550623 44.0620683,76.0550623 44.4525926,76.4455866 L50,81.9929939 Z"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default ScrollAnimation;
