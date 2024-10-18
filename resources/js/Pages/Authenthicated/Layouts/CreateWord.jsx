import ButtonSubmit from "@/Components/ButtonSubmit";
import MyContext from "@/Components/CreateContex";
import InputField from "@/Components/InputField";
import TextArea from "@/Components/TextArea";
import { useForm } from "@inertiajs/react";
import React, { useContext } from "react";

function CreateWord() {
    const { getId, category } = useContext(MyContext);
    const { data, setData, post } = useForm({
        word: "",
        sentence: "",
        category: category,
        like: 0,
        bookmark: 0,
        user_id: getId,
    });
    //fungsi untuk merubah nilai state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    //fungsi untuk menambahkan data
    const submit = (e) => {
        e.preventDefault();
        post("/create-word");
    };

    return (
        <div className="">
            <h1 className="uppercase text-center text-white font-black mt-2">
                {category}
            </h1>
            <form action="" className="" onSubmit={submit}>
                <div className="mb-5 md:mb-10 mt-5">
                    <InputField
                        name="word"
                        value={data.word}
                        onChange={handleChange}
                        placeholder={"Enter the word"}
                    />
                </div>
                <div className="my-5 md:my-10 relative">
                    <TextArea
                        name="sentence"
                        value={data.sentence}
                        onChange={handleChange}
                        placeholder={"Enter the sentence"}
                    />
                    <div className="mt-8 md:my-10 relative">
                        <div className="flex justify-center">
                            <ButtonSubmit>submit</ButtonSubmit>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateWord;
