import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientForm.css';
import { Card, Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import db from '../../firebase';

export default function PatientForm(props) {
  const [Patient, setPatient] = useState({});
  const patientsCollectionRef = collection(db, 'patients');

  const createDocument = async (patient: unknown) => {
    await addDoc(patientsCollectionRef, patient);
  };
  console.log(props.patient);
  // eslint-disable-next-line react/destructuring-assignment
  const initialValues = props.patient || {
    FullName: '',
    Age: 0,
    ProtocolNo: '',
    Gender: '',
    IdentityNo: '',
    PhoneNumber: 0,
    Birthday: new Date(),
    RecordDate: new Date(),
  };
  console.log(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      if (!formik.errors) {
        await createDocument(values);
        resetForm();
      }
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      FullName: yup.string().required('Hastanın adı soyadı alanı zorunludur.'),
    }),
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Card className="card p-3 m-5">
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
                  >
                    <option value="" hidden selected>
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
                    name="RecordDate"
                    className="text-input"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.RecordDate}
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
    </Container>
  );
}
