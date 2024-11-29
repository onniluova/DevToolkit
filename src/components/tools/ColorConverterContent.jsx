import React from 'react'
import GeneralContainer from "@/components/containers/GeneralContainer.jsx";
import CustomButton from "@/components/common/CustomButton.jsx";
import CustomDropdown from "@/components/common/Dropdown.jsx";

const ColorConverterContent = () => {
    const colorTypes = [
        { value: 'hex', label: 'Rbg to hex'},
        { value: 'rbg', label: 'Hex to rbg'}
    ]

    return (
        <div className="flex flex-col space-y-4 px-1">
            <div className="flex justify-center gap-2">
                <GeneralContainer title={"Enter color"}>
                    <textarea
                        placeholder="Color here..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
                <div className={"flex-1"}>
                    <CustomDropdown items={colorTypes} className={"w-52 h-14 rounded-md text-center"}></CustomDropdown>
                    <CustomButton title="Convert" className="bg-blue-500 font-bold mt-3 text-white space-y-10 w-52 rounded-md drop-shadow-xl hover:bg-blue-300 transition-colors duration-200 ease-in-out"/>
                </div>
                <GeneralContainer title={"Output"}>
                    <textarea
                        placeholder="Color here..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
            </div>
        </div>
    )
}

export default ColorConverterContent