import React, {useState} from 'react'

const CustomDropdown = ({ title, items, className }) => {
    return (
        <div>
            <select className={`${className}`}>
                {items.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}</select>
        </div>
    )
}

export default CustomDropdown