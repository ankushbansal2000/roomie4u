'use client';
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const onChangeRoute = (str: string) => {
        router.push(str);
    }

    return (
        <>

            <div className="card rounded-none">
              <div onClick={ () => onChangeRoute('/todo')}>
                Todo List
              </div>
            </div>

            <div className="card rounded-none">
              <div onClick={ () => onChangeRoute('/card')}>
                Cards
              </div>
            </div>


        </>
    ) 
}