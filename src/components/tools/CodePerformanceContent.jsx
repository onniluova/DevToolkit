import React from 'react'
import GeneralContainer from "../containers/GeneralContainer.jsx";
import CustomButton from "../common/CustomButton.jsx";

const CodePerformanceContainer = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col w-5/12 bg-gradient-to-b from-violet-500 to-violet-600 rounded-md shadow-md mx-auto">
                <p className="text-lg text-white font-bold text-center py-4">Code Performance</p>
            </div>
            <div className="flex justify-center gap-2">
                <GeneralContainer >
                    <textarea
                        placeholder="Enter code..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
            </div>
            <div className="flex justify-center">
                <CustomButton title="Run" className="bg-blue-500 space-y-10 rounded-md drop-shadow-xl hover:bg-blue-300 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
    )
}

export default CodePerformanceContainer