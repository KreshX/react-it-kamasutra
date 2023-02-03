const Post = (props) => {
    return (
        <div>
            <h3 className="heading">{props.message}</h3>
            <p className="text">{props.like}</p>
        </div>
    )
};

export default Post;