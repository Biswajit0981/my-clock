import {useClockContext} from "../context/ClockProvider.ts";
import {useEffect, useRef, useState} from "react";

type IClock = {
    ampm: string;
    hours: string;
    minutes: string;
}

export function useClock() {
    const {state: {hour}} = useClockContext();
    const [clock, setClock] = useState<IClock>();

    useEffect(() => {
        const id = setInterval(() => {
            const date = new Date();
            const hour24 = date.getHours();
            const hour12 = hour24 % 12 || 12;
            const minute = date.getMinutes();

            const ampm = hour24 >= 12 ? "PM" : "AM";
            const clock: IClock = {
                ampm,
                hours: hour ? String(hour24).padStart(2, "0") : String(hour12).padStart(2, "0"),
                minutes: String(minute).padStart(2, "0")
            }

            setClock(clock);
        }, 1000);
        return () => clearInterval(id)
    }, [hour]);

    return [clock]
}

export interface ITimeLap {
    id: string;
    minute: string;
    second: string;
    millisecond: string;
}

interface IUseStopWatchReturn {
    minutes: string;
    seconds: string;
    milliseconds: string;
    isRunning: boolean;

    startStopWatch: () => void;
    pauseStopWatch: () => void;
    resetStopWatch: () => void;
    captureTime: () => void;

    timeLaps: ITimeLap[];
}

export function useStopWatch(): IUseStopWatchReturn {
    const [isRunning, setIsRunning] =
        useState<boolean>(false);

    const [timeLaps, setTimeLaps] =
        useState<ITimeLap[]>([]);

    const [time, setTime] =
        useState<number>(0);

    // Animation frame id
    const animationRef =
        useRef<number | null>(null);

    // Previous timestamp
    const previousTimeRef =
        useRef<number | null>(null);

    function updateTime(currentTime: number) {
        if (previousTimeRef.current !== null) {
            const delta =
                currentTime -
                previousTimeRef.current;

            setTime((prev) => prev + delta);
        }

        previousTimeRef.current = currentTime;

        animationRef.current =
            requestAnimationFrame(updateTime);
    }

    useEffect(() => {
        if (isRunning) {
            animationRef.current =
                requestAnimationFrame(updateTime);
        }

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(
                    animationRef.current
                );
            }

            previousTimeRef.current = null;
        };
    }, [isRunning]);

    const minutes = String(
        Math.floor(time / 60000)
    ).padStart(2, "0");

    const seconds = String(
        Math.floor((time % 60000) / 1000)
    ).padStart(2, "0");

    const milliseconds = String(
        Math.floor((time % 1000) / 10)
    ).padStart(2, "0");

    function captureTime() {
        const id = Date.now().toString();

        const lap: ITimeLap = {
            id,
            minute: minutes,
            second: seconds,
            millisecond: milliseconds,
        };

        setTimeLaps((prev) => [...prev, lap]);
    }

    function resetStopWatch() {
        setTime(0);
        setTimeLaps([]);
        setIsRunning(false);
    }

    function startStopWatch() {
        setIsRunning(true);
    }

    function pauseStopWatch() {
        setIsRunning(false);
    }

    return {
        minutes,
        seconds,
        milliseconds,
        isRunning,
        startStopWatch,
        pauseStopWatch,
        resetStopWatch,
        captureTime,
        timeLaps,
    };
}


interface IUseTimerReturn {
    hours: string;
    minutes: string;
    seconds: string;

    inputMinutes: number;
    pauseTimer: () => void;
    unPauseTimer: () => void;
    resetTimer: () => void;

    isRunning: boolean;
}

export function useTimer(): IUseTimerReturn {
    const {state, dispatch} = useClockContext();
    const [time, setTime] =
        useState<number>(() => Math.max(0, state.timerInput) * 60);

    const [isRunning, setIsRunning] =
        useState<boolean>(true);

    const intervalRef =
        useRef<number | null>(null);

    useEffect(() => {

        if (isRunning) {

            intervalRef.current =
                window.setInterval(() => {

                    setTime((prev) => {

                        if (prev <= 1) {
                            clearInterval(
                                intervalRef.current!
                            );

                            setIsRunning(false);

                            return 0;
                        }

                        return prev - 1;
                    });

                }, 1000);
        }

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };

    }, [isRunning]);


    function pauseTimer() {
        setIsRunning(false);
    }

    function unPauseTimer() {
        setIsRunning(true);
    }

    function resetTimer() {
        setTime(5*60);
        dispatch({type: "timer:input", payload: 5});
        dispatch({type:"timer"})
        setIsRunning(false);
    }

    const hours = String(
        Math.floor(time / 3600)
    ).padStart(2, "0");

    const minutes = String(
        Math.floor((time % 3600) / 60)
    ).padStart(2, "0");

    const seconds = String(
        time % 60
    ).padStart(2, "0");

    return {
        hours,
        minutes,
        seconds,
        inputMinutes: state.timerInput,
        pauseTimer,
        resetTimer,
        isRunning,
        unPauseTimer
    };
}
