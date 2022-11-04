import React from "react";


type PropsTYpe = {
    on?: boolean
    setOn: (value: boolean) => void
}

function OnOff(props: PropsTYpe) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "grey",
    }



    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "yellow",
    };

    const onClicked = () => {
        props.setOn(true)
    };
    const ofClicked = () => {
        props.setOn(false)
    };

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={ofClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;