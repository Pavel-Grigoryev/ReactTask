import React, {useState} from 'react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
    };
const callback = action('on or off clicked')
export const OnMode = () => <OnOff setOn={callback} on={true}/>
export const OffMode = () => <OnOff setOn={callback} on={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(false)

    return <OnOff setOn={setValue} on={value}/>
}


