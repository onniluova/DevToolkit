import React from "react";

const CustomButton = ({ title, className, onClick }) => {
    return (
    <div>
        <button className={`w-48 h-14 ${ className }`} onClick={ onClick }>{title}</button>
    </div>
    )
}

export default CustomButton;