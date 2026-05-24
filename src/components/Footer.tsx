import {LuClock5} from "react-icons/lu";
import {IoIosColorPalette} from "react-icons/io";
import {BsFullscreen} from "react-icons/bs";
import {FaStopwatch20} from "react-icons/fa6";
import {useClockContext} from "../context/ClockProvider.ts";
import TimerPop from "./TimerPop.tsx";
import {useState} from "react";
import ColorPop from "./ColorPop.tsx";

const Footer = () => {
    const  {state, dispatch} = useClockContext();

     const [timerToggle, setTimerToggle] = useState(false);
     const [colorToggle, setColorToggle] = useState(false);

    return (
        <div className="clock_menu">
            {
                colorToggle && <ColorPop/>
            }
            {
                timerToggle && <TimerPop/>
            }
            <button className="hours_btn" onClick={() => dispatch({type: "hour"})} type="button">{state.hour ? "24h" : "12h"}</button>
            <button aria-label="Open color palette" className="style_btn" onClick={() => setColorToggle((prev) => !prev)} type="button">
                <IoIosColorPalette className="style_icon"/>
            </button>
            <button aria-label="Open timer settings" className="style_btn" onClick={() => setTimerToggle((prev) => !prev)} type="button">
                <LuClock5 className="style_icon"/>
            </button>
            <button aria-label="Toggle stopwatch" className="style_btn" onClick={() => dispatch({type: "stopwatch"})} type="button">
                <FaStopwatch20 className="style_icon"/>
            </button>
            <button aria-label="Enter fullscreen" className="style_btn" onClick={() => document.documentElement.requestFullscreen()} type="button">
                <BsFullscreen className="style_icon"/>
            </button>
        </div>
    )
}

export default Footer
