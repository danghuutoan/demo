import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './MainNavigation.css'

class mainNavigation extends Component {
    state = { solid: false }

    handleScroll = () => {
		const offset = window.scrollY;
        let {solid} = this.state; 
		if (offset > 300) {
            if (solid === false) this.setState({solid: true});
		} else {
            if (solid === true) this.setState({solid: false});
		}
    };
    
    componentDidMount() {
		window.addEventListener("scroll", this.handleScroll, true);
    }

    render() { 
        console.log("render")
        return (
         <header className={`main-navigation ${this.state.solid ? "solid" : ""}`} >
            <div className="main-navigation__logo">
                <h1>Logo</h1>
            </div>
            <div className="main-navigation__items">
                <ul>
                    <li><NavLink className={`${this.state.solid ? "solid" : ""}`} to="/auth">Authenticate</NavLink></li>
                    <li><NavLink className={`${this.state.solid ? "solid" : ""}`} to="/events">Events</NavLink></li>
                    <li><NavLink className={`${this.state.solid ? "solid" : ""}`} to="/bookings">Bookings</NavLink></li>
                </ul>
            </div>
        </header>
        );
    }
}

export default mainNavigation;