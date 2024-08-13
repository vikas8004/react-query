import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul style={{ gap: "20px", listStyle: 'none' }}>
                <li><Link style={{ textDecoration: "none" }} to={"/"}>Home</Link></li>
                <li><Link style={{ textDecoration: "none" }} to={"/tradition"}>Tradition</Link></li>
                <li><Link style={{ textDecoration: "none" }} to={"/react-query"}>React-query</Link></li>
                <li>
                    <Link to={"/parallel"}>Parallel</Link>
                </li>
                <li>
                    <Link to={"/dynamic-parallel"}>Dynamic parallel</Link>
                </li>
                 <li>
                    <Link to={"/dependent"}>Dependent</Link>
                </li>
                <li>
                    <Link to={"/infinite-query"}>Infinite query</Link>
                </li>
                <li>
                    <Link to={"/post"}>Post Req</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar