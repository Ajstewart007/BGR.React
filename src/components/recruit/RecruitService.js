import axios from "axios";

const RECRUIT_URL = 'http://localhost:8080/api/v1/gamer/recruits';


class RecruitService{
    
    

    getRecruits(email){        
        return axios.get(RECRUIT_URL, {params:{gamerEmail: email}});
    }

}

export default new RecruitService();