import { motion } from "framer-motion";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-5 text-gray-300">
      <motion.div
        whileHover={{ scale: 1.1, color: "white" }}  // Scale the icon and change color on hover
        transition={{ duration: 0.3 }}  // Duration for smooth transition
      >
        <FaFacebookSquare />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, color: "white" }}  // Scale the icon and change color on hover
        transition={{ duration: 0.3 }}  // Duration for smooth transition
      >
        <FaTwitterSquare />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, color: "white" }}  // Scale the icon and change color on hover
        transition={{ duration: 0.3 }}  // Duration for smooth transition
      >
        <RiInstagramLine />
      </motion.div>
    </div>
  );
};

export default SocialIcons;