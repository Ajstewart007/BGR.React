import { useAuth0 } from "@auth0/auth0-react";
import React, { userRef, useState, useEffect} from "react";
import axios from '../../api/axiosconfig';

const OWNED_GAMES_URL = '/api/v1/gamer/addOwnedGame';

const OwnedGames = () => {


    const {user, isAuthenticated} = useAuth0();
    const [ownedGames, setOwnedGame] = useState('');

const handleSubmit = async (e) => {

    const gamerEmail = user?.email
    const gameId = ownedGames

    const params ={
        params :{
            'gamerEmail': gamerEmail,
            'gameId': gameId
        }
    }

    console.log(JSON.stringify({gamerEmail, gameId}));

        const response = await axios.post(
            OWNED_GAMES_URL, null, params
            
        ), withCredentials=false;
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))
        
    
}

return(
    isAuthenticated && (
        <div className="input">
            <form onSubmit={handleSubmit}>  
                    <label htmlFor="ownedGames">Owned Games: </label>
                    <input
                            type="text"
                            id="ownedGames"
                            onChange={(e) => setOwnedGame(e.target.value)}
                            value={ownedGames}
                            required
                        />
            <button type="submit">Update Owned Games</button>
            </form>
            </div>

    )
    
)

}

export default OwnedGames;