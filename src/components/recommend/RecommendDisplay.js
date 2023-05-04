
import OwnedGames from '../ownedGames/AddOwnedGames';
import InterestedGames from '../interestedGames/AddInterestedGames'
import Recommend from './Recommend'
import { useAuth0 } from "@auth0/auth0-react";




const RecommendDisplay = () =>{

const {user, isAuthenticated} = useAuth0();

    return(
        
        
        <div className="container">
            <div>
            <div className = "title">
                <h1 className = "text-center">Recommendations</h1>
            </div>
            </div>
            

        <OwnedGames/>
        <InterestedGames/>
        <Recommend/>
        </div>
    
    )

}

export default RecommendDisplay