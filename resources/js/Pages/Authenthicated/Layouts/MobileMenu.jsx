import React, { useContext, useEffect, useState } from "react";
import CreateWord from "./CreateWord";
import PopOver from "@/Components/PopOver";
import MyContext from "@/Components/CreateContex";
import NavbarMobile from "./NavbarMobile";
import _ from "lodash";

function MobileMenu({ auth }) {
    const [openAddWord, setOpenAddWord] = useState(false);
    const { setCategory } = useContext(MyContext);
    const [dataWord, setDataWord] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/myWords");
            setDataWord(response.data);
        };
        fetchData();
    }, []);

    //fungsi untuk menambahkan data
    const handleAddWord = (categoryInput) => {
        setOpenAddWord(true);
        setCategory(categoryInput);
    };
    //fungsi untuk mengambil panjang data
    const countWordsByCategory = (category) => {
        return _.filter(
            dataWord,
            (word) =>
                word.user_id === auth.user.id && word.category === category
        ).length;
    };
    //implementasi filter dan mengambil panjang data
    const verbs = countWordsByCategory("verbs");
    const adjectives = countWordsByCategory("adjective");
    const adverbs = countWordsByCategory("adverb");
    const nouns = countWordsByCategory("noun");
    return (
        <div className="h-screen overflow-hidden block md:block lg:hidden">
            <NavbarMobile auth={auth} />
            <div className="flex justify-between items-center p-5 md:p-10 px-10">
                <img
                    src={auth.user.image}
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
                />
                <p className="text-xs">Hi, {auth.user.name}</p>
            </div>
            <div className="bg-white p-5 pt-0 md:pt-20 rounded-2xl mb-10">
                <div className="flex items-center gap-5 px-10">
                    <div>
                        <div className="flex gap-5 items-center">
                            <img
                                src="/assets/star-word.png"
                                alt=""
                                className="w-8 h-8 md:w-12 md:h-12"
                            />
                            <h1 className="font-bold text-xl md:text-5xl truncate">
                                {verbs + adjectives + adverbs + nouns} Words
                            </h1>
                        </div>
                        <div className="bg-white p-5 rounded-2xl mt-10 hidden md:block">
                            <div className="grid grid-cols-4 gap-5">
                                <div className="bg-[#42C3FC] p-2 rounded-2xl h-[70px] w-[70px] cursor-pointer">
                                    <h1 className="font-bold text-center text-2xl my-1">
                                        {adjectives}
                                    </h1>
                                    <p className="text-[9px] text-center font-bold">
                                        Adjectives
                                    </p>
                                </div>
                                <div className="bg-[#FFDD40] p-2 rounded-2xl h-[70px] w-[70px] cursor-pointer">
                                    <h1 className="font-bold text-center text-2xl my-1">
                                        {adverbs}
                                    </h1>
                                    <p className="text-[9px] text-center font-bold">
                                        Adverbs
                                    </p>
                                </div>
                                <div className="bg-[#FF4155] p-2 rounded-2xl h-[70px] w-[70px] text-white cursor-pointer">
                                    <h1 className="font-bold text-center text-2xl my-1">
                                        {nouns}
                                    </h1>
                                    <p className="text-[9px] text-center font-bold">
                                        Noun
                                    </p>
                                </div>
                                <div className="bg-[#746BF9] p-2 rounded-2xl h-[70px] w-[70px] text-white cursor-pointer">
                                    <h1 className="font-bold text-center text-2xl my-1">
                                        {verbs}
                                    </h1>
                                    <p className="text-[9px] text-center font-bold">
                                        Verbs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img
                            src="/assets/trophy.png"
                            alt=""
                            className="w-12 h-12 md:w-32 md:h-32 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#746BF9] p-5 h-sceen pb-32 rounded-0 md:rounded-t-2xl">
                <div className="bg-white p-5 rounded-2xl -mt-20 md:hidden">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="bg-[#42C3FC] p-2 rounded-2xl h-[70px] w-[70px] cursor-pointer">
                            <h1 className="font-bold text-center text-2xl my-1">
                                {adjectives}
                            </h1>
                            <p className="text-[9px] text-center font-bold">
                                Adjectives
                            </p>
                        </div>
                        <div className="bg-[#FFDD40] p-2 rounded-2xl h-[70px] w-[70px] cursor-pointer">
                            <h1 className="font-bold text-center text-2xl my-1">
                                {adverbs}
                            </h1>
                            <p className="text-[9px] text-center font-bold">
                                Adverbs
                            </p>
                        </div>
                        <div className="bg-[#FF4155] p-2 rounded-2xl h-[70px] w-[70px] text-white cursor-pointer">
                            <h1 className="font-bold text-center text-2xl my-1">
                                {nouns}
                            </h1>
                            <p className="text-[9px] text-center font-bold">
                                Noun
                            </p>
                        </div>
                        <div className="bg-[#746BF9] p-2 rounded-2xl h-[70px] w-[70px] text-white cursor-pointer">
                            <h1 className="font-bold text-center text-2xl my-1">
                                {verbs}
                            </h1>
                            <p className="text-[9px] text-center font-bold">
                                Verbs
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 md:gap-10 mt-5 md:mt-20 md:mx-10">
                    <div
                        className="bg-white p-5 rounded-3xl cursor-pointer"
                        onClick={() => handleAddWord("adjective")}
                    >
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src="/assets/adjective.png"
                                    alt=""
                                    className="w-20 h-20 md:w-32 md:h-32"
                                />
                                <p className="text-xs md:text-3xl font-bold text-center mt-1 md:mt-5">
                                    Adjective
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white p-5 rounded-3xl cursor-pointer"
                        onClick={() => handleAddWord("adverb")}
                    >
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src="/assets/adverb.png"
                                    alt=""
                                    className="w-20 h-20 md:w-32 md:h-32"
                                />
                                <p className="text-xs md:text-3xl font-bold text-center mt-1 md:mt-5">
                                    Adverb
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white p-5 rounded-3xl cursor-pointer"
                        onClick={() => handleAddWord("noun")}
                    >
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src="/assets/noun.png"
                                    alt=""
                                    className="w-20 h-20 md:w-32 md:h-32"
                                />
                                <p className="text-xs md:text-3xl font-bold text-center mt-1 md:mt-5">
                                    Noun
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white p-5 rounded-3xl cursor-pointer"
                        onClick={() => handleAddWord("verbs")}
                    >
                        <div className="flex justify-center">
                            <div>
                                <img
                                    src="/assets/verbs.png"
                                    alt=""
                                    className="w-20 h-20 md:w-32 md:h-32"
                                />
                                <p className="text-xs md:text-3xl font-bold text-center mt-1 md:mt-5">
                                    Verb
                                </p>
                            </div>
                        </div>
                    </div>

                    {openAddWord && (
                        <PopOver>
                            <div className="bg-[#746BF9] p-5 md:p-10 rounded-xl w-[340px] md:w-[450px] lg:w-96 relative">
                                <img
                                    src="/assets/login.png"
                                    alt=""
                                    className="inset-0 absolute w-72 h-auto -top-32 object-cover ml-6 md:ml-20 lg:ml-9"
                                />
                                <div
                                    className="flex justify-end cursor-pointer relative -top-8 -right-8 md:-top-12 md:-right-12  lg:-top-12 lg:-right-12"
                                    onClick={() => setOpenAddWord(false)}
                                >
                                    <img
                                        src="/assets/close.png"
                                        alt=""
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div className="pt-5 md:pt-10">
                                    <CreateWord />
                                </div>
                            </div>
                        </PopOver>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
