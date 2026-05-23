import {useState} from "react";
import {LuClock5} from "react-icons/lu";
import {IoIosColorPalette} from "react-icons/io";
import {BsFullscreen} from "react-icons/bs";

const Footer = () => {
    const [type, setType] = useState<boolean>(false);

    return (
        <div className="clock_menu">
            <button className="hours_btn" onClick={() => setType((prev) => !prev)}>{type ? "24h" : "12h"}</button>
            <button className="style_btn">
                <IoIosColorPalette className="text-white text-4xl"/>
            </button>
            <button className="style_btn ">
                <LuClock5 className="text-white text-4xl"/>
            </button>
            <button className="style_btn ">
                <BsFullscreen className="text-white text-4xl"/>
            </button>
        </div>
    )
}

export default Footer
