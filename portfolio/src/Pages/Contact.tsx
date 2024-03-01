import contactStyles from "../Components/Styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import GeoLocationApi from "../Components/APIs/GeoLocationApi";
import { useContext } from "react";
import { MainContext } from "../App";

function ContactPage() {
  const context = useContext(MainContext);
  const contextForChangeLanguage = context?.changeLanguage;
  const contextForChangeDayMode = context?.changeDayMode;
  return (
    <>
      <div
        className={
          contextForChangeDayMode
            ? contactStyles.contactParentContainerDarkMode
            : contactStyles.contactParentContainerLightMode
        }
      >
        <div>
          <div className={contactStyles.contact}>
            <div className={contactStyles.emailContainer}>
              <span className={contactStyles.emailHeader}>
                {contextForChangeLanguage
                  ? "EMAIL/PHONE NUMBER"
                  : "ელ.ფოსტა/ტელეფონის ნომერი"}
              </span>
              <p className={contactStyles.email}>giootarashvili77@gmail.com</p>
              <p>+995 511 41 09 03</p>
            </div>

            <div className={contactStyles.socialNetworksContainer}>
              <span className={contactStyles.socialNetworksHeader}>
                {contextForChangeLanguage
                  ? "SOCIAL NETWORKS"
                  : "სოციალური ქსელები"}
              </span>
              <div className={contactStyles.socialNetworks}>
                <a target="_blank" href="https://github.com/GIOT-C">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={`
                     ${contactStyles.faGithub}
                     ${
                       contextForChangeDayMode
                         ? contactStyles.faGithubDarkMode
                         : contactStyles.faGithubLightMode
                     }`}
                  />
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/gio.otarashvili.75/"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={`${contactStyles.faFacebook}
                    ${
                      contextForChangeDayMode
                        ? contactStyles.faFacebookDarkMode
                        : contactStyles.faFacebookLightMode
                    }`}
                  />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gio-otarashvili-ba2175271/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={`${contactStyles.faLinkedin}
                     ${
                       contextForChangeDayMode
                         ? contactStyles.faLinkedinDarkMode
                         : contactStyles.faLinkedinLightMode
                     }`}
                  />
                </a>

                <a
                  target="_blank"
                  href="https://discord.com/channels/GIOT-C#7776"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className={`${contactStyles.faDiscord}
                     ${
                       contextForChangeDayMode
                         ? contactStyles.faDiscordDarkMode
                         : contactStyles.faDiscordLightMode
                     }`}
                  />
                </a>
              </div>
            </div>
            <GeoLocationApi />
          </div>

          <div className={contactStyles.copyright}>
            <FontAwesomeIcon
              icon={faCopyright}
              className={contactStyles.faCopyright}
            />
            <span>GIORGI OTARASHVILI</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
