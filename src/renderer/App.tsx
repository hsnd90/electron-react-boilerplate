/* eslint-disable react/button-has-type */
import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionForm from './components/QuestionsForm/QuestionForm';
import PatientForm from './components/PatientForm/PatientForm';
import PatientList from './components/PatientList/PatientList';

export default function App() {
  const patient = {
    PatientId: 'QydVs8AJKhwF9CrjTaCC',
    FullName: 'Hasan Ada',
    Age: 32,
    ProtocolNo: 'A1234',
    Gender: 'Erkek',
    IdentityNo: '1234856',
    PhoneNumber: 123123123,
    Birthday: new Date(),
    RecordDate: new Date(),
  };
  return (
    <div>
      {/* <PatientForm />
      <PatientList /> */}
      {/* <QuestionForm PatientId={'R7gWIpSv4Zi3x3SaZ0Bh'} /> */}
      <QuestionForm id={patient.PatientId} />
    </div>
  );
}
