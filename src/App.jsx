import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContentContainer from './components/containers/ContentContainer.jsx'
import Tabs from './components/common/Tabs.jsx'

const App = () => {
    return (
        <ContentContainer>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </ContentContainer>
    )
}
export default App