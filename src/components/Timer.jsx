import { useEffect, useState } from "react";
import { unstable_batchedUpdates } from 'react-dom';

const Timer = ({ setShowResult, setGameOver, time }) => {
  const { initialMinute, initialSeconds } = time
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setShowResult(true);
      setGameOver(true);
    }
    const timer = setInterval(
      () => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer)
          } else {
            unstable_batchedUpdates(() => {
              setSeconds(59);
              setMinutes(minutes - 1);
            })
          }
        }
      }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <>
      {minutes === 0 && seconds === 0
        ? null
        : <h3 style={{ color: "#b8bcff" }}>Time Left :  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
      }
    </>
  )
}

export default Timer
