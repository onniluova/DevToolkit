import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="p-9 border rounded bg-gray-100">
            {children}
        </div>
    )
}

export default Container