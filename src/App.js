import './App.css';
import { useState } from 'react';
import PostsPage from './PostsPage';
import MessagePage from './MessagePage';
import Login from './Login';
import Footer from './Footer';
import Header from './Header';
import Register from './Register';
import ProfilePage from './ProfilePage';
import { Routes, Route } from "react-router-dom";
import ChatPage from './ChatPage';
import OtherProfilePage from './OtherProfilePage';

function App() {
  return (
    <div>
      <div className='gradient-custom'>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/message" element={<MessagePage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/otherprof/:personId" element={<OtherProfilePage />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
