import NumberBox from "./NumberBox.tsx";
import Mode from "./Mode.tsx";
import type {FC} from "react";

type IProps = {
    mode?: string;
    value:string;
}
const ClockBox:FC<IProps> = ({mode, value}) => {

    return (
        <div className="clock_box">
            {mode && <Mode mode={mode}/>}
            <NumberBox value={value}/>
        </div>
    )
}
export default ClockBox
