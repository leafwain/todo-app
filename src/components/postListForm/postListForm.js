import React, { useState } from "react";

const PostListForm = ({ addPost, addPostOnDb }) => {

    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        addPost(userInput);
        setUserInput("");        
        e.target.reset();
        // addPostOnDb();
    }    

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <input onChange={handleChange} autoFocus={true} className="addText form-control mb-1" type="text" placeholder="Новый пост"></input>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        </div>
    )
};

export default PostListForm;