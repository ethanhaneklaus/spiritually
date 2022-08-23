import React, { useContext } from "react";
import { NavLink } from "react-router-dom"
import { FavoritesContext } from "../context/FavoritesContext";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";

function Menu() {

    const { loggedInUser, logout } = useContext(UserContext);
    const { clear } = useContext(FavoritesContext);
    const { setSearchResults } = useContext(SearchContext);

    return (
        <nav>
            {loggedInUser && (
                <>
                    <div>
                        <NavLink to="/quotes">Quotes</NavLink>
                        {/* <NavLink to="/favorites">Favorites</NavLink> */}
                    </div>
                    <div>
                        <NavLink onClick={() => {
                            clear();
                            setSearchResults([]);
                            logout();
                        }}
                        >Logout</NavLink>
                    </div>
                </>
            )}
            {!loggedInUser && (
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </>
            )}
        </nav>
    );
}

// 

export default Menu;