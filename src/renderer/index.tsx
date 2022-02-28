import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PatientList from './components/PatientList/PatientList';
import KabizlikInkotinansForm from './components/Forms/KabizlikInkotinans/KabizlikInkotinansForm';
import FormList from './components/Forms/FormList/FormList';
import BarsakYonetim from './components/Forms/BarsakYonetim/BarsakYonetim';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="patients" element={<PatientList />} />
        <Route path="forms" element={<FormList />} />
        <Route path="form/barsak-yonetim" element={<BarsakYonetim />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
