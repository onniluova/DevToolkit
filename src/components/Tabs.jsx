import React, {useState} from 'react'
import HashContent from "@/components/HashContent.jsx";
import ColorConverterContent from "@/components/ColorConverterContent.jsx";
import FormatContent from "@/components/FormatContent.jsx";
import EfficiencyTimer from "@/components/EfficiencyTimer.jsx";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("hash")

    const tabs = [
        {   id: 'hash', label: 'Hash' },
        {   id: 'format', label: 'Format' },
        {   id: 'efficiency', label: 'Efficiency Test' },
        {   id: 'color', label: 'Color Converter' }
    ]

    const RenderContent = () => {
        switch(activeTab) {
            case 'hash':
                return (
                    <HashContent />
                )
            case 'format':
                return (
                    <FormatContent />
                )
            case 'efficiency':
                return (
                    <EfficiencyTimer />
                )
            case 'color':
                return (
                    <ColorConverterContent />
                )
        }
    }
    return (
        <div>
            <div className="flex justify-center space-x-4 p-4">
                <div className="flex space-x-3 p-3 bg-gray-200 rounded-md">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`px-3.5 w-32 text-center rounded-md ${activeTab === tab.id ? 'bg-blue-500 text-white font-bold' : 'bg-gray-300'}`}
                        onClick={() => setActiveTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
                </div>
            </div>
            <div className="mt-4">
                <RenderContent />
            </div>
        </div>
    )
}

export default Tabs