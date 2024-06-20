import React from "react";
import Members from "../assets/bandmember.jpg";

const About = () => {
    return (
        <div className="px-4 py-16 md:mx-20">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">THE BAND</h2>
                <p className="opacity-60 my-4 italic">We love music</p>
                <p className="text-justify mb-8">
                    We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex md:flex-row flex-col justify-between items-center w-full">
                    <div className="text-center my-4 md:w-1/3">
                        <p className="my-4">Name</p>
                        <img className="w-3/5 mx-auto" src={Members} alt="Band Member" />
                    </div>
                    <div className="text-center my-4 md:w-1/3">
                        <p className="my-4">Name</p>
                        <img className="w-3/5 mx-auto" src={Members} alt="Band Member" />
                    </div>
                    <div className="text-center my-4 md:w-1/3">
                        <p className="my-4">Name</p>
                        <img className="w-3/5 mx-auto" src={Members} alt="Band Member" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
