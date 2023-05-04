import axios from "axios";

const RECOMMEND_URL = 'http://localhost:8080/api/v1/game/recommend';


class RecommendService{
    
    

    getRecommendations(url, email){        
        return axios.get(url, {params:{gamerEmail: email}});
    }

}

export default new RecommendService();