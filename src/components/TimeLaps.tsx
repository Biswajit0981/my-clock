import type {ITimeLap} from "../hooks";


type TimeLapsProps = {
    timeLaps: ITimeLap[];
}

const TimeLaps = ({timeLaps}: TimeLapsProps) => {

    return (
        <div className="time_laps">
            <h2>Time laps</h2>
            <div className="time_laps_list">
                {timeLaps.length === 0 ? (
                    <p className="empty_laps">No captured time laps</p>
                ) : (
                    timeLaps.map((lap, index) => (
                        <div className="time_lap_item" key={lap.id}>
                            <div>
                                <span className="lap_index">Lap {index + 1}</span>
                                <p>
                                    {lap.minute !== "00" && `${lap.minute}:`}
                                    {lap.second !== "00" && `${lap.second}:`}
                                    {lap.millisecond}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default TimeLaps
