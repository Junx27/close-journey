import React, { useContext } from "react";
import Contents from "./Layouts/Contents";
import Navbar from "./Layouts/Navbar";
import AddWord from "./Layouts/AddWord";
import { Head } from "@inertiajs/react";
import MyContext from "@/Components/CreateContex";
import MyWord from "./Layouts/MyWord";

function Dashboard({ auth }) {
    const { setGetId, myWords } = useContext(MyContext);

    //mengambil data id pengguna
    const handleAddWordClick = () => {
        setGetId(auth.user.id);
    };
    return (
        <div className="fixed w-full overflow-auto">
            <Head title="Dashboard" />
            <div className="flex mx-5 md:mx-10">
                <div className="w-full">
                    {myWords === "me" ? (
                        <MyWord auth={auth} />
                    ) : (
                        <Contents auth={auth} />
                    )}
                </div>
                <div className="hidden md:hidden lg:block w-full">
                    <Navbar auth={auth} />
                    <div onClick={handleAddWordClick}>
                        <AddWord auth={auth} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
