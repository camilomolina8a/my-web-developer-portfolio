import { useState, useEffect } from "react";

import TagCloud from "TagCloud";

const TextSphere = () => {
    const [radius, setRadius] = useState(180);

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

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth ; console.log(screenWidth);
            const newRadius = Math.floor(window.innerWidth / 3); console.log(newRadius)
            
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        console.log("deberia mostrarse la esfera");
        return () => {
            TagCloud(container, texts, options);
            window.removeEventListener("resize", handleResize);
            console.log("deberia mostrarse la esfera RETURN del USEEFECT");
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="text-sphere">
            <span className="tagcloud"></span>
        </div>
    );
};

export default TextSphere;

