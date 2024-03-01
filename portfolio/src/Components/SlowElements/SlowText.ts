import { useEffect, useState } from "react";

interface SlowTextProps {
  text: string;
}

const SlowText: React.FC<SlowTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let currentCharacterIndex = 0;

    setDisplayText("");

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentCharacterIndex < text.length) {
          return prevText + text[currentCharacterIndex++];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return displayText;
};

export default SlowText;
