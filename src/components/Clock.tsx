import {useClock} from "../hooks";
import ClockBox from "./ClockBox.tsx";

const Clock = () => {
    const [clock] = useClock();
    if (!clock) {
        return <div className="clock_container">
            <h1 className="text-4xl font-blod text-white">Your clock is cooking....</h1>
        </div>;
    }
    return (
        <div className="clock_base">
            <ClockBox mode={clock.ampm} value={clock?.hours}/>
            <ClockBox value={clock?.minutes}/>
        </div>
    )
}

export default Clock
