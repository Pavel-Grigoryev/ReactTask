import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from "@storybook/react";


export default {
    title: 'input',
   // component: input
};

const Template: Story<any> = (args) => <input{...args}/>;

export const UncontrolledInput = Template.bind({});
export const ControlledInputWithFixedValues = Template.bind({});
ControlledInputWithFixedValues.args = {
    value: 'control'
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    return <><input value={value} onChange={(e) => {
        setValue(e.currentTarget.value)
    }}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const saveHandler = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }


    return <><input ref={inputRef}/>
        <button onClick={saveHandler}>save</button>
        actual value: {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        return setParentValue(e.currentTarget.value)
    }
    return <select onChange={onChangeHandler} value={parentValue}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Gomel</option>
        <option value={'3'}>Novogrudok</option>
    </select>
}

