import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../login/login.css";

const Register = () => {
    document.title = "Регистрация";

    const navigate = useNavigate();

    const registerCheck = (e) => {
        const login = document.querySelector(".logInput");        
        const pass = document.querySelector(".passInput");
        const pass2 = document.querySelector(".pass2Input");

        if (login.value.trim() === "" || pass.value.trim() === "" || pass2.value.trim() === "") {
            document.querySelector(".loginBtn").disabled = true;
        } else {
            document.querySelector(".loginBtn").disabled = false;
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        let errorMessage = document.querySelector(".errorMessage")

        await fetch('http://foreveryoung.byethost13.com/scripts/register.php', {
            method: 'POST',
            body: new FormData(document.querySelector(".loginForm form"))
        })
            .then(response => response.text())
            .then(result => {
                console.log(result);
                if (result.includes("error length login")) {                    
                    errorMessage.textContent = "Недопустимая длина логина";
                    errorMessage.style.display = "block";
                } else if (result.includes("error length pass")) {                    
                    errorMessage.textContent = "Недопустимая длина пароля";
                    errorMessage.style.display = "block";
                } else if (result.includes("error diff pass")) {                    
                    errorMessage.textContent = "Пароли не совпадают";
                    errorMessage.style.display = "block";
                } else if (result.includes("error eqv login")) {                    
                    errorMessage.textContent = "Данный логин уже используется";
                    errorMessage.style.display = "block";
                } else if (result.includes("error space")) {                    
                    errorMessage.textContent = "Ошибка ввода (поля не должны содержать пробелы)";
                    errorMessage.style.display = "block";
                } else if (result.includes("Succesful register")) {
                    errorMessage.style.display = "none";
                    navigate("/");
                } else {
                    errorMessage.textContent = "Что-то пошло не так";
                    errorMessage.style.display = "block";
                }
            })
    }

    return (
        <div className="loginSection">
            <div className="container">
                <div className="loginForm registr">
                    <h1>Регистрация</h1>
                    <form id="regForm" onSubmit={handleRegister}>
                        <div className="form-floating mb-1">
                            <input className="logInput form-control" id="floatingInput" placeholder="Логин" name="login" onInput={registerCheck}/>
                            <label htmlFor="floatingInput">Введите логин:</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input className="passInput form-control" id="floatingPassword" type="password" placeholder="Пароль" name="password" onInput={registerCheck}/>
                            <label htmlFor="floatingPassword">Введите пароль:</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input className="pass2Input form-control" id="floatingPassword2" type="password" placeholder="Повторите пароль" name="password2" onInput={registerCheck}/>
                            <label htmlFor="floatingPassword2">Повторите пароль:</label>
                        </div>
                        <div className="logBtns">
                            <button disabled className="loginBtn btn btn-primary" type="submit">Зарегистрироваться</button>
                            <div>Уже есть аккаунт? <Link to="/"><span className="in" >Войти</span></Link></div>
                        </div>
                    </form>
                    <p className="errorMessage">Ошибка! Проверьте правильность данных</p>
                </div>
            </div>
        </div>
        
    )
}

export default Register;