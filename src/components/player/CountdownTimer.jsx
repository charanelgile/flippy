import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [mm, setMM] = useState(1);
  const [ss, setSS] = useState(1);

  const [countdown, setCountdown] = useState(
    (mm > 9 ? mm : `0${mm}`) + ":" + (ss > 9 ? ss : `0${ss}`)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (mm > 0 && ss > 0) {
        setSS(ss - 1);
      } else if (mm > 0 && ss <= 0) {
        setSS(59);
        setMM(mm - 1);
      } else if (ss > 0) {
        setSS(ss - 1);
      } else {
        console.log("Time's Up!");
        clearInterval(interval);
      }

      // Display 0 at the beginning of a number when it is less than 10
      setCountdown((mm > 9 ? mm : `0${mm}`) + ":" + (ss > 9 ? ss : `0${ss}`));
    }, 1000);

    return () => clearInterval(interval);
  }, [ss, mm]);

  return <span className="countdownTimer">{countdown}</span>;
};

export default CountdownTimer;
