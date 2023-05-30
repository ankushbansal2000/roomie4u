'use client'
import styles from './../css/header.module.css';
import Image from 'next/image';
import Navbar from './navbar';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const onChangeRoute = () => {
        router.push('/');
    }
    return(
        <div >
            <div className={styles.header}>
                <div className={styles.logo} onClick={() => onChangeRoute()}>
                {/* <Image
                    src="/profile.png"
                    width={50}
                    height={50}
                    alt="Romie Logo"
                    /> */}
                    Roomie
                </div>
                <div className={styles.naivgation_links} >
                <Navbar></Navbar>
                </div>
            </div>
        </div>
    )
}

export default Header;