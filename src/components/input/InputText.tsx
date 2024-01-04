import React from "react";

interface InputTextPropos{
    style?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    value?: string;
}

export const InputText: React.FC <InputTextPropos> = ({
    style, ...rest
} : InputTextPropos) => {
    return (
        <input type='text'
            {...rest}
            className={`${style} border px-3 py-2 rounded-lg text-gray-900`} />
    )
}


