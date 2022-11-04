import React from "react";


export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsValue = {
    titleValue: string
    accordionCollapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * Optional color of header text
     */
    color?: string
}

const AccordionSecret = (props: AccordionPropsValue) => {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            color={props.color}
            />
            {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

export const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsValue = {
    title: string;
    onChange: () => void
    color?: string
}

const AccordionTitle = React.memo(
    function AccordionTitle(props: AccordionTitlePropsValue) {
        console.log("AccordionTitle rendering");
        return <><h3 onClick={(e) => props.onChange()}
                     style={{color: props.color ? props.color : 'black'}}
        >
            {props.title}
        </h3></>
    }
)

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(
    function AccordionBody(props: AccordionBodyPropsType) {
        console.log("AccordionBody rendering");
        return (
            <ul>
                {props.items.map((item, index) => {
                    return <li onClick={() => props.onClick(item.value)}
                               key={index}>
                        {item.title}
                    </li>;
                })
                }
            </ul>

        )
    }
)


