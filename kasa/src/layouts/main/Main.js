import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

import "./main.css";

export default  function Main(){
    return(
        <>
            <Header/>
            <main className='main__body'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}