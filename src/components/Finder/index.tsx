import React from 'react';

import './styles.css';
import { Desktop, Documents } from 'styled-icons/ionicons-outline';
import {Icloud} from '@styled-icons/entypo-social';
import { AppStore } from '@styled-icons/fa-brands';
import { Clock } from '@styled-icons/bootstrap';
import { CloudDownload } from '@styled-icons/material-outlined';

import Button from '../Button';

function Finder(){
    return(
        <div className="finder-container">
            <div id="side-bar">
                <Button />
                <div id="list-items">
                    <ul>
                        <span>iCloud</span>
                        <div id="item">
                            <Desktop id="icon"/>
                            <li>Desktop</li>
                        </div>

                        <div id="item">
                            <Documents id="icon" />
                            <li>Documents</li>
                        </div>

                        <div id="item">
                            <Icloud id="icon"/>
                            <li>iCloud Drive</li>
                        </div>
                    </ul>
                </div>

                <div id="list-items">
                    <ul>
                        <span>Favorites</span>
                        <div id="item">
                            <AppStore id="icon"/>
                            <li>Applications</li>
                        </div>

                        <div id="item">
                            <Clock id="icon" />
                            <li>Recents</li>
                        </div>

                        <div id="item">
                            <CloudDownload id="icon"/>
                            <li>Download</li>
                        </div>
                    </ul>
                </div>
            </div>

            <div id="principal">
                
            </div>
        </div>
    );
}

export default Finder;