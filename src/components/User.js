import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    // const [count1] = useState(1);

    useEffect(() => {
        // API Call
       const timer = setInterval(() => {
            console.log('Namaste Functional OP')
        },1000);

        console.log('useEffect');

        return () => {
            clearInterval(timer);
            console.log('useEffect Return');
        };
    },[]);
    
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={
                () => {
                    setCount(count + 1);
                }
            }>
                Increase Count
            </button>
            {/* <h1>Count1 : {count1}</h1> */}
            <h2>Name : {props.name}</h2>
            <h3>Location : Biharsharif</h3>
            <h4>Contact : @mdshabrezak</h4>
        </div>
    );
};

export default User;