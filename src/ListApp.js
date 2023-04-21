import { useEffect, useState } from "react";
import { getFlag } from "./manager";

const ListApp = () => {
  const [flag, setFlag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedChars, setDisplayedChars] = useState([]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      getFlag()
        .then((response) => {
          setFlag(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 4500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && flag) {
      let timeout = setTimeout(() => {
        if (displayedChars.length < flag.length) {
          setDisplayedChars((prevDisplayedChars) => [
            ...prevDisplayedChars,
            flag[prevDisplayedChars.length]
          ]);
        } else {
          clearTimeout(timeout);
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [flag, isLoading, displayedChars]);

  return (
    <div className="App">
      <ul style={{ listStyle: "none" }}>
        {displayedChars.map((char, index) => (
          <li key={index}>
            <>{char === " " ? <br /> : <span>🚩 {char}</span>}</>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListApp;
