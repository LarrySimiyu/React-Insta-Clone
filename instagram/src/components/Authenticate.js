import React from "react";
import App from "../App";
import Login from "./Login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
        super(props) //grabs stuff from parent. (grabbing everything) - parent is whatever extends class
        this.state= {
            loggedIn: false
        }
    }
    //always at the top - read top down - no need to bind - conventionaly everything else arrow funcd
    componentDidMount() {
        if(localStorage.user) { 
            this.setState({
                loggedIn: true
            })
        } 
    }

    

    render() { //javascript land 

        if (this.state.loggedIn) {
            return <App />
            

            
        } else {
           return  <Login />
        }
    }
  };

export default Authenticate;
