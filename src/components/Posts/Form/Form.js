import React from 'react';

const Form = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }


    return  (
        <div  >
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} cols="20" rows="2"></textarea>
            </div>
            <div>
                <button onClick={addPost} >Add message</button>
            </div>
        </div>
    )
}

export default Form;