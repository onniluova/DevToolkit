import React, {useState} from 'react'

const CustomDropdown = ({ title, items, className, onChange }) => {
    return (
        <div>
            <select className={`${className}`} onChange={onChange}>
                {items.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}</select>
        </div>
    )
}

export default CustomDropdown