import React, {useState} from 'react'
import GeneralContainer from "@/components/containers/GeneralContainer.jsx";
import CustomButton from "@/components/common/CustomButton.jsx";
import CustomDropdown from "@/components/common/Dropdown.jsx";

const ColorConverterContent = () => {
    const colorTypes = [
        { value: 'hex', label: 'Rbg to hex'},
        { value: 'rbg', label: 'Hex to rbg'}
    ]

    const [inputText, setInputText] = useState('');
    const [color, setColor] = useState('rbg');
    const [colorResult, setColorResult] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [placeholder, setPlaceholder] = useState('RBG, format 255, 255, 255');

    const handleColorMethodChange = (e) => {
        const selectedColor = e.target.value;
        setColor(selectedColor);
        setPlaceholder(selectedColor === 'rbg' ? 'RBG, format 255, 255, 255' : 'HEX, format #FFFFFF');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    }

    return (
        <div className="flex flex-col space-y-4 px-1">
            <div className="flex justify-center gap-2">
                <GeneralContainer title={"Enter color"}>
                    <textarea
                        placeholder={placeholder}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
                <div className={"flex-1"}>
                    <CustomDropdown items={colorTypes}
                                    className={"w-52 h-14 rounded-md text-center"}
                                    onChange={handleColorMethodChange}
                    />
                    <CustomButton title="Convert" className="bg-blue-500 font-bold mt-3 text-white space-y-10 w-52 rounded-md drop-shadow-xl hover:bg-blue-300 transition-colors duration-200 ease-in-out"/>
                </div>
                <GeneralContainer title={"Output"}>
                    <textarea
                        placeholder=""
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none overflow-hidden"
                    />
                </GeneralContainer>
            </div>
        </div>
    )
}

export default ColorConverterContent