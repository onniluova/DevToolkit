import React, {useState} from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("hash")

    const tabs = [
        {   id: 'hash', label: 'Hash' },
        {   id: 'format', label: 'Format' },
        {   id: 'efficiency', label: 'Efficiecy Test' }
    ]

    const RenderContent = () => {
        switch(activeTab) {
            case 'hash':
                return (
                    <div className="space-y-4">
                        <h3 className="text-1x font-semibold">Hashing</h3>
                    </div>
                )
            case 'format':
                return (
                    <div className="space-y-4">
                        <h3 className="text-1x font-semibold">Code Formatting</h3>
                    </div>
                )
            case 'efficiency':
                return (
                    <div className="space-y-4">
                        <h3 className="text-1x font-semibold">Efficiency Timer</h3>
                    </div>
                )
        }
    }
    return (
        <div>
            <div className="flex space-x-4">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                <RenderContent />
            </div>
        </div>
    )
}

export default Tabs