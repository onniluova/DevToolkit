import React from 'react'
import GeneralContainer from "../containers/GeneralContainer.jsx";

const HashContent = () => {
    return (
        <div className="flex flex-col space-y-4 px-4">
            <div className="flex flex-col w-3/6 bg-gray-300 rounded-md shadow-md mx-auto">
                <p className="text-lg font-bold text-center py-4">Hash</p>
            </div>
            <div className="flex justify-center gap-2">
                <GeneralContainer title="Input">
                    <textarea
                        placeholder="Enter text to hash..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none scrollbar-hide"
                    />
                </GeneralContainer>
                <GeneralContainer title="Output">
                    <textarea
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none scrollbar-hide"
                        readOnly
                    />
                </GeneralContainer>
            </div>
        </div>
    )
}

export default HashContent