import ButtonSubmit from "@/Components/ButtonSubmit";
import InputField from "@/Components/InputField";
import TextArea from "@/Components/TextArea";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

function EditWord({ idWord }) {
    const [categories, setCategories] = useState([]);
    const { data, setData, put } = useForm({
        word: "",
        sentence: "",
        category: "",
    });
    //mengambil data berdasarkan id dan semua data
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/words");

            const groupedCategories = _.uniqBy(response.data, "category");
            setCategories(groupedCategories.map((word) => word.category));
        };

        fetchData();

        if (idWord !== null) {
            const fetchDataDetail = async () => {
                const response = await axios.get(`/api/word/${idWord}`);
                setData({
                    word: response.data.word,
                    sentence: response.data.sentence,
                    category: response.data.category,
                });
            };
            fetchDataDetail();
        }
    }, [idWord]);

    //fungsi untuk merubah data pada state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    //fungsi untuk mengupdate data
    const submit = (e) => {
        e.preventDefault();
        put(`/update-word/${idWord}`);
    };

    return (
        <div className="bg-[#746BF9] p-10 rounded-xl  w-[340px] md:w-96 relative pb-12">
            <img
                src="/assets/login.png"
                alt=""
                className="inset-0 absolute w-72 h-auto -top-32 object-cover ml-9"
            />
            <div
                className="flex justify-end cursor-pointer relative -top-10 -right-10 md:-top-12 md:-right-12"
                onClick={() => window.location.reload()}
            >
                <img src="/assets/close.png" alt="" className="w-10 h-10" />
            </div>
            <form onSubmit={submit} className="pt-10">
                <div className="mb-10 mt-5">
                    <select
                        name="category"
                        value={data.category}
                        onChange={handleChange}
                        className="py-3 w-full rounded-xl border-none outline-none"
                    >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-10 mt-5">
                    <InputField
                        name="word"
                        value={data.word}
                        onChange={(e) => setData("word", e.target.value)}
                        placeholder={"Enter the word"}
                    />
                </div>
                <div className="my-10 relative">
                    <TextArea
                        name="sentence"
                        value={data.sentence}
                        onChange={(e) => setData("sentence", e.target.value)}
                        placeholder={"Enter the sentence"}
                    />
                    <div className="mt-10 flex justify-center">
                        <ButtonSubmit>submit</ButtonSubmit>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditWord;
