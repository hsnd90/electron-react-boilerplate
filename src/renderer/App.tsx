/* eslint-disable react/button-has-type */
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import KabizlikInkotinansForm from './components/Forms/KabizlikInkotinans/KabizlikInkotinansForm';
import PatientForm from './components/PatientForm/PatientForm';
import PatientList from './components/PatientList/PatientList';
import NavbarForm from './components/Navbar/NavbarForm';
import LaksatifGunluk from './components/Forms/LaksatifGunluk/LaksatifGunluk';
import FekalInkotinans from './components/Forms/FekalInkotinans/FekalInkotinans';

export default function App() {
  return (
    <div className="App">
      {/* <FekalInkotinans /> */}
      <Outlet />
    </div>
  );
}
