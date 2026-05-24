import {useStopWatch} from "../hooks";
import TimeLaps from "./TimeLaps.tsx";
import ClockBox from "./ClockBox.tsx";


const StopWatch = () => {
    const {
        minutes,
        seconds,
        milliseconds,
        resetStopWatch,
        captureTime,
        startStopWatch,
        pauseStopWatch,
        timeLaps,
        isRunning,
    } = useStopWatch();

    return (
        <div className="stopwatch_base">
            <div className="stopwatch_panel">
                <div className="stopwatch_display">
                    {minutes !== "00" && <ClockBox mode="Minutes" value={minutes}/>}
                    {seconds !== "00" && <ClockBox mode="Seconds" value={seconds}/>}
                    <div className="milliseconds_box">
                        <span>{milliseconds}</span>
                        <p>Milliseconds</p>
                    </div>
                </div>
                <div className="stopwatch_actions">
                    <button type="button" onClick={startStopWatch} disabled={isRunning}>
                        Start
                    </button>
                    <button type="button" onClick={pauseStopWatch} disabled={!isRunning}>
                        Stop
                    </button>
                    <button type="button" onClick={resetStopWatch}>
                        Reset
                    </button>
                    <button className="capture_btn" type="button" onClick={captureTime}>
                        Capture time
                    </button>
                </div>
            </div>
            <div className="time_laps_panel">
                <TimeLaps timeLaps={timeLaps} />
            </div>
        </div>
    )
}
export default StopWatch
