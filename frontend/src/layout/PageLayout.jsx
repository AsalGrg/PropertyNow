import React from 'react'
import Navbar from '../components/Navbar'
import {UserContentProvider}  from '../context/user.context'

const PageLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default PageLayout