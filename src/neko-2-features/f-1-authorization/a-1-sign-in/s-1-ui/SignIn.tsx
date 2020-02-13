import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

interface ISignInProps {

}

const SignIn: React.FC<ISignInProps> = (
    {

    }
) => {

    console.log('render SignIn');
    return (
        <div
            style={{
            marginTop: "200px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: "wrap",
            flexDirection: "column",
        }}>     sign-in
            <input type="text"/>
            <input type="text"/>
            <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: "wrap",
            }}>
                <input type="checkbox" />Remember me
            </div>
            <input type="button" value="Sign in"/>
            <NavLink to={REGISTER_PATH}>Registration</NavLink>




        </div>
    );
};

export default SignIn;
