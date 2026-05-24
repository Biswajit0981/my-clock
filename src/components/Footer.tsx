
import {LuClock5} from "react-icons/lu";
import {IoIosColorPalette} from "react-icons/io";
import {BsFullscreen} from "react-icons/bs";
import { FaStopwatch20 } from "react-icons/fa6";
import {useClockContext} from "../context/ClockProvider.ts";
const Footer = () => {
    const {state, dispatch} = useClockContext();

    return (
        <div className="clock_menu">
            <button className="hours_btn" onClick={() => dispatch({type: "hour"})}>{state.hour ? "24h" : "12h"}</button>
            <button className="style_btn">
                <IoIosColorPalette className="text-white text-4xl"/>
            </button>
            <button className="style_btn ">
                <LuClock5 className="text-white text-4xl"/>
            </button>
            <button className="style_btn ">
                <FaStopwatch20 className="text-white text-4xl"/>
            </button>
            <button className="style_btn ">
                <BsFullscreen className="text-white text-4xl"/>
            </button>
        </div>
    )
}

export default Footer
