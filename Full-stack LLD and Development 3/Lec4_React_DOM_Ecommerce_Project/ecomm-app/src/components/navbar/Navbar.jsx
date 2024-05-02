import { Link, NavLink,  } from "react-router-dom";
import './navbar.css';
import {FaOpencart} from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/electronics">Electronic</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/sports'>Sports</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/clothing'>Clothing</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/house-items'>House Items</NavLink>
                </li>
            </ul>

            <div>
                <Link to='/cart' className='cart-icon-container'>
                
                <FaOpencart className='cart-icon' />
                </Link>
            </div>
        </>
    )
}

export default Navbar;