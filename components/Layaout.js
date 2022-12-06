import {React, useEffect} from 'react';
import Navbar from './Navbar';
import {Router, useRouter} from 'next/router'
const Layaout = ({children}) => {
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeStart', url => console.log(url))
    }, []);
    return (
        <>
            <Navbar/>
            <main className='container py-4'>
            {children}
            </main>
            <footer className='bg-dark text-light text-center'>
                <div className='container p-4'>
                    <h1>&copy; Ramiro Correa Portfolio</h1>
                    <p>2000 - {new Date().getFullYear()}</p>
                    <p>All rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Layaout;
