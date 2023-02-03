import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";


const Navbar = (props) => {

    let friendElement =
        props.friends.map(f => <Friend name={f.name} img={f.img}/>)

    return (
        <div className={s.navbar}>
            <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/profile">Profile</NavLink>
            <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/dialogs">Dialogs</NavLink>
            <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/posts">Posts</NavLink>
            <div>
                <h4>Friends</h4>
                <div className={s.friends__list}>
                    {friendElement}
                </div>
            </div>
        </div>
    );
}

export default Navbar;