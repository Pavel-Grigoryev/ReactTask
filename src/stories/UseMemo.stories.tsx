import React, {useMemo, useState} from "react";


export default {
    title: 'useMemo'
}


export const DifficultCoutingExample = () => {

    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}



const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    let [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Pasha', 'Dasha', 'Mix']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users]);

    const adduser = () => {
        setUsers([...users, 'Vadim' + new Date().getTime()]);
    }

    return <>
        <button onClick={() => { setCount(++count) } }>+</button>
        {count}
        <Users users={newArray}/>
        <button onClick={adduser}>Add user</button>
    </>
}