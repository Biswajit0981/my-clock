import {FaPause, FaPlay, FaRotateLeft} from "react-icons/fa6";
import {useTimer} from "../hooks";
import ClockBox from "./ClockBox.tsx";


const Timer = () => {
    const {
        hours,
        minutes,
        seconds,
        pauseTimer,
        resetTimer,
        isRunning,
        unPauseTimer,
    } = useTimer();

    return (
        <div className="timer_base">
            <div className="timer_display">
                {hours !== "00" && <ClockBox mode="Hours" value={hours}/>}
                {minutes !== "00" && <ClockBox mode="Minutes" value={minutes}/>}
                <ClockBox mode="Seconds" value={seconds}/>
            </div>
            <div className="timer_actions">
                <button type="button" onClick={isRunning ? pauseTimer : unPauseTimer}
                        aria-label="Pause timer">
                    {
                        isRunning ? <FaPause aria-hidden="true"/> :
                            <FaPlay aria-hidden="true"/>
                    }
                </button>

                <button type="button" onClick={resetTimer} aria-label="Reset timer">
                    <FaRotateLeft aria-hidden="true"/>
                </button>
            </div>
        </div>
    )
}
export default Timer
