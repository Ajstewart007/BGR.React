import React, {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import RecruitService from './RecruitService';

function Recruit() {

    const {user, isAuthenticated} = useAuth0();
    const [recruits, setRecruits] = useState([])


    useEffect(() => {
        getRecruits()
    }, [])

    const getRecruits = () => {

        const email = user?.email

        RecruitService.getRecruits(email).then((response) => {
            setRecruits(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            <div>
                <h1 className = "text-center">Recruits</h1>
            </div>
            

            <table className = "table table-striped">

            <thead>
                    <tr>
                        <th> UserId</th>
                        <th> Email</th>
                        <th> Matched Game</th>
                    </tr>
            </thead>
            <tbody>
                    {
                        recruits.map(
                                recruit =>
                                <tr key = {recruit.id}>
                                    <td> {recruit.id }</td>
                                    <td> {recruit.email }</td>
                                    <td> {recruit.matchedGame }</td> 
                                </tr>

                        )
                    }
            </tbody>


            </table>

        </div>
    )
}

export default Recruit