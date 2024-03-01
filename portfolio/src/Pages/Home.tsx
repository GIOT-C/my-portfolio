import homeStyles from "../Components/Styles/Home.module.css";
import AboutPage from "./About";
import ComputerAnimation from "../Components/ComputerComponent/ComputerAnimation";
import { MainContext } from "../App";
import { useContext } from "react";
import ContactPage from "./Contact";
import ProjectsPage from "./Projects";

function HomePage() {
  const context = useContext(MainContext);
  const contextForChangeLanguage = context?.changeLanguage;
  const contextForChangeDayMode = context?.changeDayMode;

  return (
    <>
      <div
        id="home"
        className={
          contextForChangeDayMode
            ? homeStyles.homeParentContainerDarkMode
            : homeStyles.homeParentContainerLightMode
        }
      >
        <ComputerAnimation
          contextForChangeLanguage={contextForChangeLanguage}
        />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}

export default HomePage;
