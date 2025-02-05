import React, {useState} from 'react'
import GeneralContainer from "../containers/GeneralContainer.jsx";
import CustomDropdown from "@/components/common/Dropdown.jsx";
import CustomButton from "@/components/common/CustomButton.jsx";
import {hashService} from "@/api/services/hashService.js";

const HashContent = () => {
    const HashAlgorithms = [
        {value: 'sha256', label: "SHA-256" },
        {value: 'sha512', label: "SHA-512" },
        {value: 'md5', label: "MD5" }
    ];

    const [inputText, setInputText] = useState('');
    const [algorithm, setAlgorithm] = useState('sha256');
    const [hashResult, setHashResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAlgorithmChange = (e) => {
        setAlgorithm(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const payload = {
                text: inputText,
                algorithm: algorithm
            };

            const response = await hashService.calculateHash(payload);

            setHashResult(response.data.hash);

        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred while generating the hash');
            console.error('Hashing error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col space-y-4 px-4">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center gap-2">
                    <GeneralContainer title="Input">
                    <textarea
                        placeholder="Enter text to hash..."
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none scrollbar-hide"
                    />
                    </GeneralContainer>
                    <div className={"flex-1 justify-center"}>
                        <CustomDropdown title="SHA-256" items={HashAlgorithms}
                                        className="w-48 h-14 text-center rounded-md"
                                        onChange={handleAlgorithmChange}/>
                        <CustomButton title={"Hash  "}
                                      className={"bg-blue-500 mt-3 font-bold text-white hover:bg-blue-400 transition-colors rounded-md"}></CustomButton>
                    </div>
                    <GeneralContainer title="Output">
                    <textarea
                        value={hashResult}
                        className="w-full h-full shadow-sm rounded-md bg-gray-100 resize-none scrollbar-hide"
                        readOnly
                    />
                    </GeneralContainer>
                </div>
                <p className={error ? "text-red-500 text-center" : "hidden"}>{error}</p>
            </form>
        </div>
    )
}

export default HashContent