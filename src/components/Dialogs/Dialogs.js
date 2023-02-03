import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Form from "./Form/Form";




const Dialogs = (props) => {

    let dialogElement =
        props.dialogs.map( d => <Dialog name={d.name}  text={d.text} img={d.img}  />)

    return  (
        <div className={s.dialogs} >
            <h1>Dialogs Page</h1>
            {dialogElement}
            <Form/>
        </div>
    )
}

export default Dialogs;