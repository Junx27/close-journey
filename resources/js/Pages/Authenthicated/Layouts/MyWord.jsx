import MyContext from "@/Components/CreateContex";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import EditWord from "./EditWord";
import PopOver from "@/Components/PopOver";

function MyWord({ auth }) {
    //state untuk menampung data
    const [dataWord, setDataWord] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [idWord, setIdWord] = useState(null);
    const { getId, setGetId, category, setCategory } = useContext(MyContext);
    const { post, delete: destroy } = useForm({});

    //mengambil data pada database
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/myWords");
            setDataWord(response.data);
        };
        fetchData();
    }, []);
    //filter data yang telah didapatkan
    const filteredWords = _.filter(dataWord, (word) => {
        return category === null || word.category === category;
    });
    //fungsi untuk memberikan like dan update count like
    const handleLike = (id) => {
        post(`/update-word-like/${id}`);
    };
    //fungsi untuk edit
    const handleEditWord = (id) => {
        setIdWord(id), setOpenEdit(true);
    };

    //fungsi untuk menghapus data
    const handleDelete = (id) => {
        destroy(`/delete-word/${id}`);
    };
    //fungsi untuk mereset filter
    const handleAllCollection = () => {
        setCategory(null);
    };

    return (
        <div className="px-10 h-screen overflow-auto pb-32">
            <div className="sticky top-0 bg-white py-5 pt-12">
                <div className="flex justify-between items-center">
                    <h1 className="font-black text-2xl">My Collection</h1>
                    <div className="flex gap-3 cursor-pointer">
                        <p onClick={() => window.location.reload()}>
                            &larr; Back
                        </p>
                        <p onClick={handleAllCollection}>All Colection</p>
                    </div>
                </div>
            </div>
            <div></div>
            <div className="flex flex-col gap-10 mt-10">
                {filteredWords.map((word) => (
                    <div
                        key={word.id}
                        onMouseOver={() => setGetId(word.user.id)}
                    >
                        <div className="flex gap-10 bg-[#42C3FC] p-5 rounded-3xl items-center">
                            <img
                                src={word.user.image}
                                alt=""
                                className="w-20 h-20 rounded-full"
                            />
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <h1 className="font-black text-xl capitalize">
                                        {word.word}
                                    </h1>
                                    <p className="text-xs mt-2 text-white capitalize">
                                        {word.user.name}
                                    </p>
                                </div>
                                <p className="mt-5">"{word.sentence}"</p>
                                <div className="flex justify-between gap-20 mt-5 items-center mr-5">
                                    <div className="w-full">
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
                                                <p className="text-white font-bold text-xl">
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
                                                    handleEditWord(word.id)
                                                }
                                            >
                                                <img
                                                    src="/assets/edit.png"
                                                    alt=""
                                                    className="w-5 h-5"
                                                />
                                            </div>
                                            <div
                                                className="flex gap-2 items-center cursor-pointer"
                                                onClick={() =>
                                                    handleDelete(word.id)
                                                }
                                            >
                                                <img
                                                    src="/assets/delete.png"
                                                    alt=""
                                                    className="w-5 h-5"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {openEdit && (
                <PopOver>
                    <div className="mt-5 md:mt-12">
                        <EditWord idWord={idWord} />
                    </div>
                </PopOver>
            )}
        </div>
    );
}

export default MyWord;
