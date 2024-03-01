import styles from "../Styles/ComputerAnimation.module.css";
import SlowText from "../SlowElements/SlowText";
import { useEffect, useState } from "react";
import dataQuotes from "../DataComponent/dataQuotes.json";
import TimeComponent from "../APIs/TimeComponent";

interface DataQuotesType {
  id: number;
  language: {
    eng: {
      quote: string;
      author: string;
    };
    geo: {
      quote: string;
      author: string;
    };
  };
}

function ComputerAnimation(props: any) {
  const data: DataQuotesType[] = dataQuotes;
  const [dataQuotesState, setDataQuotesState] = useState<DataQuotesType | null>(
    null
  );
  const [showResetButton, setShowResetButton] = useState<number>(8);
  const [resetQuotes, setResetQuotes] = useState<boolean>(false);

  useEffect(() => {
    generateRandomQuote();
  }, [resetQuotes]);

  const generateRandomQuote = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setDataQuotesState(data[randomIndex]);
    }
  };

  const handleResetClick = () => {
    setResetQuotes((prevReset) => !prevReset);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowResetButton((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount <= 0) {
          clearInterval(intervalId);
        }
        return newCount;
      });
    }, 1000);

    if (dataQuotesState) {
      setShowResetButton(8);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [resetQuotes]);

  const quoteInEnglish = dataQuotesState?.language.eng.quote || "";
  const quoteInGeorgian = dataQuotesState?.language.geo.quote || "";
  const authorNameInEnglish = dataQuotesState?.language.eng.author || "";
  const authorNameInGeorgian = dataQuotesState?.language.geo.author || "";
  const combinedEnglishText = `"${quoteInEnglish}" -- ${authorNameInEnglish}`;
  const combinedGeorgianText = `"${quoteInGeorgian}" -- ${authorNameInGeorgian}`;

  return (
    <>
      <div className={styles.computerContainer}>
        <div className={styles.computerComponents}>
          <div className={styles.camera}></div>
          <div className={styles.componentOne_Frame}>
            <TimeComponent />
            <div className={styles.quotes}>
              <SlowText
                text={
                  props.contextForChangeLanguage
                    ? combinedEnglishText
                    : combinedGeorgianText
                }
              />
            </div>
            {showResetButton === 0 ? (
              <button className={styles.resetButton} onClick={handleResetClick}>
                {props.contextForChangeLanguage ? "RESET" : "გადატვირთვა"}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className={styles.componentTwo_Keyboard}></div>
          <div className={styles.componentThree_ButtonsContainer}>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.bigButton}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComputerAnimation;
