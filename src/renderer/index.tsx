import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PatientList from './components/PatientList/PatientList';
import KabizlikInkotinansForm from './components/Forms/KabizlikInkotinans/KabizlikInkotinansForm';
import FormList from './components/Forms/FormList/FormList';
import BarsakYonetim from './components/Forms/BarsakYonetim/BarsakYonetim';
import NavbarForm from './components/Navbar/NavbarForm';
import PatientForm from './components/PatientForm/PatientForm';
import KolorektalHastaFormu from './components/Forms/KolorektalHastaFormu/KolorektalHastaFormu';
import LaksatifGunluk from './components/Forms/LaksatifGunluk/LaksatifGunluk';

render(
  <BrowserRouter>
    <NavbarForm />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="patients" element={<PatientList />} />
        <Route path="new-patient" element={<PatientForm />} />
        <Route path="forms" element={<FormList />} />
        <Route path="form/barsak-yonetim" element={<BarsakYonetim />} />
        <Route path="form/kabizlik-form" element={<KabizlikInkotinansForm />} />
        <Route path="form/kolorektal-form" element={<KolorektalHastaFormu />} />
        <Route path="form/laksatif-form" element={<LaksatifGunluk />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
