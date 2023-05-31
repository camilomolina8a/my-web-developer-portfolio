import { useState, useEffect } from "react";

import TagCloud from "TagCloud";

const TextSphere = () => {

    const texts = [
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Javascript",
        "ReactJs",
        "NextJs",
        "Wordpress",
        "Git",
        "GitHub",
        "ES5/ES6",
    ];

    const container = ".tagcloud";

    let radius = 180;

    const options = {
        // sphere radius in px
        radius: radius,

        //animation speed: slow, normal, fast
        maxSpeed: "normal",
        initSpeed: "normal",

        // rolling direction [0 (top), 90 (left), 135 (right-bottom) ]
        direction: 135,

        // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse)]
        keep: true,
    };

    const handleResize = () => {
        const newRadius = Math.floor(window.innerWidth / 3);
        radius = newRadius;
    };


    useEffect(() => {

        handleResize();
        TagCloud(container, texts, options);
    
    }, [])
    
 
    return (
        <div className="text-sphere">
            <span className="tagcloud"></span>
        </div>
    );
};

export default TextSphere;
