import React, {useState, useEffect} from 'react'
import './Recommend.css'
import { useAuth0 } from "@auth0/auth0-react";
import RecommendService from './RecommendService';
import OwnedGames from '../ownedGames/AddOwnedGames';
import InterestedGames from '../interestedGames/AddInterestedGames'

const RECOMMEND_URL = 'http://localhost:8080/api/v1/game/recommend';
const ALL_GAME_URL = 'http://localhost:8080/api/v1/game';




function Recommend() {

    const {user, isAuthenticated, isLoading, error} = useAuth0();
    
    const [games, setGames] = useState([])
    const [ownedGames, setOwnedGames] = useState([])


    useEffect(() => {
        getRecommendations()
    }, [])

    const getRecommendations = () => {

        const email = user?.email
        var url = RECOMMEND_URL

        if (!isAuthenticated) url = ALL_GAME_URL

        RecommendService.getRecommendations(url, email).then((response) => {
            setGames(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            
            <div className = "container">
            <table className = "table table-striped">

            <thead>
                    <tr>
                        <th> Game Id</th>
                        <th> Game Name</th>
                        <th> Year Published</th>
                        <th> Minimum Players</th>
                        <th> Maximum Players</th>
                        <th> Play Time</th>
                        <th> Minimum Age</th>
                        <th> Rating</th>
                        <th> complexity</th>
                        <th> rank</th>
                        <th> domain</th>

                    </tr>
            </thead>
            <tbody>
                    {
                        games.map(
                                game =>
                                <tr key = {game.id}>
                                    <td> {game.id }</td>
                                    <td> {game.name }</td>
                                    <td> {game.yearPublished }</td>    
                                    <td> {game.minPlayers}</td>
                                    <td> {game.maxPlayers}</td>
                                    <td> {game.playTime}</td>
                                    <td> {game.minAge}</td>
                                    <td> {game.rating}</td>
                                    <td> {game.complexity}</td>
                                    <td> {game.rank}</td>
                                    <td> {game.domain}</td>
                                </tr>

                        )
                    }
            </tbody>


            </table>
            </div>
        </div>
    )
}

export default Recommend