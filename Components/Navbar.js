import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link rel="stylesheet" href="/" >Home</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="about" >About</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="service" >service</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="blogs" >Blogs</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar