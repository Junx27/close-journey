import React from "react";
import Hero from "./Layouts/Hero";
import Tumbnail from "./Layouts/Tumbnail";
import Contents from "./Layouts/Contents";
import { Head } from "@inertiajs/react";

function Welcome() {
    return (
        <div>
            <Head title="Welcome" />
            <Hero />
            <div className="bg-[#746BF9] rounded-t-2xl md:rounded-t-[50px] p-5 md:p-10">
                <Tumbnail />
                <div>
                    <Contents />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
