import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostListForm from "../postListForm/";

import "./postList.css";

const PostList = ({ login, userId, data, setData }) => {
    document.title = "Список задач";

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getPosts();
        setIsLoaded(true);
    }, [])

    useEffect(() => {
        if (isLoaded) {
            addPostOnDb();
        }
    }, [data])

    const addPost = (text) => {
        let checked = data.filter(item => item.flag === true);
        let notChecked = data.filter(item => item.flag === false);

        setData([...notChecked, {
            text: text,
            id: data.length === 0 ? 0 : (data.reduce((prev, cur) => prev.id > cur.id ? prev : cur)).id + 1,
            flag: false
        },
        ...checked]
        )

    }

    const deletePost = (e, id) => {
        const ind = data.findIndex(elem => elem.id === id);
        setData([...data.slice(0, ind), ...data.slice(ind + 1)]);

    }

    const checkedPost = (e, id) => {

        e.target.classList.toggle("lineThrough");
        let index = data.findIndex(post => post.id === id);
        let newItem = {
            text: data[index].text,
            id: data[index].id,
            flag: !data[index].flag
        };

        let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        let checked = newArr.filter(item => item.flag === true);
        let notChecked = newArr.filter(item => item.flag === false);

        setData([...notChecked, ...checked]);

    }

    const addPostOnDb = async () => {
        await fetch('http://foreveryoung.byethost13.com/scripts/setpost.php', {
            method: 'POST',
            headers: {
                login: login,
                userId: userId
            },
            body: JSON.stringify(data)
        })
            .then(respone => respone.text())
            .then(result => {
                console.log(result);
            })
    }

    const getPosts = async () => {
        await fetch('http://foreveryoung.byethost13.com/scripts/getpost.php', {
            method: 'GET',
            headers: {
                login: login,
                userId: userId
            }
        })
            .then(respone => respone.json())
            .then(result => {
                if (result !== "Нет данных") {
                    setData(result);
                }
                console.log(result);
            })
    }

    const logout = () => {
        localStorage.clear();
    }

    const setStorageLogin = () => {
        localStorage.setItem("login", JSON.stringify(login));
        localStorage.setItem("userId", JSON.stringify(userId))
    }
    setStorageLogin();

    let checked = [...data].filter(item => item.flag === true);
    let notChecked = [...data].filter(item => item.flag === false);

    function post(arr) {
        return arr.map((post) => {
            let classes = post.flag === true ? "postText lineThrough" : "postText";
            let text = `${post.text}`;

            return (
                <div key={post.id} mykey={post.id} className="posts">
                    <div className="post" >
                        <h1 className={classes} id={post.id} onClick={(e) => checkedPost(e, post.id)}>{arr.indexOf(post) + 1}. {text}</h1>
                    </div>
                    <div className="postIcons">
                        <button onClick={(e) => deletePost(e, post.id)} className="btnn"><i className="fas fa-trash-alt icon"></i></button>
                    </div>
                </div>
            )
        });
    }

    return (
        <div className="container">
            <Link to="/"><button className="btn btn-outline-dark" onClick={logout}>Выход</button></Link>
            <div>Привет, {login}</div>
            <div className="postBlock">
                <div className="postList">{post(notChecked)}</div>
                <PostListForm addPost={addPost} addPostOnDb={addPostOnDb} />
                <h1>Отмеченные пункты</h1>
                <div className="postList">{post(checked)}</div>
            </div>
        </div>
    )
};

export default PostList;