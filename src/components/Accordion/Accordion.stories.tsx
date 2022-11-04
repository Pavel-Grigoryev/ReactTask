import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsValue} from "./Accordion";
import {Story} from "@storybook/react";

const EventsCategory = {
    table: {
        category: 'Events'
    }
}

const ColorCategory = {
    table: {
        category: 'Color'
    }
}

const GetCategObj = (catName: string) => {
    return (
        {
            table: {
                category: catName
            }
        }
    )

}

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategObj('Color')
        },
        onChange: {
            ...GetCategObj('Events')
        },
        onClick: {
            ...GetCategObj('Events')
        },
        titleValue: {
            ...GetCategObj('Main')
        },
        accordionCollapsed: {
            ...GetCategObj('Main')
        },
        items: {
            ...GetCategObj('Main')
        }
    }
};

const callback = action('accordion mode change event fired');
const callbackItem = action('item was clicked');

const Template: Story<AccordionPropsValue> = (args) => <Accordion {...args}/>;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    accordionCollapsed: true,
    onChange: callback,
    items: [],
    onClick: callbackItem
}

export const SubmenuUnCollapsedMode = Template.bind({});
SubmenuUnCollapsedMode.args = {
    titleValue: 'Submenu',
    accordionCollapsed: false,
    onChange: callback,
    items: [{title: 'Bmw', value: 1}, {title: 'Citroen', value: 2}, {title: 'Audi', value: 3}],
    onClick: callbackItem
}

export const ModeChanging: Story<AccordionPropsValue> = (args) => {
    const [value, setValue] = useState(true)
    return <Accordion {...args}
                      accordionCollapsed={value}
                      onChange={() => setValue(!value)}
    />

}

ModeChanging.args = {
    titleValue: 'Users',
    items: [{title: 'Bob', value: 1}, {title: 'Anna', value: 2}, {title: 'Mike', value: 3}],
    onClick: callbackItem
}




