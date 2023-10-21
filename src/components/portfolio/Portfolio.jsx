import React, { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Web Application Developement',
        img: 'https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_1280.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
    },
    {
        id: 2,
        title: 'Video Editing',
        img: 'https://cdn.pixabay.com/photo/2021/06/29/10/29/video-editing-services-6373804_1280.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
    },
    {
        id: 3,
        title: 'Social Media Content',
        img: 'https://cdn.pixabay.com/photo/2017/01/06/20/19/social-1958774_1280.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
    },
    {
        id: 4,
        title: 'Data Management',
        img: 'https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: 'start start end end',
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>

                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar"
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
