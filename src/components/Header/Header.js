import s from "./Header.module.css"

const Header = () => {
    return  (
        <div className={s.header} >
            <img className={s.img} src="https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png" alt="logo"/>
        </div>
    )
}

export default Header;