import React from "react";

function Hero() {
    return (
        <div className="mb-10 mx-5 md:mx-10 lg:mx-20">
            <div className="flex gap-2 items-center mt-8 md:mt-10">
                <div className="w-4 h-4 bg-[#746BF9] rounded-full"></div>
                <h1 className="font-black uppercase text-xl md:text-3xl text-[#42C3FC]">
                    close journey
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:gap-32 items-center md:h-[600px] mx-5">
                <div className="mx-auto">
                    <h2 className="font-black text-xl md:text-2xl lg:text-4xl text-center">
                        "Master English the Fun Way!"
                    </h2>
                    <p className="hidden md:hidden lg:block mt-10 text-center">
                        is an engaging language learning app designed to make{" "}
                        <br />
                        mastering English enjoyable and interactive.
                    </p>
                    <p className="block md:block lg:hidden mt-5 text-center">
                        is an engaging language learning app designed to make
                        mastering English enjoyable and interactive.
                    </p>
                    <div className="flex justify-center mt-10">
                        <div className="flex gap-10">
                            <a href="/login">
                                <button className="transition-all duration-500 hover:shadow-xl uppercase font-black bg-[#FFDD40] p-3 px-6 rounded-full w-32">
                                    login
                                </button>
                            </a>
                            <a href="/register">
                                <button className="transition-all duration-500 hover:shadow-xl uppercase font-black bg-[#746BF9] text-white p-3 px-6 rounded-full w-32">
                                    register
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-96 mt-20 md:mt-0 order-first md:order-last">
                    <img
                        src="/assets/hero.png"
                        alt=""
                        className="w-56 h-56 md:w-64 md:h-64"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
