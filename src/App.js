import './App.css';
import api from './api/axiosconfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Recommend from './components/recommend/RecommendDisplay';
import Recruit from './components/recruit/Recruit';
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";



function App() {

  const {isLoading, error} = useAuth0;

  const[games, setGames] = useState();
  const getGames = async () =>{

    try {
      const response = await api.get("/api/v1/gamer")
      console.log(response.data);
      setGames(response.data);

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    getGames;
  },[])

  return (
    <div className="App">
      <Header/>
      {error && <p> Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (<Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/recommended" element={<Recommend/>}></Route>
          <Route path="/recruit" element={<Recruit/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
      </Routes>)}
    </div>
  );
}

export default App
