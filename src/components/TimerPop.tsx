import {useClockContext} from "../context/ClockProvider.ts";

const TimerPop = () => {
    const {state, dispatch} = useClockContext();

    return (
        <div className="timer_pop" role="dialog" aria-label="Timer settings">
            <div className="timer_pop_header">
                <label className="timer_toggle" aria-label="Toggle timer">
                    <input type="checkbox" checked={state.timer} onChange={() => dispatch({type: "timer"})}/>
                    <span></span>
                </label>
                <h2>Timer</h2>
            </div>
            <div className="timer_field">
                <label htmlFor="timer-duration">Timer Duration (minutes):</label>
                <input id="timer-duration" type="number" defaultValue={state.timerInput} value={state.timerInput} min={1} onChange={(e) => {
                    dispatch({type: "timer:input", payload: Number(e.target.value)});
                }}/>
            </div>
        </div>
    )
}
export default TimerPop
