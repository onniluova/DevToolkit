import React, {useState} from 'react'

const CustomDropdown = ({ title, items, className }) => {
    return (
        <div className={`w-48 h-14 ${className}`}>
            <select>
                {items.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}</select>
        </div>
    )
}

export default CustomDropdown