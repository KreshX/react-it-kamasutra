import React from 'react';

const Form = () => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return  (
        <div  >
            <div>
                <textarea ref={newMessageElement} cols="20" rows="2"></textarea>
            </div>
            <div>
                <button onClick={addMessage} >Add message</button>
            </div>
        </div>
    )
}

export default Form;