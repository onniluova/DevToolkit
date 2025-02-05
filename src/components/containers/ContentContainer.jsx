import React from 'react'

const ContentContainer = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center border rounded bg-gray-100">
            {children}
        </div>
    )
}

export default ContentContainer