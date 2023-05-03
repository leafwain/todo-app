import React, { useCallback, useContext, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

import "./login.css";

const Login = ({ setLogin, setUserId }) => {
    document.title = "Авторизация";

    const navigate = useNavigate();

    const switcher = (e) => {
        const form = document.querySelectorAll(".loginForm");
        const login = document.querySelector(".login");
        const registr = document.querySelector(".registr");

        if (e.target.className === "up") {
            login.classList.add("hide");
            registr.classList.remove("hide");
        } else if (e.target.className === "in") {
            registr.classList.add("hide");
            login.classList.remove("hide");
        }        
    }


    const loginCheck = (e) => {
        const login = document.querySelector(".logInput");
        const pass = document.querySelector(".passInput");

        if (login.value.trim() === "" || pass.value.trim() === "") {
            document.querySelector(".loginBtn").disabled = true;
        } else {
            document.querySelector(".loginBtn").disabled = false;
        }
    }    

    const handleLogin = async (e) => {
        e.preventDefault();

        await fetch('http://foreveryoung.byethost13.com/scripts/login.php', {
            method: 'POST',
            body: new FormData(document.querySelector(".loginForm form"))
          })
            .then(response => response.text())
            .then(result => {
                console.log(result);
                if (result === "Ошибка") {
                    document.querySelector(".errorMessage").textContent = "Ошибка! Проверьте правильность данных";
                    document.querySelector(".errorMessage").style.display = "block";
                } else {
                    document.querySelector(".errorMessage").style.display = "none";
                    setUserId(JSON.parse(result)[0]);
                    setLogin(JSON.parse(result)[1]);
                    navigate("/todo");
                    
                }
            });
    }

    return (
        
        <div className="loginSection">
            <div className="container">
                <div className="loginForm login">
                    <h1>Авторизация</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-floating mb-1">
                            <input className="logInput form-control" id="floatingInput" placeholder="Логин" name="login" />
                            <label htmlFor="floatingInput">Введите логин:</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input className="passInput form-control" id="floatingPassword" type="password" placeholder="Пароль" name="password" onInput={loginCheck}/>
                            <label htmlFor="floatingPassword">Введите пароль:</label>
                        </div>
                        <div className="logBtns">
                            <button disabled type="submit" name="submit" className="loginBtn btn btn-primary" >Войти</button>
                            <div>Нет аккаунта? <Link to="/register"><span className="up" >Зарегистрироваться</span></Link></div>
                        </div>

                        <p className="errorMessage">Ошибка! Проверьте правильность данных</p>
                        
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Login;