import React, { useContext, useEffect, useState } from "react";
import CreateWord from "./CreateWord";
import PopOver from "@/Components/PopOver";
import MyContext from "@/Components/CreateContex";
import _ from "lodash";

function AddWord({ auth }) {
    const [openAddWord, setOpenAddWord] = useState(false);
    const { setCategory, setMyWords } = useContext(MyContext);
    const [dataWord, setDataWord] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/myWords");
            setDataWord(response.data);
        };
        fetchData();
    }, []);
    console.log(dataWord);

    //fungsi untuk memasukan kategori
    const handleAddWord = (categoryInput) => {
        setOpenAddWord(true);
        setCategory(categoryInput);
    };

    //fungsi untuk menampilkan data sendiri
    const handleMyCollection = (categoryInput) => {
        setMyWords("me");
        setCategory(categoryInput);
    };
    //fungsi untuk mengambil panjang data
    const countWordsByCategory = (category) => {
        if (!category || !dataWord) {
            return 0;
        }

        return _.filter(dataWord, (word) => {
            return word.category === category;
        }).length;
    };
    //implementasi filter dan mengambil panjang data
    const verbs = countWordsByCategory("verbs");
    const adjectives = countWordsByCategory("adjective");
    const adverbs = countWordsByCategory("adverb");
    const nouns = countWordsByCategory("noun");
    return (
        <div className="bg-[#746BF9] p-10 h-full rounded-3xl">
            <div className="bg-white p-5 rounded-3xl">
                <div className="flex items-center gap-10">
                    <div>
                        <div className="flex gap-5 items-center">
                            <img
                                src="/assets/star-word.png"
                                alt=""
                                className="w-12 h-12"
                            />
                            <h1 className="font-bold text-4xl truncate">
                                {verbs + adjectives + adverbs + nouns} Words
                            </h1>
                        </div>
                        <div className="grid grid-cols-4 gap-5 mt-5">
                            <div
                                className="bg-[#42C3FC] p-2 rounded-2xl h-[70px] w-[70px] cursor-pointer"
                                onClick={() => handleMyCollection("adjective")}
                            >
                                <h1 className="font-bold text-center text-2xl my-1">
                                    {adjectives}
                                </h1>
                                <p className="text-[9px] text-center font-bold">
                                    Adjectives
                                </p>
                            </div>
                            <div
                                className="bg-[#FFDD40] p-2 rounded-2xl h-[70px] w-[70px] cursor-pointer"
                                onClick={() => handleMyCollection("adverb")}
                            >
                                <h1 className="font-bold text-center text-2xl my-1">
                                    {adverbs}
                                </h1>
                                <p className="text-[9px] text-center font-bold">
                                    Adverbs
                                </p>
                            </div>
                            <div
                                className="bg-[#FF4155] p-2 rounded-2xl h-[70px] w-[70px] text-white cursor-pointer"
                                onClick={() => handleMyCollection("noun")}
                            >
                                <h1 className="font-bold text-center text-2xl my-1">
                                    {nouns}
                                </h1>
                                <p className="text-[9px] text-center font-bold">
                                    Noun
                                </p>
                            </div>
                            <div
                                className="bg-[#746BF9] p-2 rounded-2xl h-[70px] w-[70px] text-white cursor-pointer"
                                onClick={() => handleMyCollection("verbs")}
                            >
                                <h1 className="font-bold text-center text-2xl my-1">
                                    {verbs}
                                </h1>
                                <p className="text-[9px] text-center font-bold">
                                    Verbs
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img
                            src="/assets/trophy.png"
                            alt=""
                            className="w-32 h-32 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-10">
                <div
                    className="bg-white p-5 rounded-3xl cursor-pointer"
                    onClick={() => handleAddWord("adjective")}
                >
                    <div className="flex gap-10">
                        <div>
                            <img
                                src="/assets/adjective.png"
                                alt=""
                                className="w-20 h-20"
                            />
                        </div>
                        <div className="font-bold">
                            <h1 className="text-5xl text-[#42C3FC]">+</h1>
                            <p>Adjectives</p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white p-5 rounded-3xl cursor-pointer"
                    onClick={() => handleAddWord("adverb")}
                >
                    <div className="flex gap-10">
                        <div>
                            <img
                                src="/assets/adverb.png"
                                alt=""
                                className="w-20 h-20"
                            />
                        </div>
                        <div className="font-bold">
                            <h1 className="text-5xl text-[#FFDD40]">+</h1>
                            <p>Adverbs</p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white p-5 rounded-3xl cursor-pointer"
                    onClick={() => handleAddWord("noun")}
                >
                    <div className="flex gap-10">
                        <div>
                            <img
                                src="/assets/noun.png"
                                alt=""
                                className="w-20 h-20"
                            />
                        </div>
                        <div className="font-bold">
                            <h1 className="text-5xl text-[#FF4155]">+</h1>
                            <p>Noun</p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white p-5 rounded-3xl cursor-pointer"
                    onClick={() => handleAddWord("verbs")}
                >
                    <div className="flex gap-10">
                        <div>
                            <img
                                src="/assets/verbs.png"
                                alt=""
                                className="w-20 h-20"
                            />
                        </div>
                        <div className="font-bold">
                            <h1 className="text-5xl text-[#746BF9]">+</h1>
                            <p>Verbs</p>
                        </div>
                    </div>
                </div>

                {openAddWord && (
                    <PopOver>
                        <div className="bg-[#746BF9] p-5 rounded-xl w-96 relative">
                            <img
                                src="/assets/login.png"
                                alt=""
                                className="inset-0 absolute w-72 h-auto -top-32 object-cover ml-9"
                            />
                            <div
                                className="flex justify-end cursor-pointer relative -top-10 -right-10"
                                onClick={() => setOpenAddWord(false)}
                            >
                                <img
                                    src="/assets/close.png"
                                    alt=""
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="pt-12">
                                <CreateWord />
                            </div>
                        </div>
                    </PopOver>
                )}
            </div>
        </div>
    );
}

export default AddWord;
