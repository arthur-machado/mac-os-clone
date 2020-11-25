import React, { useState } from 'react';

import finderIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/migration.png';
import launchpadIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/launchpad.png';
import safariIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/safari.png';
import messagesIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/messages.png';
import mailIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/mail.png';
import mapsIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/maps.png';
import photosIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/photos.png';
import facetimeIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/facetime.png';
import calendarIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/calendar.png';
import contactIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/contacts.png';
import remindersIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/reminders.png';
import notesIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/notes.png';
import tvIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/tv.png';
import musicIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/music.png';
import podcastsIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/podcasts.png';
import appstoreIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/appstore.png';
import systemIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/systempreferences.png';
import diskIcon from '../../assets/images/macos-11-icons/macos-11-all-icons-tld/bootcamp.png';

import './styles.css';

import Finder from '../Finder';

function Dock() {

    const [finderVisible, setFinderVisible] = useState(false);

    const onClickFinder = () => {
        setFinderVisible(true);

    };

    return(

        <div className="container">
            {finderVisible ? <Finder /> : null}
            <div className="dock-body">
                <div id="finder">
                    <img src={finderIcon} alt="" onClick={ onClickFinder }/>
                </div>

                <div id="launchpad">
                    <img src={launchpadIcon} alt=""/>
                </div>

                <div id="safari">
                    <img src={safariIcon} alt=""/>
                </div>

                <div id="message">
                    <img src={messagesIcon} alt=""/>
                </div>

                <div id="mail">
                    <img src={mailIcon} alt=""/>
                </div>

                <div id="maps">
                    <img src={mapsIcon} alt=""/>
                </div>
                
                <div id="photos">
                    <img src={photosIcon} alt=""/>
                </div>

                <div id="facetime">
                    <img src={facetimeIcon} alt=""/>
                </div>

                <div id="calendar">
                    <img src={calendarIcon} alt=""/>
                </div>

                <div id="contact">
                    <img src={contactIcon} alt=""/>
                </div>

                <div id="reminders">
                    <img src={remindersIcon} alt=""/>
                </div>

                <div id="notes">
                    <img src={notesIcon} alt=""/>
                </div>

                <div id="tv">
                    <img src={tvIcon} alt=""/>
                </div>

                <div id="music">
                    <img src={musicIcon} alt=""/>
                </div>

                <div id="podcasts">
                    <img src={podcastsIcon} alt=""/>
                </div>

                <div id="appstore">
                    <img src={appstoreIcon} alt=""/>
                </div>

                <div id="settings">
                    <img src={systemIcon} alt=""/>
                </div>

                <hr/>

                <div id="disk">
                    <img src={diskIcon} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Dock;