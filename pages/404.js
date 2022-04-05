import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar';
const Error = () => {
    const router = useRouter();

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>404 page is not found <button onClick={() => router.push('/')}>back to Home</button></div>
        </div>
    )
}

export default Error