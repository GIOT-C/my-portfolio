import aboutStyles from "../Components/Styles/About.module.css";
import dataAboutMe from "../Components/DataComponent/dataAboutMe.json";
import { MainContext } from "../App";
import { useContext } from "react";

interface DataAboutMeType {
  id: number;
  language: {
    eng: {
      textOne: string;
      textTwo: string;
      textThree: string;
    };
    geo: {
      textOne: string;
      textTwo: string;
      textThree: string;
    };
  };
}

function AboutPage() {
  const data: DataAboutMeType[] = dataAboutMe;
  const context = useContext(MainContext);
  const contextForChangeLanguage = context?.changeLanguage;
  const contextForChangeDayMode = context?.changeDayMode;

  const [dataItem] = data;
  const {
    language: { eng, geo },
  } = dataItem;
  const {
    textOne: dataTextOneInEnglish,
    textTwo: dataTextTwoInEnglish,
    textThree: dataTextThreeInEnglish,
  } = eng;
  const {
    textOne: dataTextOneInGeorgian,
    textTwo: dataTextTwoInGeorgian,
    textThree: dataTextThreeInGeorgian,
  } = geo;

  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "Git",
    "Github",
    "Javascript",
    "React",
    "Typescript",
    "Bootstrap",
    "Redux Toolkit",
  ];

  return (
    <>
      <div
        className={
          contextForChangeDayMode
            ? aboutStyles.aboutParentContainerDarkMode
            : aboutStyles.aboutParentContainerLightMode
        }
      >
        <h1 className={aboutStyles.aboutHeader}>
          {contextForChangeLanguage ? "ABOUT ME" : "ჩემს შესახებ"}
        </h1>
        <div className={aboutStyles.aboutChildContainer}>
          <div className={aboutStyles.aboutMe}>
            <p className={aboutStyles.textOne}>
              {contextForChangeLanguage
                ? dataTextOneInEnglish
                : dataTextOneInGeorgian}
            </p>
            <p className={aboutStyles.textTwo}>
              {contextForChangeLanguage
                ? dataTextTwoInEnglish
                : dataTextTwoInGeorgian}
            </p>
            <p className={aboutStyles.textThree}>
              {contextForChangeLanguage
                ? dataTextThreeInEnglish
                : dataTextThreeInGeorgian}
            </p>
          </div>
          <div className={aboutStyles.mySkillsMainContainer}>
            <h2 className={aboutStyles.skillsHeader}>
              {contextForChangeLanguage ? "Skills" : "უნარები"}
            </h2>
            <div className={aboutStyles.mySkills}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={
                    contextForChangeDayMode
                      ? aboutStyles.skillDarkMode
                      : aboutStyles.skillLightMode
                  }
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
