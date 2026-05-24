import {useClock} from "../hooks";
import ClockBox from "./ClockBox.tsx";

const Clock = () => {
    const [clock] = useClock();
    if (!clock) {
        return null;
    }
    return (
        <div className="clock_base">
            <ClockBox mode={clock.ampm} value={clock?.hours}/>
            <ClockBox value={clock?.minutes}/>
        </div>
    )
}

export default Clock
