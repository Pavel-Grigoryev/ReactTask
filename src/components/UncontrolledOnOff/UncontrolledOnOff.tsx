import React, {useState} from "react";

type PropsTYpe = {
    on?: boolean
}

const UncontrolledOnOff = React.memo(
    function UncontrolledOnOff(props: PropsTYpe) {
        console.log('UncontrolledOnOff rendered')

        let [on, setOn] = useState(props.on ? props.on : false);

        const onStyle = {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            padding: "2px",
            backgroundColor: on ? "green" : "white",
        }

        const offStyle = {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            padding: "2px",
            marginLeft: "5px",
            backgroundColor: on ? "white" : "grey",
        }



        const indicatorStyle = {
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            border: "1px solid black",
            display: "inline-block",
            marginLeft: "5px",
            backgroundColor: on ? "green" : "yellow",
        };

        const onClicked = () => {
            setOn(true)
        };

        const ofClicked = () => {
            setOn(false)
        };

        return (
            <div>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick={ofClicked}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        )
    }
)

export default UncontrolledOnOff;