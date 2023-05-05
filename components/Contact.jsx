import { useState } from "react";

import Image from "next/image";

import EarthCanvas from "./canvas/Earth";
import StarsCanvas from "./canvas/Stars";

import { toggleRubberBand } from "../helpers/toggleRubberBand";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = {};

    return (
        <div className="flex flex-col items-center relative lg:h-[100vh]">
            <div className="flex h-full items-center lg:max-w-[1140px] w-full ">
                <div className="flex h-full flex-col justify-center items-center w-1/2 border">
                    <h2 className=" text-white font-rubik text-[5.8rem] prevent-select font-[600] text-center ">
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            C
                        </span>
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            o
                        </span>
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            n
                        </span>
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            t
                        </span>
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            a
                        </span>
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            c
                        </span>
                        <span
                            className="letter"
                            onMouseEnter={toggleRubberBand}
                        >
                            t
                        </span>
                    </h2>
                    <p className=" text-gray-400 font-rubik text-[1.1rem] text-center border">
                        I&apos;m interested in freelance opportunities all
                        around the world. <br className="hidden lg:block" /> If
                        you have other request or question, fell free to contact
                        me.{" "}
                    </p>
                    <div className="border lg:h-[400px]">
                        <EarthCanvas />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-1/2 ">
                    <div className="form-container w-3/4">
                        <h3 className="mb-3 text-white font-rubik font-[600] text-[2rem] prevent-select">
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                G
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                e
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                t
                            </span>
                            &nbsp;
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                I
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                n
                            </span>
                            &nbsp;
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                T
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                o
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                u
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                c
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={toggleRubberBand}
                            >
                                h
                            </span>
                        </h3>

                        <form
                            autoComplete="off"
                            handleSubmit={handleSubmit}
                            className="flex flex-col gap-8"
                        >
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="Your name:"
                                onChange={(e) => handleChange(e)}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder="Your email:"
                                onChange={(e) => handleChange(e)}
                                required
                            />

                            <textarea
                                value={form.message}
                                name="message"
                                rows="7"
                                placeholder="How can I help you?:"
                                onChange={(e) => handleChange(e)}
                            ></textarea>

                            <button
                                type="submit"
                                className="btn h-[40px] btn-gradient lg:max-w-[100px]"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </div>

                    <div className="border">
                        <Image src="/images/linkedin.svg" alt="LinkedIn" width={30} height={30} className="social-icon"/>
                        <Image src="/images/github.svg" alt="Github" width={30} height={30} className="social-icon"/>
                        <Image src="/images/twitter.svg" alt="Twitter" width={30} height={30} className="social-icon"/>
                    </div>
                </div>
            </div>

            <StarsCanvas />
        </div>
    );
}

export default Contact;
