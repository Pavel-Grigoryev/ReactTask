import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
   let [count, setCount] = useState(0);
   const [users, setUsers] = useState(['Pasha', 'Dasha', 'Max']);

   const adduser = () => {
       setUsers([...users, 'Vadim' + new Date().getTime()])
   }
    return <>
        <button onClick={() => { setCount(++count) } }>+</button>
        <button onClick={adduser}>add User</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}