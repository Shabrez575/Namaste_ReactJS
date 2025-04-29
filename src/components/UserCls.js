import { useContext } from "react";
import React from "react";
import userContext from "../utils/userContext";

class UserCls extends React.Component{
   constructor(props){
    super(props);

    console.log(props);

    this.state = {
        // count: 0,
        // count2: 2,
        // If you have some more count state variable is also present it will be not be a problem it will ignore if we did not set in below.
        // count3: 3,
        // count4: 4,

        // Initialize local state variable in class component
        userInfo: {
            name: 'Dummy',
            location: 'Default',
            login: 'ashabrez',
            avatar_url:'https:/mdshabrez.akhtar.com',
        },
    };

    console.log('Child Constructor');

   }

   async componentDidMount(){
    console.log('Child Component Did Mount');

    this.timer = setInterval(() => {
        console.log('Namaste React OP');
    }, 2000);

    // API Call
    const data = await fetch('https://api.github.com/users/Shabrez575');
    const json = await data.json();

    this.setState({
        userInfo: json,
    });

    console.log(json);

   }

   componentWillUnmount(){
    clearInterval(this.timer);
    console.log('ComponentWillUnmount');
   }
    render() {
        //const {name, location} = this.props;
        const {name, location,login,avatar_url} = this.state.userInfo;
        console.log('Child render');
    //  debugger;
     return(
        <div className="user-card">
            {/* <h1>Count : {this.state.count}</h1>
            <h1>Count2 : {this.state.count2}</h1>
            <button onClick={ () => {
                this.setState({
                    count: this.state.count + 1,
                });
            }}>Count Increase</button>
             <button onClick={ () => {
                this.setState({
                    count2: this.state.count2 + 1,
                });
            }}>Count2 Increase</button> */}
            <img src="https://avatars.githubusercontent.com/u/77329187?v=4" className="avatar"></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>User Id: {login}</h4>
            <div>
                {/* In case of class component we can use useContext like below ways:
                use userContext.Consumer Component. */}
                loggedInUser :
                <userContext.Consumer>
                    {
                        // (data) => console.log(data.loggedInUser)
                
                        ({loggedInUser}) => (
                            <h1 className="text-xl font-bold">
                                {loggedInUser}
                            </h1>
                        )
                    }
                </userContext.Consumer>
            </div>
        </div>
     );
    };
};

export default UserCls;