import { useEffect, useState } from "react";
import { getFlag } from "./manager";

export default function Flag() {
  const [flag, setFlag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [typedString, setTypedString] = useState("");

  useEffect(() => {
    getFlag()
      .then((response) => {
        setFlag(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (flag && !isLoading) {
      setTimeout(() => {
        setTypedString("");
        for (let i = 0; i < flag.length; i++) {
          setTimeout(() => {
            setTypedString((prevTypedString) => prevTypedString + flag[i]);
          }, 500 * i);
        }
      }, 500);
    }
  }, [flag, isLoading]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      const cursor = document.getElementById("cursor");
      if (cursor.style.visibility === "visible") {
        cursor.style.visibility = "hidden";
      } else {
        cursor.style.visibility = "visible";
      }
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="App">
      <p>
        {typedString}
        <span id="cursor">_</span>
      </p>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
