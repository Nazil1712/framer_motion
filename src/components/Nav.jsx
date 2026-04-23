import { AnimatePresence, easeOut } from "motion/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x:50 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0, x:-50 }}
      transition={{duration:0.35, ease:easeOut}}
    >
      {children}
    </motion.div>
  );
};

export const HomePage = () => {
  return (
    <PageTransition>
      <div className="p-4 m-8 rounded-2xl bg-blue-950 text-white">
        <h2>Home</h2>
        <p>Welcome! Switch between pages to see transition</p>
      </div>
    </PageTransition>
  );
};

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="p-4 m-8 rounded-2xl bg-blue-950 text-white">
        <h2>About</h2>
        <p>Welcome! Switch between pages to see transition</p>
      </div>
    </PageTransition>
  );
};

export const ContactPage = () => {
  return (
    <PageTransition>
      <div className="p-4 m-8 rounded-2xl bg-blue-950 text-white">
        <h2>Contact</h2>
        <p>Welcome! Switch between pages to see transition</p>
      </div>
    </PageTransition>
  );
};

const Nav = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div>
        <nav className="bg-blue-950 text-white p-4 flex gap-4 border-b-2 border-b-blue-100 text-2xl">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </nav>
      </div>
    </AnimatePresence>
  );
};

export default Nav;
