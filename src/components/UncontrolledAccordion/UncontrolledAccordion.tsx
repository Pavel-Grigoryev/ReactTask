import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsValue = {
    titleValue: string;
}

export const UncontrolledAccordion = React.memo(
    function UncontrolledAccordion(props: AccordionPropsValue) {

        console.log("UncontrolledAccordion rendering");

        //let [collapsed, setCollapsed] = useState(false);
        let [state, dispatch] = useReducer(reducer, {collapsed: false});


        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} setCol={() => {setCollapsed(!collapsed)}}/>*/}
                <AccordionTitle title={props.titleValue} setCol={() => {
                    dispatch({type: TOGGLE_COLLAPSED})
                }}/>
                {!state.collapsed && <AccordionBody/>}
            </div>
        );

    }
)



type AccordionTitlePropsValue = {
    title: string
    setCol: () => void
}


function AccordionTitle(props: AccordionTitlePropsValue) {
    console.log("UncontrolledAccordionTitle rendering");
    return <><h3 onClick={() => props.setCol()}>{props.title}</h3></>
}

function AccordionBody() {
    console.log("UncontrolledAccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>

    )
}
