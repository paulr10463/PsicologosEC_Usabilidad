import Header from '../components/Header/Header'
import DetailsBar from '../components/DetailsBar/DetailsBar';
import Footer from '../components/Footer/Footer';
import { Collapse, Dropdown, Ripple, Rating, initTE } from 'tw-elements';
import { useEffect } from 'react';
import PsychologistDetails from '../components/PsychologistDetails/PsychologistDetails';

export default function DetailsPage() {
  useEffect(() => {
    initTE({ Collapse, Dropdown, Ripple, Rating });
  }, []);
  return (
      <>
        <Header/>
        <DetailsBar/>
        <PsychologistDetails/>
        <Footer/>
      </>
  );
}