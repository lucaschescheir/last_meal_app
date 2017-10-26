import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {foodFacts} from '../facts'
import FoodFacts from './foodFacts';

class SignIn extends Component {
// change
    // renderButton() {
    //     console.log(this.props.authenticated)
    //     if (this.props.authenticated === false) {
    //         return <button onClick={() => this.props.authenticate(true)} type="submit">Sign In</button>
    //             }
    //     return <button onClick={() => this.props.authenticate(false)} type="submit">Sign Out</button>
    // }

    handleSubmit = () => {
         this.props.history.push("/search");
    }
    
    // renderFacts() {
    //     return (
    //         foodFacts[Math.floor(Math.random() * 9)]
    //     )
    // }

    render() {
        return (
            <div className="sign-in-view">
                {/* <p>{ this.renderFacts() }</p> */}
                 <p><FoodFacts /></p>
                <div id="sign-in">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button onClick={ () => this.handleSubmit() } type="submit">Sign In</button>
                    <h5><a href="">Forgot Password?</a></h5>
                </div>

                <div className="signiin-footer">
                    <h5>Don't have an account? Register
                        <a href="/RestaurantSignIn"> here!</a>
                    </h5>
                </div>
            </div>
        );
    }
}


function MapState2Props(state) {
    return {authenticated: state.authenticated}
}

export default connect(MapState2Props, actions)(SignIn)
