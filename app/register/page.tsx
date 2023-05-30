'use client'
import { LoginDetails } from "../models/login.model";
import { server } from "../utils/server";
import { postData } from "../utils/service";

export default function Register(){

   const SubmitRegistration = async (event: any) => {
    event.preventDefault();
    let loginDetails : LoginDetails = {
        username: event.target.username.value,
        password: event.target.password.value
    }
    const res = await postData(`${server}/api/register`, loginDetails);
    console.log(res, "registartion response");
    }
    return(
        <div>
            <form onSubmit={SubmitRegistration}>
            <input type="text" name="username"></input>
            <input type="text" name="password"></input>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}