import Header from '../components/Header/header'
import SearchBar from '../components/SearchBar/SearchBar'
import PsychologistSearchElement from '../components/PsychologistSearchElement/PsychologistSearchElement';
import Footer from '../components/Footer/Footer';
import { Collapse, Dropdown, Ripple, Rating, initTE } from 'tw-elements';
import { useEffect } from 'react';

export default function SearchPage() {
    useEffect(() => {
      initTE({ Collapse, Dropdown, Ripple, Rating });
    }, []);
    return (
       <>
         <Header/>
         <SearchBar/>
         <PsychologistSearchElement/>
         <PsychologistSearchElement/>
         <PsychologistSearchElement/>
         <Footer/>
       </>
    );
    }

    //<SearchBar/>
    //<MenuResponsive/>
