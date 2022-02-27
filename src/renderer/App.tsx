/* eslint-disable react/button-has-type */
import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionForm from './components/QuestionsForm/QuestionForm';
import PatientForm from './components/PatientForm/PatientForm';
import PatientList from './components/PatientList/PatientList';

export default function App() {
  return (
    <div>
      {/* <PatientForm />
      <PatientList /> */}
      {/* <QuestionForm PatientId={'R7gWIpSv4Zi3x3SaZ0Bh'} /> */}
      <PatientForm />
    </div>
  );
}
