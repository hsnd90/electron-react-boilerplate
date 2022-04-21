import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientForm.css';
import { Card, Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patient from '../FormGroups/patient';
import db from '../../firebase';

export default function PatientForm() {
  const [Patient, setPatient] = useState({});
  const patientsCollectionRef = collection(db, 'patients');
  const [showKabizlikForm, setShowKabizlikForm] = useState(false);
  let navigate = useNavigate();

  // eslint-disable-next-line react/destructuring-assignment
  let initialValues = patient;

  const createDocument = async (form: unknown) => {
    await addDoc(patientsCollectionRef, form);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      await createDocument(values);
      setPatient(values);
      resetForm();
      navigate('/form/kabizlik-form', {
        replace: true,
        state: { formType: 'new', ...values },
      });
    },
    enableReinitialize: true,
    // validationSchema: yup.object({
    //   FullName: yup.string().required('Hastanın adı soyadı alanı zorunludur.'),
    // }),
  });

  return (
    <Container fluid>
      <Form onSubmit={formik.handleSubmit}>
        <Card className="card p-3 m-1">
          <Card.Title>Hasta Bilgileri</Card.Title>
          <Card.Body className="mt-2">
            {/* Ad Soyad - Yaş */}
            <Form.Group>
              <Row className="align-items-center">
                <Col md="2">
                  <Form.Label>Hastanın Adı Soyadı</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    className="text-input"
                    type="text"
                    name="FullName"
                    onChange={formik.handleChange}
                    value={formik.values.FullName}
                  />
                </Col>

                <Col md="2">
                  <Form.Label>Yaş</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    className="text-input"
                    type="number"
                    name="Age"
                    onChange={formik.handleChange}
                    value={formik.values.Age}
                  />
                </Col>
              </Row>
            </Form.Group>
            {/* Protokol No - Cinsiyet */}
            <Form.Group>
              <Row className="align-items-center">
                <Col md="2">
                  <Form.Label>Protokol Numarası</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    className="text-input"
                    type="text"
                    name="ProtocolNo"
                    onChange={formik.handleChange}
                    value={formik.values.ProtocolNo}
                  />
                </Col>

                <Col md="2">
                  <Form.Label>Cinsiyet</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Select
                    name="Gender"
                    className="text-input"
                    onChange={formik.handleChange}
                    value={formik.values.Gender}
                    defaultValue="0"
                  >
                    <option value="0" hidden>
                      Seçiniz
                    </option>
                    <option value="Erkek">Erkek</option>
                    <option value="Kadın">Kadın</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            {/* TC Kimlik No - Telefon */}
            <Form.Group>
              <Row className="align-items-center">
                <Col md="2">
                  <Form.Label>T.C. Kimlik Numarası</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    name="IdentityNo"
                    className="text-input"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.IdentityNo}
                  />
                </Col>

                <Col md="2">
                  <Form.Label>Telefon</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    name="PhoneNumber"
                    className="text-input"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.PhoneNumber}
                  />
                </Col>
              </Row>
            </Form.Group>
            {/* Doğum Tarihi - Tarih */}
            <Form.Group>
              <Row className="align-items-center">
                <Col md="2">
                  <Form.Label>Doğum Tarihi</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    name="Birthday"
                    className="text-input"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.Birthday}
                  />
                </Col>

                <Col md="2">
                  <Form.Label>Tarih</Form.Label>
                </Col>
                <Col md="4">
                  <Form.Control
                    name="RegisterDate"
                    className="text-input"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.RegisterDate}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Row>
              <Col md={{ offset: 9 }}>
                <Button
                  type="submit"
                  style={{
                    marginRight: 0,
                    marginLeft: 'auto',
                    marginTop: 20,
                  }}
                  variant="success"
                >
                  Hasta Kaydet
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Form>
      {/* {showKabizlikForm && <KabizlikInkotinansForm patient={Patient} />} */}
    </Container>
  );
}
