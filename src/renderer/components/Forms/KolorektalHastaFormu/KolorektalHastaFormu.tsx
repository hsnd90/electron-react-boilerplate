/* eslint-disable jsx-a11y/label-has-associated-control */
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import PatientInfoForm from 'renderer/components/PatientInfo/PatientInfoForm';
import './KolorektalHastaFormu.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Card, Container } from 'react-bootstrap';
import ButtonBar from 'renderer/components/ButtonBar/ButtonBar';
import db from '../../../firebase';
import kolorektalform from '../../FormGroups/kolorektalform';

export default function KolorektalHastaFormu() {
  const kabizlikFormCollectionRef = collection(db, 'forms');
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedPatient] = useState(state);

  let initialValues = kolorektalform;

  if (state.formType === 'new') {
    initialValues.FormInsertDate = new Date().toLocaleString();
    initialValues = { ...initialValues, ...selectedPatient };
  } else {
    initialValues = { ...initialValues, ...selectedPatient };
    initialValues.FormUpdateDate = new Date().toLocaleString();
  }

  const createDocument = async (form: unknown) => {
    await addDoc(kabizlikFormCollectionRef, form);
  };

  const updateDocument = async (form: any) => {
    const updatedDoc = doc(db, 'forms', form.FormId);
    await setDoc(updatedDoc, form);
  };

  const navigateToForm = (path) => {
    navigate(path, {
      replace: true,
      state: { ...selectedPatient, formType: 'new' },
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      if (selectedPatient.formType === 'new') {
        values.FormInsertDate = new Date().toLocaleString();
        await createDocument(values);
      } else {
        values.FormUpdateDate = new Date().toLocaleString();
        await updateDocument(values);
      }
      resetForm();
      navigateToForm('/patients');
    },
  });

  return (
    <div>
      <PatientInfoForm patient={selectedPatient} />
      <Container fluid className="mt-1">
        <Card>
          <Card.Title>Kolorektal Hasta Formu</Card.Title>
        </Card>
        <form onSubmit={formik.handleSubmit} style={{ marginBottom: 100 }}>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="history"
              style={{ height: 150 }}
              value={formik.values.history}
              onChange={formik.handleChange}
              rows={5}
            />
            <label htmlFor="floatingTextarea2">Öykü</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              style={{ height: 150 }}
              rows={5}
              name="physical-examination"
              value={formik.values['physical-examination']}
              onChange={formik.handleChange}
            />
            <label htmlFor="floatingTextarea2">Fizik Muayene</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="surgical-history"
              value={formik.values['surgical-history']}
              onChange={formik.handleChange}
              style={{ height: 150 }}
              rows={5}
            />
            <label htmlFor="floatingTextarea2">Cerrahi Öykü</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="medical-history"
              value={formik.values['medical-history']}
              onChange={formik.handleChange}
              style={{ height: 150 }}
              rows={5}
            />
            <label htmlFor="floatingTextarea2">Tıbbi Öykü</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="feces"
              value={formik.values.feces}
              onChange={formik.handleChange}
              style={{ height: 150 }}
              rows={5}
            />
            <label htmlFor="floatingTextarea2">Dışkı</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="pee"
              value={formik.values.pee}
              onChange={formik.handleChange}
              style={{ height: 150 }}
              rows={5}
            />
            <label htmlFor="floatingTextarea2">İdrar</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="spine-condition"
              value={formik.values['spine-condition']}
              onChange={formik.handleChange}
              style={{ height: 150 }}
              rows={5}
            />
            <label htmlFor="floatingTextarea2">Omurilik / Omurga Durumu</label>
          </div>
          <ButtonBar url="/patients" />
        </form>
      </Container>
    </div>
  );
}
