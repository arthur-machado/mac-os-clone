import React from 'react';

import folderIcon from '../../assets/images/folder-icon.png';

import './styles.css';

interface Props {
    folderName: string;
}

const File: React.FC<Props> = (props) => {
    return(
        <div className="file-container">
            <img src={ folderIcon } alt="folder" id="folder-icon"/>
            <span>{props.folderName}</span>
        </div>
    );
}

export default File;