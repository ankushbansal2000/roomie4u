'use client'
// import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState<any>();
    useEffect(() => {
    setIsLogged(!!localStorage.getItem('token'));  
    }, []);
    console.log(isLogged, "logged");

    if(!isLogged){
        router.push('/login')
    }
  

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     cache: 'no-store'
    // });
    // const data = await res.json()
    // console.log("layout page", data);
    return (
        <>

      { isLogged ? <div>
            <div className="card rounded-none">
              <Link href="/todo">
                Todo List
              </Link>
            </div>

            <div className="card rounded-none">
              <Link href="/card">
                Cards
              </Link>
            </div>


        </div> : <div className='card rounded-none'>Loggedin required</div> }
        </>
    ) 
}