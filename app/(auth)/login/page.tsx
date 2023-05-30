'use client'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { server } from "../../utils/server";
import { postData } from "../../utils/service";
import Link from 'next/link';
import { LoginDetails } from "../../models/login.model";
import Main from "@/app/components/Main";
import { Input, Button } from '@nextui-org/react';


export default function Login() {
    const router = useRouter();
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if(event.target.username.value && event.target.password.value){
            let loginDetails : LoginDetails = {
                username: event.target.username.value,
                password: event.target.password.value
            }
            // const res = await postData(`${server}/api/login`, loginDetails);
            // console.log(res, "login response");
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', 'bajhdaksjdasdaskdas');
            router.push('/');
        } else {
            alert("Please enter username or password");
        }
         
    }

    return (
        <div>
            <Main>
            <form onSubmit={handleSubmit}>
            <Input type="text"
            name="username"
            required
    
            />
            <Input type="text" name="password"
            required
    
            />
            <Button type="submit">Save</Button>
            <div>
              <Link href="/register">Create a new Form</Link>
            </div>
            </form>
            </Main>
        </div>
    ) 
}