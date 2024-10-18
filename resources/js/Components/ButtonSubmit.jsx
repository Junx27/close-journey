import React from "react";

function ButtonSubmit({ children }) {
    return (
        <button className="uppercase font-black bg-[#FFDD40] text-2xl p-5 px-12 rounded-2xl">
            {children}
        </button>
    );
}

export default ButtonSubmit;
