import Post from "./Post/Post"
import s from "./Posts.module.css"
import React from 'react';
import Form from "./Form/Form";


const Posts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} like={p.like} />);


    return (

        <div className={s.wrapper}>
            <h2>Post page</h2>
            {postsElements}
            <Form addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    )
};

export default Posts;