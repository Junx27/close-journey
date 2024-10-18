import MyContext from "@/Components/CreateContex";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import EditWord from "./EditWord";
import PopOver from "@/Components/PopOver";
import NavbarMobile from "./NavbarMobile";

function MyWordMobile({ auth }) {
    const [dataWord, setDataWord] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [idWord, setIdWord] = useState(null);
    const { delete: destroy } = useForm({});

    //mengambil data pada database
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/myWords");
            setDataWord(response.data);
        };
        fetchData();
    }, []);

    //fungsi untuk mengedit
    const handleEditWord = (id) => {
        setIdWord(id), setOpenEdit(true);
    };
    //fungsi untuk menghapus
    const handleDelete = (id) => {
        destroy(`/delete-word/${id}`);
    };

    return (
        <div className="px-0 md:px-0 lg:px-10 h-screen overflow-auto pb-32">
            <NavbarMobile auth={auth} />
            <div className="md:sticky top-0 bg-white py-2 md:py-5 pt-10 md:pt-12 px-5">
                <h1 className="font-black text-xl md:text-2xl">
                    My Collection
                </h1>
            </div>
            <div className="flex flex-col gap-5 md:gap-10 mt-5 md:mt-10 px-5">
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
                                <div className="flex justify-between gap-5 md:gap-20 mt-3 md:mt-5 items-center">
                                    <div className="w-full text-xs md:text-sm">
                                        <h2 className="font-black text-white capitalize">
                                            {word.category}
                                        </h2>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-end gap-5">
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
                    <div className="">
                        <EditWord idWord={idWord} />
                    </div>
                </PopOver>
            )}
        </div>
    );
}

export default MyWordMobile;
