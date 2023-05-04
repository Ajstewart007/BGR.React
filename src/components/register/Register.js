import "./Register.css";
import { useAuth0 } from "@auth0/auth0-react";
import React, { userRef, useState, useEffect} from "react";
import axios from '../../api/axiosconfig';

const REGISTER_URL = '/api/v1/gamer';

const Register = () => {

    const {user, isAuthenticated} = useAuth0();

    const [email, setEmail] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [prefPlayTime, setPlayTime] = useState('');
    const [complexity, setComplexity] = useState('');
    const [prefDomains, setDomain] = useState('');

    const handleSubmit = async (e) => {

        const email = user?.email

        console.log(JSON.stringify({email, groupSize, prefPlayTime, complexity, prefDomains }));

            const response = await axios.post(REGISTER_URL,
                JSON.stringify({email, groupSize, prefPlayTime, complexity, prefDomains}),
                {
                    headers: { 
                    'Content-Type': 'application/json', 
                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                },
                }
            ), withCredentials=false;
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            
        
    }


    return(

        isAuthenticated &&(


        <div>
        <form onSubmit={handleSubmit}>  

            <h3>Preferences</h3>
                <div className="input">
                    <label htmlFor="groupSize">Group Size: </label>
                    <input
                            type="text"
                            id="groupSize"
                            onChange={(e) => setGroupSize(e.target.value)}
                            value={groupSize}
                            required
                        />
                </div>
                <div className="input">
                    <label htmlFor="prefPlayTime">Game Length:  </label>
                    <select id="prefPlayTime"
                            onChange={(e) => setPlayTime(e.target.value)}
                            value={prefPlayTime}
                            required>
                    <option value="Play Time">--Play Time--</option>
                    <option value="Long">Long</option>
                    <option value="Medium">Medium</option>
                    <option value="Short">Short</option>
                    </select>

                    <label htmlFor="complexity">Game Difficulty:    </label>
                    <select id="complexity"
                            onChange={(e) => setComplexity(e.target.value)}
                            value={complexity}
                            required>
                    <option value="Difficulty">--Difficulty--</option>
                    <option value="Hard">Hard</option>
                    <option value="Medium">Medium</option>
                    <option value="Easy">Easy</option>
                    </select>

                    <label htmlFor="prefDomains">Game Category: </label>
                    <select id="prefDomains"
                            onChange={(e) => setDomain(e.target.value)}
                            value={prefDomains}
                            required>
                    <option value="Category">--Category--</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Thematic">Thematic</option>
                    <option value="Family">Family</option>
                    <option value="Wargames">Wargames</option>
                    <option value="Abstract">Abstract</option>
                    </select>
                </div>
            <button type="submit">Update Preferences</button>
            </form>
            </div>
            )
        )
        
    
}

export default Register