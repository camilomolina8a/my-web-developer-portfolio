import { useState } from "react";
import emailjs from "@emailjs/browser";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                //service ID
                "service_dqpwmmn",
                
                //template ID
                "template_bo6cf3o",

                {
                    from_name: form.name,
                    to_name: "Camilo",
                    from_email: form.email,
                    to_email: "camilomolina.dev@gmail.com",
                    message: form.message,
                },
                //public key
                "VyPaKfl4sDKxHN9DR"
            )
            .then(
                () => {
                    setLoading(false);

                    // Lo que quieras que pase luego de enviar el formulario
                    alert(
                        "Thank you for contact me, I will get back to you as soon as possible."
                    );

                    // Empty form again
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);

                    console.log(error);

                    alert("Something went wrong.");
                }
            );
    };

    return (
        <div
            className="flex flex-col items-center relative w-full lg:mt-10 mb-[80px] px-5 lg:px-0 lg:h-[100vh] "
            id="contact"
        >
            <div className="flex flex-col lg:flex-row w-full h-full items-center lg:max-w-[1140px]  ">
                <div className="flex h-full flex-col justify-center items-center w-full lg:w-1/2 mb-5 lg:mb-0">
                    <h2 className=" text-white font-rubik text-[4rem] lg:text-[5.5rem] prevent-select font-[600] text-center ">
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

                    <p className=" text-gray-400 font-rubik text-[1rem] md:text-[1.2rem] text-center md:max-w-[630px] lg:max-w-[480px] lg:my-0 my-3">
                        I&apos;m interested in freelance opportunities all
                        around the world.{" "}
                        <br className="hidden md:block lg:hidden" />
                        If you have other request or question, fell free to
                        contact me.{" "}
                    </p>

                    <div className=" h-[250px] md:h-[350px] relative">
                        <EarthCanvas />
                    </div>
                </div>

                <div className="flex flex-col justify-evenly items-center h-full w-full md:w-3/4 lg:w-1/2  lg:mt-0">
                    <div className="form-container w-full lg:w-3/4">
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
                            onSubmit={(e) => handleSubmit(e)}
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

                            <button className="btn text-white h-[50px] md:h-[40px] btn-gradient w-[50%] mx-auto md:mx-0 md:max-w-[110px]">
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <StarsCanvas />
        </div>
    );
}

export default Contact;
