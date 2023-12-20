import React from "react";

interface ButtonProps{
    style?: string;
    label?: string;
    onClick?: (event: any) => void;
    type?: "submit" | "buttom" | "reset"  | undefined;
}

export const Button: React.FC<ButtonProps> = ({
    style, label, onClick, type
}:ButtonProps) => {
    return(
        <button className={`${style} text-white px-4 py-2 rounded-lg`}
        type={type}
        onClick={onClick}>
           { label }
        </button>
    )
}