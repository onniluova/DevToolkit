import React from 'react'
import GeneralContainer from "@/components/containers/GeneralContainer.jsx";

const ColorConverterContent = () => {
    return (
        <div className="flex flex-col space-y-4 px-1">
            <div
                className="flex flex-col w-7/12 bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 shadow-md mx-auto rounded-md">
                <p className="text-lg text-white font-bold text-center py-4">Convert Color</p>
            </div>
            <div className="flex justify-center gap-2">
                <GeneralContainer>
                    <textarea
                        placeholder="Placeholder..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
            </div>
        </div>
    )
}

export default ColorConverterContent