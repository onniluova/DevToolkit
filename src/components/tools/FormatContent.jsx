import React from 'react'
import GeneralContainer from "../containers/GeneralContainer.jsx";

const FormatContent = () => {
    return (
        <div className="flex flex-col space-y-4 px-4">
            <div className="flex flex-col w-3/6 bg-gray-300 rounded-md shadow-md mx-auto">
                <p className="text-lg font-bold text-center py-4">Format</p>
            </div>
            <div className="flex justify-center gap-2">
                <GeneralContainer title="Formatter">
                    <textarea
                        placeholder="Enter text to format..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
            </div>
        </div>
    )
}

export default FormatContent