import React from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
    };
const callback = action('on or off clicked')
export const OnMode = () => <UncontrolledOnOff on={true}/>
export const OffMode = () => <UncontrolledOnOff on={false}/>



