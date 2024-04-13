import  { NavLink} from 'react-router-dom';

import HeaderArt from "../../styles/header-art";


const Header = () =>{


    return (
        <>
            <HeaderArt>
                <nav class="navbar">
                    <div class="nav_container">
                        <ul class="list">
                            <NavLink
                                className="list_item"
                                to="/"
                                style={{ textDecoration: 'none'}}
                            >
                                Inicio
                            </NavLink>
                            
                            <NavLink
                                className="list_item"
                                to="/login"
                                style={{ textDecoration: 'none'}}
                            >
                                Login
                            </NavLink>

                            <NavLink
                                className="list_item"
                                to="/account"
                                style={{ textDecoration: 'none'}}
                            >
                                Cuentas
                            </NavLink>

                            <NavLink
                                className="list_item"
                                to="/transaction"
                                style={{ textDecoration: 'none'}}
                            >
                                Transacciones
                            </NavLink>
                        </ul>
                        <figure class="nav_logo">
                            <div>
                                <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="Menu" class="nav_img"/>
                            </div>
                        </figure>
                    </div>
                </nav>
            </HeaderArt>
        </>
    )
}

export default Header;