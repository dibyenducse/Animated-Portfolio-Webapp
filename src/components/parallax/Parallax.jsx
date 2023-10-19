import React from 'react';
import './parallax.scss';
import { motion } from 'framer-motion';

const Parallax = ({ type }) => {
    return (
        <div
            className="parallax"
            style={{
                background:
                    type === 'Services'
                        ? 'linear-gradient(180deg, #111132, #0c0c1d)'
                        : 'linear-gradient(180deg, #111132, #505064)',
            }}
        >
            <h1>{type === 'Services' ? 'what we do?' : 'what we did'}</h1>
            <div className="mountains"></div>
            <div className="planets"></div>
            <div className="starts"></div>
        </div>
    );
};

export default Parallax;
