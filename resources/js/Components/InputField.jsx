import React from "react";

function InputField({ placeholder, name, value, onChange, className, type }) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            className={`py-3 w-full rounded-xl border-none outline-none + ${className}`}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default InputField;
