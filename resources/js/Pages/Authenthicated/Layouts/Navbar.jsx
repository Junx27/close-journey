import MyContext from "@/Components/CreateContex";
import Dropdown from "@/Components/Dropdown";
import React, { useContext } from "react";

function Navbar({ auth }) {
    //mengambil data dari hook context
    const { setGetId, valueName, setValueName } = useContext(MyContext);
    return (
        <div className="p-5 md:p-10 flex justify-between gap-10 items-center">
            <div className="hidden md:block w-full relative">
                <input
                    type="text"
                    className="w-full bg-gray-100 border-none outline-none rounded-full py-3 px-6 pl-10"
                    placeholder="Find something...."
                    value={valueName}
                    onChange={(e) => setValueName(e.target.value)}
                />
                <img
                    src="/assets/search.png"
                    alt=""
                    className="w-7 h-7 absolute top-2 right-3 cursor-pointer"
                />

                <img
                    src="/assets/book.png"
                    alt=""
                    className="hidden md:block w-20 h-20 absolute -top-8 -left-12"
                />
            </div>
            <div className="w-96">
                <div className="flex justify-end gap-10 items-center">
                    <h1 className="ml-0 md:ml-10">{auth.user.name}</h1>
                    <div
                        className="w-12 h-12"
                        onClick={() => setGetId(auth.user.id)}
                    >
                        <Dropdown>
                            <Dropdown.Trigger>
                                <img
                                    src={auth.user.image}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full cursor-pointer"
                                />
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
