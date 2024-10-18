import ButtonSubmit from "@/Components/ButtonSubmit";
import InputField from "@/Components/InputField";
import PopOver from "@/Components/PopOver";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    //fungsi untuk login
    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <PopOver>
            <Head title="Login" />
            <div className="bg-[#746BF9] p-5 rounded-xl  w-[340px] md:w-96 relative pb-5">
                <img
                    src="/assets/login.png"
                    alt=""
                    className="inset-0 absolute w-72 h-auto -top-32 object-cover ml-6 md:ml-9"
                />
                <a
                    href="/"
                    className="flex justify-end cursor-pointer relative -top-10 -right-10"
                >
                    <img src="/assets/close.png" alt="" className="w-10 h-10" />
                </a>
                <form onSubmit={submit} className="pt-0 md:pt-12">
                    <div className="mb-5 md:mb-10 mt-20 relative">
                        <InputField
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder={"Email..."}
                            className={"pl-12"}
                            type={"email"}
                        />
                        <img
                            src="/assets/email.png"
                            alt=""
                            className="inset-0 w-8 h-8 absolute top-2 left-2"
                        />
                    </div>
                    <div className="my-10 relative">
                        <InputField
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder={"Password..."}
                            className={"pl-12"}
                            type={"password"}
                        />
                        <img
                            src="/assets/password.png"
                            alt=""
                            className="inset-0 w-8 h-8 absolute top-2 left-2"
                        />
                        <div className="mt-8 md:my-10 relative">
                            <div className="flex justify-center">
                                <ButtonSubmit>login</ButtonSubmit>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </PopOver>
    );
}
