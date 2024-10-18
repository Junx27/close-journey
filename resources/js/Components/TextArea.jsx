import React from "react";

function TextArea({ placeholder, name, value, onChange }) {
    return (
        <textarea
            type="text"
            name={name}
            value={value}
            rows={5}
            className="py-3 w-full rounded-xl border-none outline-none"
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default TextArea;
