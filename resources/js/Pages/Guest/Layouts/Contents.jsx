import axios from "axios";
import React, { useEffect, useState } from "react";

function Contents() {
    const [dataWord, setDataWord] = useState([]);
    //mengambil data pada database
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/words");
            setDataWord(response.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="flex gap-10 mt-10">
                <div className="w-full hidden md:hidden lg:block"></div>
                <div className="w-full text-white font-bold text-md md:text-2xl flex justify-center lg:justify-end gap-5 md:gap-10">
                    <h2>1750K+ Vocabulary</h2>
                    <h2>700+ Students learn</h2>
                </div>
            </div>
            <div className="mt-10 md:mt-20 w-full bg-white rounded-xl md:rounded-3xl p-5 md:p-10 md:px-10 lg:px-20 pb-10">
                <h1 className="font-black text-xl md:text-2xl my-5 md:my-10">
                    "Learning together is fun!"
                </h1>
                <div className="flex flex-col gap-5 md:gap-10 mt-5 md:mt-10">
                    {dataWord.map((word) => (
                        <div key={word.id}>
                            <div className="flex gap-5 md:gap-10 bg-[#42C3FC] p-5 rounded-xl md:rounded-3xl items-center">
                                <img
                                    src={word.user.image}
                                    alt=""
                                    className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                                />
                                <div className="w-full">
                                    <div className="flex justify-between mr-5">
                                        <h1 className="font-black text-sm md:text-xl capitalize">
                                            {word.word}
                                        </h1>
                                        <p className="text-xs mt-0 md:mt-0 lg:mt-2 text-white capitalize">
                                            {word.user.name}
                                        </p>
                                    </div>
                                    <p className="mt-2 md:mt-5 text-xs md:text-sm">
                                        "{word.sentence}"
                                    </p>
                                    <div className="flex justify-between gap-5 md:gap-20 mt-3 md:mt-5 items-center mr-5">
                                        <div className="w-full text-xs md:text-sm">
                                            <h2 className="font-black text-white capitalize">
                                                {word.category}
                                            </h2>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex justify-end gap-10">
                                                <div
                                                    className="flex gap-2 items-center cursor-pointer"
                                                    onClick={() =>
                                                        auth.user.id !==
                                                            word.user_id &&
                                                        handleLike(word.id)
                                                    }
                                                >
                                                    <img
                                                        src="/assets/love.png"
                                                        alt=""
                                                        className="w-5 h-5"
                                                    />
                                                    <p className="text-white font-bold text-sm md:text-xl">
                                                        {word.like > 1000
                                                            ? `${Math.floor(
                                                                  word.like /
                                                                      1000
                                                              )}k`
                                                            : word.like}
                                                    </p>
                                                </div>
                                                <div
                                                    className="flex gap-2 items-center cursor-pointer"
                                                    onClick={() =>
                                                        auth.user.id !==
                                                            word.user_id &&
                                                        handleBookmark(word.id)
                                                    }
                                                >
                                                    <img
                                                        src="/assets/bookmark.png"
                                                        alt=""
                                                        className="w-5 h-5"
                                                    />
                                                    <p className="text-white font-bold text-sm md:text-xl">
                                                        {word.bookmark > 1000
                                                            ? `${Math.floor(
                                                                  word.bookmark /
                                                                      1000
                                                              )}k`
                                                            : word.bookmark}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contents;
