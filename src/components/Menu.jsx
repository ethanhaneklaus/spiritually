import React, { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom"
import { FavoritesContext } from "../context/FavoritesContext";
import { QuoteContext } from "../context/QuoteContext";
import { UserContext } from "../context/UserContext";

function Menu() {

    const { loggedInUser, logout } = useContext(UserContext);
    const { clear } = useContext(FavoritesContext);
    const { setQuoteResults } = useContext(QuoteContext);

    return (
        <nav className="topbg">
            {loggedInUser && (
                <>
                    <Nav>
                        <NavLink className="link mar" to="/quote">Quote</NavLink>
                        <NavLink className="link mar" to="/tarot">Tarot</NavLink>
                        <NavLink className="link mar" to="/login" onClick={() => { clear(); setQuoteResults([]); logout(); }}>Logout</NavLink>
                    </Nav>
                </>
            )
            }
            {
                !loggedInUser && (
                    <>
                        <Nav>
                            <NavLink className="link mar" to="/login">Login</NavLink>
                            <NavLink className="link mar" to="/register">Register</NavLink>
                        </Nav>
                    </>
                )
            }
        </nav >
    );
}

// 

export default Menu;