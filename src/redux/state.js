import {rerenderEntireTree} from "../render";



let state = {
    posts: [
        {id: 1, message: 'Text1', like: 12},
        {id: 2, message: 'Text2', like: 13},
        {id: 3, message: 'Text3', like: 14},
    ],

    newPostText: '',

    dialogs: [
        {id: 1, name: 'Name1', text: 'Text1', img: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 2, name: 'Name2', text: 'Text2', img: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {
            id: 3,
            name: 'Name3',
            text: 'Text3',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU'
        },
    ],

    friends: [
        {id: 1, name: 'User1', img: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 2, name: 'User2', img: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {id: 3, name: 'User3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU'},
    ],


}

window.state = state;

export let addPost = () => {
    let newPost = {
        id:5,
        message: state.newPostText,
        like: 0
    }
    state.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;