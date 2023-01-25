import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
    );
}

export default Navbar;