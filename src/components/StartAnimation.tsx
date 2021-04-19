import React from "react";
import "../startAnim.css";

import { motion } from "framer-motion";

interface IStartAnimationProps {
  handleAnimationEnd: any;
}

const StartAnimation: React.FC<IStartAnimationProps> = ({
  handleAnimationEnd,
}) => {
  return (
    <div id="wrapper" onAnimationEnd={handleAnimationEnd}>
      <motion.svg
        viewBox={`0 0 1290 138`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="svgContainer"
      >
        <motion.path
          animate={{ x: 0 }}
          initial={{ x: "47%" }}
          transition={{ duration: 1.6, delay: 0.6, type: "spring" }}
          strokeDashoffset={0}
          fill="#fff"
          d="M96 24V6H114H132V69V132H78H24V123V114H15H6V87V60H15H24V51V42H60H96V24ZM96 87V60H69H42V87V114H69H96V87Z"
          stroke="white"
        />
        <motion.path
          d="M168 51V42H213H258V51V60H267H276V78V96H231H186V105V114H222H258V123V132H213H168V123V114H159H150V87V60H159H168V51ZM240 69V60H213H186V69V78H213H240V69Z"
          stroke="white"
        />
        <motion.path
          d="M294 87V42H348H402V51V60H411H420V96V132H402H384V96V60H375H366V96V132H348H330V96V60H321H312V96V132H303H294V87Z"
          stroke="white"
        />
        <motion.path
          d="M474 51V42H501H528V78V114H546H564V123V132H510H456V123V114H474H492V87V60H483H474V51ZM492 15V6H510H528V15V24H510H492V15Z"
          stroke="white"
        />
        <motion.path
          d="M600 51V42H654H708V51V60H663H618V87V114H663H708V123V132H654H600V123V114H591H582V87V60H591H600V51Z"
          stroke="white"
        />
        <motion.path
          d="M762 114V96H780H798V114V132H780H762V114Z"
          stroke="white"
        />
        <motion.path
          d="M960 24V6H978H996V69V132H942H888V123V114H879H870V87V60H879H888V51V42H924H960V24ZM960 87V60H933H906V87V114H933H960V87Z"
          stroke="white"
        />
        <motion.path
          d="M1032 51V42H1077H1122V51V60H1131H1140V78V96H1095H1050V105V114H1086H1122V123V132H1077H1032V123V114H1023H1014V87V60H1023H1032V51ZM1104 69V60H1077H1050V69V78H1077H1104V69Z"
          stroke="white"
        />
        <motion.path
          d="M1176 69V42H1194H1212V69V96H1230H1248V69V42H1266H1284V69V96H1275H1266V105V114H1257H1248V123V132H1230H1212V123V114H1203H1194V105V96H1185H1176V69Z"
          stroke="white"
        />
      </motion.svg>
    </div>
  );
};

export default StartAnimation;
