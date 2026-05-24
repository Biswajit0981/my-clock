import Clock from "./Clock.tsx";
import {useClockContext} from "../context/ClockProvider.ts";
import StopWatch from "./StopWatch.tsx";
import Timer from "./Timer.tsx";


const ClockContainer = () => {
    const {state} = useClockContext();

    if (state && state.timer) {
        return (
            <div className="clock_container">
                <Timer/>
            </div>
        )
    }

    if (state  && state.stopWatch) {
        return (
            <div className="clock_container">
                <StopWatch/>
            </div>
        )
    }

    return (
        <div className="clock_container">
            <Clock/>
        </div>
    )
}
export default ClockContainer
