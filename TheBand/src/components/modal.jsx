import React from "react";
import { FaSuitcase } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const BuyModal = ({ isOpen, closeModal }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 pt-32">
                    <div className="bg-white w-3/4 shadow-lg relative m-auto">
                        <button
                            onClick={closeModal}
                            className="text-white px-4 py-2 hover:text-black hover:bg-[#ccc] absolute top-0 right-0"
                        >
                            <IoIosClose size={24} />
                        </button>
                        <header className="text-3xl font-bold text-white bg-[#009688] text-center py-8 px-4 w-full">
                            <h2><FaSuitcase className="mx-2 inline-block" />TICKETS</h2>
                        </header>
                        <div className="px-4">
                            <label htmlFor="ticket-quantity" className="block my-4 text-sm font-medium text-gray-700">
                                <FaUser className="mr-2 inline-block" />
                                Tickets, $15 per person
                            </label>
                            <input
                                type="text"
                                id="ticket-quantity"
                                placeholder="How Many?"
                                className="w-full p-2 border border-gray-300"
                            />
                            <label htmlFor="ticket-email" className="block my-4 text-sm font-medium text-gray-700">
                                <FaUser className="mr-2 inline-block" />
                                Send To
                            </label>
                            <input
                                id="ticket-email"
                                type="email"
                                placeholder="Enter Email"
                                className="w-full p-2 border border-gray-300"
                            />
                            <button className="w-full bg-[#009688] text-white p-4 my-4">
                                PAY
                                <FaCheck className="ml-2 inline-block" />
                            </button>
                        </div>
                        <footer className="text-center py-4">
                            <p className="text-sm text-gray-600">
                                Need <a href="#" className="text-[#4c84f4] hover:underline">help?</a>
                            </p>
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};

export default BuyModal;