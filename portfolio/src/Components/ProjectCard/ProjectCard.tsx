import CardStyles from "../Styles/ProjectCard.module.css";

interface ProjectCardProps {
  contextForChangeLanguage: boolean | undefined;
  contextForChangeDayMode: boolean | undefined;
  projectImg: string;
  projectName: string;
  aboutProjectInEnglish: string;
  aboutProjectInGeorgian: string;
  toolOne: string;
  toolTwo: string;
  toolThree: string;
  projectLink: string;
  repositoryLink: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <>
      <div className={CardStyles.projectCardParentContainer}>
        <div className={CardStyles.projectCard}>
          <div
            className={
              props.contextForChangeDayMode
                ? CardStyles.cardDarkMode
                : CardStyles.cardLightMode
            }
          >
            <img
              className={CardStyles.projectImg}
              src={props.projectImg}
              alt="projectImg"
            />
            <div className={CardStyles.infoContainer}>
              <h3 className={CardStyles.projectName}>{props.projectName}</h3>
              <p className={CardStyles.projectDescription}>
                {props.contextForChangeLanguage
                  ? props.aboutProjectInEnglish
                  : props.aboutProjectInGeorgian}
              </p>
              <div className={CardStyles.toolsContainer}>
                <div className={CardStyles.tool}>{props.toolOne}</div>
                <div className={CardStyles.tool}>{props.toolTwo}</div>
                <div className={CardStyles.tool}>{props.toolThree}</div>
              </div>

              <div className={CardStyles.buttonContainer}>
                <button className={CardStyles.projectButton}>
                  <a target="_blank" href={props.projectLink}>
                    <span>
                      {props.contextForChangeLanguage ? "PROJECT" : "პროექტი"}
                    </span>{" "}
                  </a>
                </button>
                <button className={CardStyles.projectButton}>
                  <a target="_blank" href={props.repositoryLink}>
                    <span>
                      {props.contextForChangeLanguage
                        ? "REPOSITORY"
                        : "რეპოზიტორი"}
                    </span>{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
