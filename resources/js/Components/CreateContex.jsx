import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [getId, setGetId] = useState(null);
    const [category, setCategory] = useState("");
    const [valueName, setValueName] = useState("");
    const [myWords, setMyWords] = useState("feed students");

    return (
        <MyContext.Provider
            value={{
                getId,
                setGetId,
                category,
                setCategory,
                myWords,
                setMyWords,
                valueName,
                setValueName,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;
