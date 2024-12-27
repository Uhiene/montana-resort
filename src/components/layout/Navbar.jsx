import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { path: "/", label: "Home" },
  { path: "/rooms", label: "Rooms" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];
const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4 text-white">
        {links.map((link) => (
          <li className="relative">
            <Link
              to={link.path}
              className={`cursor-pointer hover:text-yellow-400 transition-all ${
                location.pathname === link.path ? "text-yellow-400" : " "
              } 
            }`}
            >
              {link.label}
            </Link>

            <motion.div className="absolute left-1/2 bottom-0 h-[2px] bg-yellow-400"
            initial={{ width: 0, x: "-50%"}}
            animate={{
                width: location.pathname === link.path ? "100%" : 0,
                x: location.pathname === link.path? "-50%" : "-50%",
  
            }}
            transition={{duration: 0.7, ease: "easeInOut"}}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
