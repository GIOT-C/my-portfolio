import ProjectCard from "../Components/ProjectCard/ProjectCard";
import projectStyles from "../Components/Styles/Projects.module.css";
import DataAboutProjects from "../Components/DataComponent/dataAboutProjects.json";
import { MainContext } from "../App";
import { useContext } from "react";

interface DataAboutProjectsType {
  id: number;
  name: string;
  language: {
    eng: {
      about: string;
    };
    geo: {
      about: string;
    };
  };
  toolOne: string;
  toolTwo: string;
  toolThree: string;
  projectLink: string;
  repositoryLink: string;
  projectImg: string;
}

function ProjectsPage() {
  const data: DataAboutProjectsType[] = DataAboutProjects;

  const context = useContext(MainContext);
  const contextForChangeLanguage = context?.changeLanguage;
  const contextForChangeDayMode = context?.changeDayMode;
  return (
    <>
      <div className={projectStyles.projectsParentContainer}>
        <h1
          className={
            contextForChangeDayMode
              ? projectStyles.projectsHeaderDarkMode
              : projectStyles.projectsHeaderLightMode
          }
        >
          {contextForChangeLanguage ? "PROJECTS" : "პროექტები"}
        </h1>
        {data.map((projects) => (
          <div key={projects.id}>
            <ProjectCard
              contextForChangeLanguage={contextForChangeLanguage}
              contextForChangeDayMode={contextForChangeDayMode}
              projectName={projects.name}
              projectImg={projects.projectImg}
              aboutProjectInEnglish={projects.language.eng.about}
              aboutProjectInGeorgian={projects.language.geo.about}
              toolOne={projects.toolOne}
              toolTwo={projects.toolTwo}
              toolThree={projects.toolThree}
              projectLink={projects.projectLink}
              repositoryLink={projects.repositoryLink}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectsPage;
