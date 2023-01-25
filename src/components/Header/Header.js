import s from "./Header.module.css"

const Header = () => {
    return  (
        <div className={s.header} >
            <img  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png" alt="logo"/>
        </div>
    )
}

export default Header;