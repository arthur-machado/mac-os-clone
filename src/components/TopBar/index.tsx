import React from 'react';

import appleIcon from '../../assets/images/apple-icon.png';
import batteryIcon from '../../assets/images/Battery.svg';
import wifiIcon from '../../assets/images/Wifi.svg';
import controlCenter from '../../assets/images/control-centre.png';

import './styles.css'; 

function TopBar() {
    return(
        <div className="top-bar-container">
            <div id="first-menu">
                <img src={appleIcon} alt=""/>
                
                <div id="titles">
                    <strong>MacBook</strong>
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Buddies</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
                
            </div>

            <div id="second-menu">
                <div id="system-info">
                    <img src={batteryIcon} alt=""/>
                    <img src={ wifiIcon } alt=""/>
                    <img src={ controlCenter } alt=""/>

                    <span>Tue Nov 17</span>
                    <time>23:01</time>
                </div>
            </div>

        </div>
    );
}

export default TopBar;