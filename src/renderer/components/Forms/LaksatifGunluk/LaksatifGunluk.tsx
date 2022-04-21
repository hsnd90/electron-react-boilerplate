import { Container, Form, Card, Button } from 'react-bootstrap';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import './LaksatifGunluk.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import ButtonBar from 'renderer/components/ButtonBar/ButtonBar';
import PatientInfoForm from 'renderer/components/PatientInfo/PatientInfoForm';
import db from '../../../firebase';
import laksatif from '../../FormGroups/laksatif';

export default function LaksatifGunluk() {
  const laksatifFormCollectionRef = collection(db, 'forms');
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedPatient] = useState(state);

  let initialValues = laksatif;

  if (state.formType === 'new') {
    initialValues.FormInsertDate = new Date().toLocaleString();
    initialValues = { ...initialValues, ...selectedPatient };
  } else {
    initialValues = { ...initialValues, ...selectedPatient };
    initialValues.FormUpdateDate = new Date().toLocaleString();
  }

  const createDocument = async (form: unknown) => {
    await addDoc(laksatifFormCollectionRef, form);
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
    <div
      className="m-3"
      style={{ overflow: 'hidden', boxSizing: 'border-box' }}
    >
      <PatientInfoForm patient={selectedPatient} />

      <Container fluid>
        <Card>
          <Card.Title>Laksatif Günlüğü </Card.Title>
        </Card>
        <div className="row">
          <div className="col-3">
            <Form.Label>
              <b>Laksatif Tipi</b>
            </Form.Label>
          </div>
          <div className="col-9">
            <div className="mb-1">
              <input
                value={formik.values['laxative-type']}
                onChange={formik.handleChange}
                name="laxative-type"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} style={{ marginBottom: 100 }}>
          <div className="row">
            <div className="col-3">
              <Form.Label>
                <b>Başlangıç Tarihi</b>
              </Form.Label>
            </div>
            <div className="col-9">
              <div className="mb-1">
                <input
                  value={formik.values['laxative-date']}
                  onChange={formik.handleChange}
                  name="laxative-date"
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="table-secondary"
                    style={{ width: 150 }}
                  >
                    Gün
                  </th>
                  <th
                    scope="col"
                    className="table-secondary"
                    style={{ width: 200 }}
                  >
                    İlaç Dozu
                  </th>
                  <th
                    scope="col"
                    className="table-secondary"
                    style={{ width: 250 }}
                  >
                    Dışkılama Durumu <br /> (Yeterli - Yetersiz)
                  </th>
                  <th
                    scope="col"
                    className="table-secondary"
                    style={{ width: 200 }}
                  >
                    Dışkı kaçırma durumu <br /> (az - bol)
                  </th>
                  <th
                    scope="col"
                    className="table-secondary"
                    style={{ width: 200 }}
                  >
                    Lavman Ihtiyacı <br /> (var - yok)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-secondary">
                    Pazartesi
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['monday-dose']}
                      onChange={formik.handleChange}
                      name="monday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      onChange={formik.handleChange}
                      name="monday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                      defaultValue={formik.values['monday-defecation-status']}
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['monday-fecal-incontinence']}
                      onChange={formik.handleChange}
                      name="monday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['monday-need-enema']}
                      onChange={formik.handleChange}
                      name="monday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="table-secondary" scope="row">
                    Salı
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['tuesday-dose']}
                      onChange={formik.handleChange}
                      name="tuesday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['tuesday-defecation-status']}
                      onChange={formik.handleChange}
                      name="tuesday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['tuesday-fecal-incontinence']}
                      onChange={formik.handleChange}
                      name="tuesday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['tuesday-need-enema']}
                      onChange={formik.handleChange}
                      name="tuesday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="table-secondary" scope="row">
                    Çarşamba
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['wednesday-dose']}
                      onChange={formik.handleChange}
                      name="wednesday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      defaultValue={
                        formik.values['wednesday-defecation-status']
                      }
                      onChange={formik.handleChange}
                      name="wednesday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={
                        formik.values['wednesday-fecal-incontinence']
                      }
                      onChange={formik.handleChange}
                      name="wednesday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['wednesday-need-enema']}
                      onChange={formik.handleChange}
                      name="wednesday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="table-secondary" scope="row">
                    Perşembe
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['thursday-dose']}
                      onChange={formik.handleChange}
                      name="thursday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['thursday-defecation-status']}
                      onChange={formik.handleChange}
                      name="thursday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={
                        formik.values['thursday-fecal-incontinence']
                      }
                      onChange={formik.handleChange}
                      name="thursday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['thursday-need-enema']}
                      onChange={formik.handleChange}
                      name="thursday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="table-secondary" scope="row">
                    Cuma
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['friday-dose']}
                      onChange={formik.handleChange}
                      name="friday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['friday-defecation-status']}
                      onChange={formik.handleChange}
                      name="friday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['friday-fecal-incontinence']}
                      onChange={formik.handleChange}
                      name="friday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['friday-need-enema']}
                      onChange={formik.handleChange}
                      name="friday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="table-secondary" scope="row">
                    Cumartesi
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['saturday-dose']}
                      onChange={formik.handleChange}
                      name="saturday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['saturday-defecation-status']}
                      onChange={formik.handleChange}
                      name="saturday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={
                        formik.values['saturday-fecal-incontinence']
                      }
                      onChange={formik.handleChange}
                      name="saturday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['saturday-need-enema']}
                      onChange={formik.handleChange}
                      name="saturday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="table-secondary" scope="row">
                    Pazar
                  </th>
                  {/* İlaç Dozu */}
                  <td>
                    <input
                      value={formik.values['sunday-dose']}
                      onChange={formik.handleChange}
                      name="sunday-dose"
                      type="text"
                      className="form-control w-100 h-100"
                    />
                  </td>
                  {/* Dışkılama Durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['sunday-defecation-status']}
                      onChange={formik.handleChange}
                      name="sunday-defecation-status"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Yeterli">Yeterli</option>
                      <option value="Yetersiz">Yetersiz</option>
                    </select>
                  </td>
                  {/* Dışkı kaçırma durumu */}
                  <td>
                    <select
                      defaultValue={formik.values['sunday-fecal-incontinence']}
                      onChange={formik.handleChange}
                      name="sunday-fecal-incontinence"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Az">Az</option>
                      <option value="Bol">Bol</option>
                    </select>
                  </td>
                  {/* Lavman İhtiyacı */}
                  <td>
                    <select
                      defaultValue={formik.values['sunday-need-enema']}
                      onChange={formik.handleChange}
                      name="sunday-need-enema"
                      className="form-select w-100 h-100"
                      aria-label="Default select example"
                    >
                      <option value="0">Seçiniz</option>
                      <option value="Var">Var</option>
                      <option value="Yok">Yok</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ButtonBar url="/patients" />
        </form>
      </Container>
    </div>
  );
}
