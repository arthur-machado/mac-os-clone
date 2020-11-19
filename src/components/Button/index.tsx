import React from 'react';

import './styles.css';

function Button(){
    return(
        <div className="button-container">
            <svg>
                <circle cx="7" cy="7" stroke="#a3a3a3" strokeWidth="0.6" r="7" fill="#FF5E57"/>
            </svg>

            <svg>
                <circle cx="7" cy="7" stroke="#a3a3a3" strokeWidth="0.6" r="7" fill="#FEBC2E"/>    
            </svg> 

            <svg>
                <circle cx="7" cy="7" stroke="#a3a3a3" strokeWidth="0.6" r="7" fill="#27C83F"/>
            </svg>
        </div>
    );
}

export default Button;