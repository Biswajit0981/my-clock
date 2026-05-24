import {createContext, type Dispatch, useContext} from "react";

export type Action = {
    type: "hour"
} | { type: "stopwatch" } | { type: "timer" } | { type: "timer:input", payload: number };

export type State = {
    hour: boolean
    stopWatch: boolean
    timer: boolean
    timerInput: number
}

export type ContextType = {
    state: State,
    dispatch: Dispatch<Action>
}

export const ClockContextSetup = createContext<ContextType | undefined>(undefined);

export const useClockContext = () => {
    const state = useContext(ClockContextSetup);

    if (!state) {
        throw new Error("useClockContext must be used within ClockProvider");
    }

    return state;
}