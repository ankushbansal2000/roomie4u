'use client'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const onLogInButtonClick = () => {
        router.push('/login');
    }

    return (
        <div>
            <Button onClick={() => onLogInButtonClick()}>
                Login
            </Button>
        </div>
    )
}

export default Navbar;