import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import map from "../assets/map.jpg";

const Footer = () => {
    return(
        <div className="w-full">
            <img src={map} alt="" />
            <div className="py-16 px-8 text-center text-black opacity-60 text-2xl">
                <FaFacebookSquare className="inline-block hover:opacity-50"/>
                <IoLogoInstagram className="inline-block hover:opacity-50"/>
                <FaSnapchat className="inline-block hover:opacity-50"/>
                <FaPinterestP className="inline-block hover:opacity-50"/>
                <FaTwitter className="inline-block hover:opacity-50"/>
                <FaLinkedinIn className="inline-block hover:opacity-50"/>
                <p className="text-sm w-full my-3">Make By <a className="underline" href="https://github.com/Toji-ue">Toji</a> With <FaHeart  className="inline-block"/></p>
            </div>
        </div>
    )
}

export default Footer;