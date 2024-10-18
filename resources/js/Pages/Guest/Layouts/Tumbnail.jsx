import React from "react";

function Tumbnail() {
    return (
        <div>
            <div className="flex gap-5 md:gap-10 pt-10">
                <div className="hidden md:hidden lg:block transition-all duration-500 hover:shadow-xl w-full bg-white p-5 rounded-3xl relative cursor-pointer">
                    <img
                        src="/assets/rocket.png"
                        alt=""
                        className="absolute -right-10 top-32"
                    />
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-12 gap-5 md:gap-10">
                        <div className="transition-all duration-500 hover:shadow-xl col-span-4 bg-white p-5 rounded-xl md:rounded-3xl cursor-pointer">
                            <img src="/assets/know.png" alt="" />
                        </div>
                        <div className="transition-all duration-500 hover:shadow-xl col-span-8 bg-white p-5 rounded-xl md:rounded-3xl cursor-pointer">
                            <div className="flex gap-5 md:gap-10">
                                <h1 className="font-black text-5xl md:text-9xl text-[#42C3FC]">
                                    2
                                </h1>
                                <div>
                                    <h2 className="font-bold text-md md:text-4xl">
                                        Vocabulary
                                    </h2>
                                    <p className="font-semibold text-xs md:text-2xl">
                                        Everyday is important.
                                    </p>
                                    <div className="mt-2 md:mt-5 flex gap-1">
                                        <img
                                            src="/assets/star-active.png"
                                            alt=""
                                            className="w-5 h-5 md:w-12 md:h-12"
                                        />
                                        <img
                                            src="/assets/star-active.png"
                                            alt=""
                                            className="w-5 h-5 md:w-12 md:h-12"
                                        />
                                        <img
                                            src="/assets/star-inactive.png"
                                            alt=""
                                            className="w-5 h-5 md:w-12 md:h-12"
                                        />
                                        <img
                                            src="/assets/star-inactive.png"
                                            alt=""
                                            className="w-5 h-5 md:w-12 md:h-12"
                                        />
                                        <img
                                            src="/assets/star-inactive.png"
                                            alt=""
                                            className="w-5 h-5 md:w-12 md:h-12"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-500 hover:shadow-xl bg-white p-5 rounded-xl md:rounded-3xl mt-5 md:mt-10 flex items-center md:h-72 cursor-pointer">
                        <div className="flex gap-10">
                            <div className="p-0 md:p-5 relative">
                                <h1 className="font-black text-7xl md:text-9xl">
                                    40
                                </h1>
                                <span className="absolute -top-5 md:top-0 right-0 md:-right-5 text-xl md:text-5xl font-black">
                                    %
                                </span>
                            </div>
                        </div>
                        <div className="mx-5 md:mx-20 lg:mx-10 flex justify-between gap-5 md:gap-10">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/assets/post.png"
                                    alt=""
                                    className="w-8 h-8 md:w-20 md:h-20"
                                />
                                <p className="text-[10px] md:text-xl text-center font-bold mt-1 md:mt-5">
                                    Limited <br /> vocabulary
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/assets/world.png"
                                    alt=""
                                    className="w-8 h-8 md:w-20 md:h-20"
                                />
                                <p className="text-[10px] md:text-xl text-center font-bold mt-1 md:mt-5">
                                    Lack of <br />
                                    practice
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/assets/data.png"
                                    alt=""
                                    className="w-8 h-8 md:w-20 md:h-20"
                                />
                                <p className="text-[10px] md:text-xl text-center font-bold mt-1 md:mt-5">
                                    Variable <br />
                                    motivation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tumbnail;
