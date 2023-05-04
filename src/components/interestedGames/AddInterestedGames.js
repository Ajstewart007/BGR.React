import { useAuth0 } from "@auth0/auth0-react";
import React, { userRef, useState, useEffect} from "react";
import axios from '../../api/axiosconfig';


const INTERESTED_GAMES_URL = '/api/v1/gamer/addInterestedGame';

function InterestedGames () {


    const {user, isAuthenticated} = useAuth0();
    const [gameId, setGameId] = useState('');

const handleSubmit = async (e) => {

    const gamerEmail = user?.email

    const params ={
        params :{
            'gamerEmail': gamerEmail,
            'gameId': gameId
        }
    }

    console.log(JSON.stringify({gamerEmail, gameId}));

        const response = await axios.post(
            INTERESTED_GAMES_URL, null, params
        ), withCredentials=false;
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))
        
    
}

return(
    isAuthenticated && (
        <div className="input">
            <form onSubmit={handleSubmit}>  
                    <label htmlFor="gameId">Interested Games: </label>
                    <input
                            type="text"
                            id="gameId"
                            onChange={(e) => setGameId(e.target.value)}
                            value={gameId}
                            required
                        />
            <button type="submit">Update Interested Games</button>
            </form>
            </div>

    )
    
)

}

export default InterestedGames;