import Header from '../components/Header/Header';
import HomePageVideo from '../components/HomePageVideo/HomePageVideo';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About'
import { Collapse, Dropdown, Ripple, Rating, initTE } from 'tw-elements';
import { useEffect } from 'react';

export default function SearchPage() {
    useEffect(() => {
      initTE({ Collapse, Dropdown, Ripple, Rating });
    }, []);
    return (
       <>
         <Header/>
         <HomePageVideo/>
         <About/>
         <Footer/>
       </>
    );
    }

    //<SearchBar/>
    //<MenuResponsive/>
