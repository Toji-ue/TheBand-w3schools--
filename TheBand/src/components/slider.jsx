import React, { useState, useEffect } from "react";
import Chicago from "../assets/chicago.jpg";
import NewYork from "../assets/NewYork.jpg";
import LosAngeles from "../assets/LosAngeles.jpg";

const Slider = () => {
    const slides = [
        {
            image: NewYork,
            title: "New York",
            description: "The atmosphere in New York is lorem ipsum."
        },
        {
            image: Chicago,
            title: "Chicago",
            description: "Thank you, Chicago - A night we won't forget."
        },
        {
            image: LosAngeles,
            title: "Los Angeles",
            description: "We had the best time playing at Venice Beach!"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [slides.length]);

    return (
        <div className="relative w-full h-60 mt-12 md:h-51 lg:h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-property: transform; duration-1 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img className="w-full h-full object-cover" src={slide.image} alt={slide.title} />
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50 p-9 text-center">
                        <h3 className="text-2xl mb-4 hidden md:block">{slide.title}</h3>
                        <p className="text-lg hidden md:block">{slide.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
