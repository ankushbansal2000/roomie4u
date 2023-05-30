'use client'
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
    const {push } = useRouter();

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        push('/');
    }, [push]);

}
export default Logout;