import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


test('collapsed should be true', () => {
    //data
    const startState: StateType = {
        collapsed: false
    }
    // action
    const newAccord = reducer(startState, {type:TOGGLE_COLLAPSED});

    //expectation
    expect(newAccord.collapsed).toBe(true);

});

test('collapsed should be false', () => {
    //data
    const startState: StateType = {
        collapsed: true
    }
    // action
    const newAccord = reducer(startState, {type:TOGGLE_COLLAPSED});

    //expectation
    expect(newAccord.collapsed).toBe(false);

});

test('reducer should throw error because action type is incorrect', () => {
    //data
    const startState: StateType = {
        collapsed: true
    }
    // action
    expect(() => { reducer(startState, {type: 'Fake'}) }).toThrowError();

});