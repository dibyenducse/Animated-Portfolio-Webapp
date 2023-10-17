import Links from './links/Links';
import './sidebar.scss';
import React from 'react';
import ToggleButton from './toggleButton/ToggleButton';

const Siderbar = () => {
    return (
        <div>
            <div className="bg">
                <Links />
            </div>
            <ToggleButton />
        </div>
    );
};

export default Siderbar;
