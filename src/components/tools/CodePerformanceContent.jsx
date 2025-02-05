import React from 'react'
import GeneralContainer from "../containers/GeneralContainer.jsx";
import CustomButton from "../common/CustomButton.jsx";
import CustomDropdown from "@/components/common/Dropdown.jsx";

const CodePerformanceContainer = () => {
    const languages = [
        { value: 'javascript', label: 'JavaScript'},
        { value: 'java', label: 'Java'}
    ]
    return (
        <div className="flex items-center">
            <div className="flex justify-center w-full">
                <GeneralContainer >
                    <textarea
                        placeholder="Enter code..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
                <div className={"flex flex-col items-center ml-5"}>
                <CustomDropdown title="Language" items={languages} className={"w-52 h-14 rounded-md text-center"}></CustomDropdown>
                <CustomButton title="Run" className="bg-blue-500 mt-3 text-white text-bold w-52 space-y-10 rounded-md drop-shadow-xl hover:bg-blue-300 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
        </div>
    )
}

export default CodePerformanceContainer