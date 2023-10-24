import React, { useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import './services.scss';
const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: '-100px' });

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            //animate={isInView && 'animate'}
            animate={'animate'}
        >
            <motion.div variants={variants} className="textContainer">
                <p>
                    we focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div variants={variants} className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>
                            bloom your
                        </motion.b>{' '}
                        Ideas.
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>
                            for your
                        </motion.b>{' '}
                        Business.
                    </h1>
                    <button>what we do</button>
                </div>
            </motion.div>
            <motion.div variants={variants} className="listContainer">
                <motion.div
                    whileHover={{ background: 'lightgray', color: 'black' }}
                    className="box"
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    whileHover={{ background: 'lightgray', color: 'black' }}
                    className="box"
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    whileHover={{ background: 'lightgray', color: 'black' }}
                    className="box"
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    whileHover={{ background: 'lightgray', color: 'black' }}
                    className="box"
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
