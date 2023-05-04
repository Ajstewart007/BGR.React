import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
import ProfileDisplay from "../Profile/ProfileDisplay";
import OwnedGamesDisplay from "../ownedGames/DisplayOwnedGames";
import InterestedGamesDisplay from "../interestedGames/DisplayInterestedGames";
import Register from "../register/Register";

const Profile = () => {


    return(
        <div>
        <ProfileDisplay/>
        <Register/>
        <OwnedGamesDisplay/>
        <InterestedGamesDisplay/>
            <div className="container">
                <LoginButton/>
                <LogoutButton/>
            </div>
        </div>
)
}

export default Profile