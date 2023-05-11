import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <div>

            <nav>
                <div><Link to="/"> LOGO </Link></div>

                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/section">Section</Link></li>
                    {/*<li><Link to="/react_bootstrap">React-bootstrap</Link></li>*/}

                </ul>
            </nav>

        </div>
    )
}
