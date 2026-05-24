import {type Action, ClockContextSetup, type State} from "./ClockProvider.ts";
import {type ReactNode, useReducer} from "react";

const initialState: State = {
    hour: false,
    stopWatch: false,
    timer: false,
    timerInput: 5,
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "hour":
            return {...state, hour: !state.hour}
        case "stopwatch":
            return {...state, stopWatch: !state.stopWatch}
        case "timer":
            return {...state, timer: !state.timer}
        case "timer:input":
            return {...state, timerInput: action.payload}
        default:
            return state;
    }
}

const ClockContext = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ClockContextSetup.Provider value={{state, dispatch}}>{children}</ClockContextSetup.Provider>
    )
}

export default ClockContext;
