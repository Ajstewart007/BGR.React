import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";

const ProfileDisplay = () =>{

const {user, isAuthenticated} = useAuth0();

    return(


        isAuthenticated && (
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user.name}/>}
                <h2>{user?.name}</h2>
            </article>
        )

        


    
    )

}

export default ProfileDisplay