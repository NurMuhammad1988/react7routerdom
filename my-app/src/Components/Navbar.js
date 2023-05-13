import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <div>
            <nav className='navbarsss'>
                <div ><Link to="/"> <h3>LOGO GO GO GO</h3> </Link></div>
                <ul>
                    <li><Link to="/home"><h4>Home</h4></Link></li>
                    <li><Link to="/mains"><h4>Mains</h4></Link></li>
                    <li><Link to="/sections"><h4>Sections</h4></Link></li>
                    <li><Link to="/menus"><h4>Menus</h4></Link></li>
                    {/*<li><Link to="/reactbootstrap"><h4>Reactbotstrap</h4></Link></li>*/}
                    {/* <li><Link to="/react_bootstraps"><h4>React-bootstrap</h4> </Link> </li>*/}
                </ul>
            </nav>
        </div>
    )
}
