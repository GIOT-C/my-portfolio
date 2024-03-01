import { useEffect, useState } from "react";
import styles from "../Styles/TimeComponent.module.css";

function TimeComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const currentDate = currentTime;
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  return (
    <>
      <div className={styles.TimeComponentContainer}>
        <p className={styles.greeting}>
          {currentHour >= 5 && currentHour < 12
            ? "GOOD MORNING"
            : currentHour >= 12 && currentHour < 17
            ? "GOOD AFTERNOON"
            : currentHour >= 17 && currentHour < 24
            ? "GOOD EVENING"
            : "GOOD NIGHT"}
        </p>

        <p>
          {currentHour < 10 ? `0${currentHour}` : currentHour}:
          {currentMinute < 10 ? `0${currentMinute}` : currentMinute}
        </p>
      </div>
    </>
  );
}

export default TimeComponent;
