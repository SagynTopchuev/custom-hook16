import { useTimer } from "../../custom-hooks/customTimer/timer";
import styled from "styled-components";
export const TimerComponent = () => {
  const initialSeconds = 121;
  const { seconds, isActive, startTimer, stopTimer, resetTimer } =
    useTimer(initialSeconds);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Container>
      <h1>Timer</h1>
      <div>{formatTime(seconds)}</div>
      {isActive ? (
        <button onClick={stopTimer} disabled={!isActive}>
          Stop
        </button>
      ) : (
        <button onClick={startTimer} disabled={isActive}>
          Start
        </button>
      )}

      <button onClick={resetTimer}>Reset</button>
    </Container>
  );
};

const Container = styled.div`
  margin: 100px 0;
  h1 {
    color: aqua;
  }
  div {
    font-size: 30px;
    width: 100px;
    height: 70px;
    border: 2px dashed greenyellow;
    border-radius: 40%;
    color: greenyellow;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  button {
    width: 70px;
    margin-left: 20px;
    background-color: aqua;
    border-radius: 20px;
    border: none;
  }
`;
