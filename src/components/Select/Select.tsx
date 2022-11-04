import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemType} from "../Accordion/Accordion";
import s from './select.module.css'
import {CitiesType} from "../../stories/CitiesSelectExample.stories";

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[] | CitiesType[]
}

export const Select = React.memo((props: SelectPropsType  ) => {
    console.log('Select rendering');
    const [active, setActive] = useState(false);
    const [howeredElementValue, setHoweredElementValue] = useState(props.value);
    const selectedItem = props.items.find(el => el.value === props.value);
    const hoveredItem = props.items.find(el => el.value === howeredElementValue);
    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    useEffect(() => {
        setHoweredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' ) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === howeredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>{props.items.map(i =>
                        <div key={i.value}
                             onMouseEnter={() => {setHoweredElementValue(i.value)}}
                             onClick={() => {onItemClick(i.value)}}
                             className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                        >
                            {i.title}
                        </div>)}</div>}
            </div>
        </>

    );
});

