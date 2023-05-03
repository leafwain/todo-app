import React, { useState } from "react";
import { BrowserRouter as Router, HashRouter, Route, Routes  } from "react-router-dom";
import PostList from "../postList";
import Login from "../login";
import Register from "../register";
import NotFound from "../notFound";

const App = () => {
    
    const [data, setData] = useState([]);  
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")) || "");
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("userId")) || -1);

    localStorage.clear();



    return (        
        <>
            <HashRouter>                
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path="/" element={<Login setLogin={setLogin} setUserId={setUserId} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/todo" element={<PostList login={login} userId={userId} data={data} setData={setData}/>} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App;