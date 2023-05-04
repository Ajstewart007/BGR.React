import axios from "axios";

const OWNED_URL = 'http://localhost:8080/api/v1/gamer/ownedGames';


class DisplayOwnedGamesService{
    
    

    getOwnedGames(email){        
        return axios.get(OWNED_URL, {params:{gamerEmail: email}});
    }

}

export default new DisplayOwnedGamesService();