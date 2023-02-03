import s from './dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.img} src={props.img} alt="avatarImg"/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Dialog;