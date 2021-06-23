import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

const FixedComponents = () => {
    return (
        <div className="d-flex h-100 p-0 m-0 position-fixed start-0">
            <Navbar />
            <Header />
        </div>
    )
}

export default FixedComponents
