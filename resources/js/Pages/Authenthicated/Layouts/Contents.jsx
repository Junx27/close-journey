import MyContext from "@/Components/CreateContex";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import NavbarMobile from "./NavbarMobile";

function Contents({ auth }) {
    const { valueName, setValueName } = useContext(MyContext);
    const [dataWord, setDataWord] = useState([]);
    const { post } = useForm({});
    //mengambil data pada database
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/words");
            setDataWord(response.data);
        };
        fetchData();
    }, []);

    //fungsi untuk mengupdate bookmark
    const handleBookmark = (id) => {
        post(`/update-word-bookmark/${id}`);
    };
    //fungsi untuk mengupdate like
    const handleLike = (id) => {
        post(`/update-word-like/${id}`);
    };
    //melakukan filter berdasarkan data yang diinputkan dengan hook contex
    const filteredWords = valueName
        ? _.filter(dataWord, (word) =>
              word.word.toLowerCase().includes(valueName.toLowerCase())
          )
        : dataWord;

    return (
        <div className="px-0 md:px-0 lg:px-10 h-screen overflow-auto pb-32">
            <div className="block md:block lg:hidden -ml-5 md:-ml-10">
                <NavbarMobile auth={auth} />
            </div>
            <div className="block md:block lg:hidden pt-5">
                <input
                    type="text"
                    className="w-full bg-gray-100 border-none outline-none rounded-full py-3 px-6 pl-10"
                    placeholder="Find something...."
                    value={valueName}
                    onChange={(e) => setValueName(e.target.value)}
                />
            </div>
            <div className="md:sticky top-0 bg-white py-2 md:py-5 pt-2 md:pt-12">
                <h1 className="font-black text-xl md:text-2xl">
                    Feeds Students
                </h1>
            </div>
            <div className="flex flex-col gap-5 md:gap-10 mt-5 md:mt-10">
                {filteredWords.map((word) => (
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
                                                              word.like / 1000
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
    );
}

export default Contents;
