import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import CreatePost from './pages/CreatePost';
import axios from 'axios';
import {UserDto} from './classes/user.dto';
import Profile from './pages/Profile';
import Thread from "./pages/Thread";
import EditPost from "./pages/EditPost";
import Posts from "./pages/Posts";

function App() {

  const [user,setUser] = useState<UserDto>(new UserDto(0, '', ''));

  const currentUser = async () => {
    try{
      const res = await axios.get('http://localhost:3001/users/profile', {withCredentials: true});

      if(res.status == 200){
        console.log(res.data);
        setUser(res.data);
      }
    }
    catch (e){

    }
  }

  useEffect( () => {
    currentUser();
  }, []);


  return (
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/create'} element={<CreatePost />} />
            <Route path={'/profile'} element={<Profile user={user}/>} />
            <Route path={'/thread/:id'} element={<Thread />} />
            <Route path={'/update_post'} element={<EditPost />} />
            <Route path={'/posts/:id'} element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
  );
}

export default App;