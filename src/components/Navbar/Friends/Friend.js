import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend__card}>
            <img className={s.friends__img} src={props.img} alt="user"/>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Friend;