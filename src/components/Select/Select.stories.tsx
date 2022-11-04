import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Select, SelectPropsType} from "./Select";


export default {
    title: 'components/Select',
    component: Select
};

const callback = action('accordion mode change event fired');
const callbackItem = action('item was clicked');

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>;

export const WithValue = Template.bind({});
WithValue.args = {
    value: '2',
    onChange: action('Value changed'),
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Gomel'},
        {value: '3', title: 'Rakow'},
    ]
}

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    onChange: action('Value changed'),
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Gomel'},
        {value: '3', title: 'Rakow'},
    ]
}

export const WithValueMode:Story<SelectPropsType> = (args) => {
    const [parentValue, setParentValue] = useState('2');
    return <Select value={parentValue} onChange={setParentValue} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Gomel'},
        {value: '3', title: 'Rakow'},
    ]}/>
}

export const WithoutValueMode:Story<SelectPropsType> = (args) => {
    const [parentValue, setParentValue] = useState(null);
    return <Select value={parentValue} onChange={setParentValue} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Gomel'},
        {value: '3', title: 'Rakow'},
    ]}/>
}








