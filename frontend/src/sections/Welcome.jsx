import React, {Component} from 'react';
import Particles from 'react-particles-js';
import ParticlesJson from '../assets/particle.json'
import './Welcome.css';

class WelcomeSection extends Component {
    render() {
        return (
            <div className="welcome-area">
                <Particles params={ParticlesJson}/>
                <div className="welcome-area__backdrop"></div>
                <div className="welcome-area__overlay"></div>
            </div>
        )
    }
}

export default WelcomeSection;