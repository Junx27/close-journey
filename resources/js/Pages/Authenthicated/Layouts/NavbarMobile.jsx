import MyContext from "@/Components/CreateContex";
import { Link, usePage } from "@inertiajs/react";
import React, { useContext } from "react";

function NavbarMobile({ auth }) {
    const { setGetId } = useContext(MyContext);
    const { url } = usePage(); //untuk menginisiasi halaman

    //data untuk navbar mobile
    const navbar = [
        {
            id: 1,
            name: "Dashboard",
            icon: "/assets/home.png",
            link: "/mobile-dashboard",
        },
        {
            id: 2,
            name: "Setting",
            icon: "/assets/setting.png",
            link: "/update-profile",
        },
        {
            id: 3,
            name: "Feed",
            icon: "/assets/web-content.png",
            link: "/dashboard",
        },

        {
            id: 4,
            name: "Collection",
            icon: "/assets/folder.png",
            link: "/my-word",
        },
    ];
    return (
        <div className="fixed bottom-0 bg-white w-full py-4 px-5 md:px-20 rounded-t-xl">
            <div
                className="flex justify-between gap-5"
                onClick={() => setGetId(auth.user.id)}
            >
                {navbar.map((i) => (
                    <Link
                        href={i.link}
                        key={i.id}
                        className={`flex flex-col items-center ${
                            url === i.link ? " text-[#746BF9]" : ""
                        }`}
                    >
                        <img src={i.icon} alt="" className="w-8 h-8" />
                        <p className="text-[8px] mt-1">{i.name}</p>
                    </Link>
                ))}
                <div>
                    <Link
                        href="/logout"
                        className="flex flex-col items-center"
                        method="post"
                    >
                        <img
                            src="/assets/logout.png"
                            alt=""
                            className="w-8 h-8"
                        />
                        <p className="text-[8px] mt-1">Logout</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
