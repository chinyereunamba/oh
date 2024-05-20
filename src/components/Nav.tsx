import {  NavLink } from "react-router-dom"
import "../assets/styles/layout.css"

export default function Nav() {
    return (
        <nav className="navbar">
            <ul className="navbar__navLink">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Profile
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Contact
                </NavLink>
            </ul>
        </nav>
    )
}
