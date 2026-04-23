import React from "react";
import { motion } from "motion/react";
import Buttons from "./components/Buttons";
import FeatureList from "./components/FeatureList";
import DraggableCard from "./components/DraggableCard";
import DismissableAlert from "./components/DismissableAlert";
import StepSwitcher from "./components/StepSwitcher";
import CollapsibleList from "./components/CollapsibleList";
import LiveBadge from "./components/LiveBadge";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ContactPage, HomePage } from "./components/Nav";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center w-full h-screen"> */}
      {/* <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-4xl"
        >
          Hello World
        </motion.h1> */}

      {/* <Buttons/> */}
      {/* <FeatureList/> */}
      {/* <DraggableCard/> */}
      {/* <DismissableAlert/> */}
      {/* <StepSwitcher/> */}
      {/* <CollapsibleList/> */}
      {/* <LiveBadge /> */}
      {/* </div> */}

      <RouterProvider router={router} />
    </>
  );
};

export default App;
