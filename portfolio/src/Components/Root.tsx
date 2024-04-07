import { useContext, useState } from "react";
import rootStyles from "../Components/Styles/Root.module.css";
import { Outlet } from "react-router-dom";
import { MainContext } from "../App";
import English_Flag from "../Images/Flag_of_the_United_Kingdom.webp";
import Georgia_Flag from "../Images/Flag_of_Georgia.webp";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import UseWidowWidth from "./Hooks/UseWindowWidth";
function Root() {
  const [mobileAndTabletScreen, setMobileAndTabletScreen] =
    useState<boolean>(false);
  const context = useContext(MainContext);
  const contextForChangeLanguage = context?.changeLanguage;
  const contextForChangeDayMode = context?.changeDayMode;
  const width = UseWidowWidth();

  const handleNavigationClick = () => {
    setMobileAndTabletScreen(!mobileAndTabletScreen);
  };

  const handleChangeLanguage = (language: boolean) => {
    context?.setChangeLanguage(language);
    setMobileAndTabletScreen(!mobileAndTabletScreen);
  };

  const handleChangeDayMode = (mode: boolean) => {
    context?.setChangeDayMode(mode);
    setMobileAndTabletScreen(!mobileAndTabletScreen);
  };

  const handleMenuBar = () => {
    setMobileAndTabletScreen(!mobileAndTabletScreen);
  };

  return (
    <>
      <header>
        <nav
          className={
            contextForChangeDayMode
              ? rootStyles.navDarkMode
              : rootStyles.navLightMode
          }
        >
          <div className={rootStyles.siteNameContainer}>
            <h1>
              <a
                href="#home"
                className={
                  contextForChangeDayMode
                    ? rootStyles.siteNameDarkMode
                    : rootStyles.siteNameLightMode
                }
              >
                <img className={rootStyles.logoImage} src={logo} alt="logo" />
              </a>
            </h1>
          </div>

          <div
            className={`${
              width <= 768 && !mobileAndTabletScreen
                ? rootStyles.widthIsLessthan768
                : ""
            } 
  ${
    mobileAndTabletScreen && contextForChangeDayMode
      ? rootStyles.mobileAndTabletScreenDarkMode
      : rootStyles.mobileAndTabletScreenLightMode
  }`}
          >
            <div className={rootStyles.navContainer}>
              <a
                href="#home"
                className={`${rootStyles.navigation}
                  ${
                    contextForChangeDayMode
                      ? rootStyles.navigationDarkMode
                      : rootStyles.navigationLightMode
                  }
                  `}
                onClick={() => handleNavigationClick()}
              >
                {contextForChangeLanguage ? "HOME" : "მთავარი"}
              </a>
              <a
                href="#about"
                className={`${rootStyles.navigation} 
                  ${
                    contextForChangeDayMode
                      ? rootStyles.navigationDarkMode
                      : rootStyles.navigationLightMode
                  }
                  `}
                onClick={() => handleNavigationClick()}
              >
                {contextForChangeLanguage ? "ABOUT" : "შესახებ"}
              </a>
              <a
                href="#projects"
                className={`${rootStyles.navigation}
                  ${
                    contextForChangeDayMode
                      ? rootStyles.navigationDarkMode
                      : rootStyles.navigationLightMode
                  }
                  `}
                onClick={() => handleNavigationClick()}
              >
                {contextForChangeLanguage ? "PROJECTS" : "პროექტები"}
              </a>
              <a
                href="#contact"
                className={`${rootStyles.navigation}
                  ${
                    contextForChangeDayMode
                      ? rootStyles.navigationDarkMode
                      : rootStyles.navigationLightMode
                  }
                  `}
                onClick={() => handleNavigationClick()}
              >
                {contextForChangeLanguage ? "CONTACT" : "კონტაქტი"}
              </a>
              <div className={rootStyles.preferencesContainer}>
                <div
                  className={rootStyles.flagsContainer}
                  onClick={() =>
                    handleChangeLanguage(!contextForChangeLanguage)
                  }
                >
                  {contextForChangeLanguage ? (
                    <img
                      src={Georgia_Flag}
                      alt="GeorgianFlag"
                      className={rootStyles.flag}
                    />
                  ) : (
                    <img
                      src={English_Flag}
                      alt="EnglishFlag"
                      className={rootStyles.flag}
                    />
                  )}
                </div>

                <div
                  className={rootStyles.modeContainer}
                  onClick={() => handleChangeDayMode(!contextForChangeDayMode)}
                >
                  {contextForChangeDayMode ? (
                    <FontAwesomeIcon
                      icon={faSun}
                      className={rootStyles.faSun}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faMoon}
                      className={rootStyles.faMoon}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              contextForChangeDayMode
                ? rootStyles.menuBarContainerDarkMode
                : rootStyles.menuBarContainerLightMode
            }
          >
            {!mobileAndTabletScreen ? (
              <FontAwesomeIcon
                onClick={handleMenuBar}
                icon={faBars}
                className={rootStyles.faBars}
              />
            ) : (
              <FontAwesomeIcon
                onClick={handleMenuBar}
                icon={faXmark}
                className={rootStyles.faXmark}
              />
            )}
          </div>
        </nav>
      </header>

      <div
        className={`${
          contextForChangeDayMode
            ? rootStyles.bodyDarkMode
            : rootStyles.bodyLightMode
        }
            ${mobileAndTabletScreen ? rootStyles.bluredBody : ""}
            `}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Root;
