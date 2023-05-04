import axios from "axios";

const INTERESTED_URL = 'http://localhost:8080/api/v1/gamer/interestedGames';


class DisplayInterestedGamesService{
    
    

    getInterestedGames(email){        
        return axios.get(INTERESTED_URL, {params:{gamerEmail: email}});
    }

}

export default new DisplayInterestedGamesService();