import React from "react";
import { UserDto } from '../classes/user.dto';

const Profile = ({user}:{user: UserDto}) => {

    return (
        <>
            <h1>Tvoji podatki</h1>
            <h3>User: {user.user}</h3>
            <h3>Email: {user.email}</h3>
        </>
    );
}

export default Profile;