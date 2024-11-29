import React from 'react'
import GeneralContainer from "../containers/GeneralContainer.jsx";
import CustomDropdown from "@/components/common/Dropdown.jsx";
import CustomButton from "@/components/common/CustomButton.jsx";

const HashContent = () => {
    const HashAlgorithms = [
        {value: 'sha-256', label: "SHA-256" },
        {value: 'md5', label: "MD5" }
    ]
    return (
        <div className="flex flex-col space-y-4 px-4">
            <div className="flex justify-center gap-2">
                <GeneralContainer title="Input">
                    <textarea
                        placeholder="Enter text to hash..."
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none scrollbar-hide"
                    />
                </GeneralContainer>
                <div className={"flex-1 justify-center"}>
                    <CustomDropdown title="SHA-256" items={HashAlgorithms}
                                    className="w-48 h-14 text-center rounded-md"></CustomDropdown>
                    <CustomButton title={"Hash  "}
                                  className={"bg-blue-500 mt-3 font-bold text-white hover:bg-blue-400 transition-colors rounded-md"}></CustomButton>
                </div>
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