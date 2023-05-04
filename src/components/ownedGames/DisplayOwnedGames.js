import React, {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import DisplayOwnedGamesService from './DisplayOwnedGamesService';

function OwnedGamesDisplay() {

    const {user, isAuthenticated} = useAuth0();
    const [games, setGames] = useState([])


    useEffect(() => {
        getOwnedGames()
    }, [])

    const getOwnedGames = () => {

        const email = user?.email

        DisplayOwnedGamesService.getOwnedGames(email).then((response) => {
            setGames(response.data)
            console.log(response.data);
        });
    };

    return (
        isAuthenticated&&(
        <div className = "container">
            <div>
                <h2 className = "text-center">Owned Games</h2>
            </div>
            

            <table className = "table table-striped">

            <thead>
                    <tr>
                        <th> gameId</th>
                        <th> Name</th>
                    </tr>
            </thead>
            <tbody>
                    {
                        games.map(
                                game =>
                                <tr key = {game.id}>
                                    <td> {game.id }</td>
                                    <td> {game.name}</td>
                                </tr>

                        )
                    }
            </tbody>


            </table>

        </div>
    ))
}

export default OwnedGamesDisplay