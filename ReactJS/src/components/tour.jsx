// Tour.js
import React, { useState } from "react";
import ny from "../assets/ny.jpg";
import sf from "../assets/sf.jpg";
import pa from "../assets/pa.jpg";
import BuyModal from "./modal";

const Tour = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);

    const tours = [
        {
            image: ny,
            title: "New York",
            date: "Fri 27 Nov 2016",
            description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
        },
        {
            image: sf,
            title: "Paris",
            date: "Sat 28 Nov 2016",
            description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
        },
        {
            image: pa,
            title: "San Francisco",
            date: "Sun 29 Nov 2016",
            description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
        }
    ];

    const openModal = (tour) => {
        setSelectedTour(tour);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="bg-[#000] w-full">
            <div className="md:mx-28 px-4 py-16">
                <h2 className="text-white text-4xl text-center">TOUR DATES</h2>
                <p className="text-white text-base opacity-60 text-center italic my-4">Remember to book your tickets!</p>
                <ul className="bg-[#fff]">
                    <li className="px-4 py-2 text-[#757575]">September <span className="bg-[#f44336] text-white px-2 ml-4 inline-block">Sold out</span></li>
                    <li className="px-4 py-2 text-[#757575] border-y border-y-neutral-200">October <span className="bg-[#f44336] text-white px-2 ml-4 inline-block">Sold out</span></li>
                    <li className="px-4 py-2 text-[#757575]">November <span className="float-right bg-[#000] inline-block px-2 text-white mr-4 rounded-full">3</span></li>
                </ul>
                <div className="py-8 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tours.map((tour, index) => (
                        <div key={index} className="bg-black">
                            <div className="w-full">
                                <img src={tour.image} alt="" className="w-full hover:opacity-60 cursor-pointer" onClick={() => openModal(tour)} />
                            </div>
                            <div className="px-4 bg-white">
                                <p className="font-bold block py-4">{tour.title}</p>
                                <p className="mb-4 opacity-60">{tour.date}</p>
                                <p className="mb-4">{tour.description}</p>
                                <button className="text-white bg-black py-2 px-4 mb-4 w-full md:w-auto" onClick={() => openModal(tour)}>Buy Tickets</button>
                            </div>
                        </div>
                    ))}
                </div>
                <BuyModal isOpen={modalOpen} closeModal={closeModal} details={selectedTour} />
            </div>
        </div>
    );
};

export default Tour;

