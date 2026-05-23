
type NumberBoxProps = {
    value: string;
}

const NumberBox = ({value}: NumberBoxProps) =>{
    return (
        <div className="num_box" >
            <h1>{value}</h1>
        </div>
    )
}
export default NumberBox
