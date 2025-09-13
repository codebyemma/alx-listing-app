import React from "react";
import { ButtonProps } from "../../../interfaces";

const Button : React.FC<ButtonProps> = ({ title, onClick, type = "button"}) => {
    return (
        <button onClick={onClick} type={type}>
            <h2>{title}</h2>
        </button>
    );
}

export default Button;