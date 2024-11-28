import React, {useState} from 'react'
import HashContent from "@/components/tools/HashContent.jsx";
import ColorConverterContent from "@/components/tools/ColorConverterContent.jsx";
import FormatContent from "@/components/tools/FormatContent.jsx";
import CodePerformanceContainer from "@/components/tools/CodePerformanceContent.jsx";
import CustomButton from "@/components/common/CustomButton.jsx";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("hash")

    const getTabStyles = (tabId, currentTab, color) => {
        const baseStyles = "px-1 w-26 text-center rounded-md";

        const colorMap = {
            blue: {
                active: "bg-blue-500 text-white font-bold",
                inactive: "bg-blue-300"
            },
            indigo: {
                active: "bg-indigo-500 text-white font-bold",
                inactive: "bg-indigo-300"
            },
            violet: {
                active: "bg-violet-500 text-white font-bold",
                inactive: "bg-violet-300"
            },
            fuchsia: {
                active: "bg-fuchsia-500 text-white font-bold",
                inactive: "bg-fuchsia-300"
            }
        };

        const isActive = tabId === currentTab;
        const colorStyles = colorMap[color][isActive ? 'active' : 'inactive'];

        return `${baseStyles} ${colorStyles}`;
    };

    const tabs = [
        { id: 'hash', label: 'Hash', color: "blue" },
        { id: 'format', label: 'Format', color: "indigo" },
        { id: 'performance', label: 'Code Performance', color: "violet" },
        { id: 'color', label: 'Color Converter', color: "fuchsia" }
    ];

    const RenderContent = () => {
        switch(activeTab) {
            case 'hash':
                return <HashContent />;
            case 'format':
                return <FormatContent />;
            case 'performance':
                return <CodePerformanceContainer />;
            case 'color':
                return <ColorConverterContent />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="flex justify-center space-x-3 p-2">
                <div className="flex space-x-3 p-3 bg-gray-200 rounded-md">
                    {tabs.map(tab => (
                        <CustomButton
                            key={tab.id}
                            title={tab.label}
                            className={getTabStyles(tab.id, activeTab, tab.color)}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <RenderContent />
            </div>
        </div>
    )
};

export default Tabs;