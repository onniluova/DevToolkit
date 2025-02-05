import React from 'react'
import Tabs from "@/components/common/Tabs.jsx";

const Home = () => {
    return (
        <div className="text-gray-800 m-5">
            <h1 className="text-5xl font-bold text-center">Developer's Toolkit</h1>
            <p className="text-center">All-in-one development utilities for modern web developers.</p>
            <Tabs />
        </div>
    )
}

export default Home