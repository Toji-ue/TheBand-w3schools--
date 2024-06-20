import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-3xl mx-auto px-4">
                <div className="w-full text-center">
                    <h2 className="text-4xl">CONTACT</h2>
                    <p className="opacity-60 italic my-4">Fan? Drop a note!</p>
                </div>
                <div className="flex flex-wrap py-8">
                    <div className="w-full md:w-1/2 mb-4">
                        <p className="mb-2 flex items-center"><FaLocationDot className="inline-block mr-2" />Chicago, US</p>
                        <p className="mb-2 flex items-center"><BsTelephoneFill className="inline-block mr-2" />Phone: +00 151515</p>
                        <p className="flex items-center"><IoMdMail className="inline-block mr-2" />Email: mail@mail.com</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="space-y-3">
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                                <input className="w-full md:w-1/2 p-2 border border-gray-300" placeholder="Name" type="text" required name="Name" />
                                <input className="w-full md:w-1/2 p-2 border border-gray-300" placeholder="Email" type="text" required name="Email" />
                            </div>
                            <input className="w-full p-2 border border-gray-300" placeholder="Message" type="text" required name="Message" />
                            <button className="w-full md:w-auto px-4 py-2 bg-black text-white float-right" type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;


