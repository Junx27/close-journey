import ButtonSubmit from "@/Components/ButtonSubmit";
import MyContext from "@/Components/CreateContex";
import InputField from "@/Components/InputField";
import PopOver from "@/Components/PopOver";
import { Head, useForm } from "@inertiajs/react";
import { useContext, useEffect } from "react";

export default function Edit() {
    const { getId } = useContext(MyContext); //menggunakan hook contex
    const { data, setData, put } = useForm({});
    // mengambil data pengguna
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/user/${getId}`);
            setData({
                name: response.data.name,
                image: response.data.image,
            });
        };
        fetchData();
    }, [getId]);
    //fungsi untuk mengubah data pengguna
    const submit = (e) => {
        e.preventDefault();
        put(`/update-profile/${getId}`);
    };

    return (
        <PopOver>
            <Head title="Profile" />
            <div className="bg-[#746BF9] p-10 rounded-xl  w-[340px] md:w-96 relative pb-12">
                <img
                    src="/assets/login.png"
                    alt=""
                    className="inset-0 absolute w-72 h-auto -top-32 object-cover ml-6 md:ml-12 lg:ml-9"
                />
                <a
                    href="/dashboard"
                    className="flex justify-end cursor-pointer relative -top-10 -right-10 md:-top-12 md:-right-12"
                >
                    <img src="/assets/close.png" alt="" className="w-10 h-10" />
                </a>
                <form onSubmit={submit} className="pt-12">
                    <div className="mb-10 mt-20 relative">
                        <InputField
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder={"Name.."}
                            className={"pl-12"}
                            type={"text"}
                        />
                        <img
                            src="/assets/id-card.png"
                            alt=""
                            className="inset-0 w-8 h-8 absolute top-2 left-2"
                        />
                    </div>
                    <select
                        name="image"
                        value={data.image}
                        onChange={(e) => setData("image", e.target.value)}
                        className="py-3 w-full rounded-xl border-none outline-none"
                    >
                        <option value="">Select Avatar</option>
                        <option value="/assets/avatars/boy.png">
                            Avatar 1
                        </option>
                        <option value="/assets/avatars/boy_1.png">
                            Avatar 2
                        </option>
                    </select>
                    <div className="mt-8 md:my-10 relative">
                        <div className="flex justify-center">
                            <ButtonSubmit>submit</ButtonSubmit>
                        </div>
                    </div>
                </form>
            </div>
        </PopOver>
    );
}
