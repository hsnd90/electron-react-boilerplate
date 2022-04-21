import { Card, Form, Row, Col, Container } from 'react-bootstrap';
import './PatientInfoForm.css';

function PatientInfoForm(props: any) {
  const initialValues = props.patient;

  return (
    <Container fluid>
      <div className="patient-info-form m-1">
        <div className="card-header text-center">
          <b>Hasta Bilgileri</b>{' '}
        </div>
        <div className="card-body">
          {/* Ad Soyad - Yaş */}
          <Form.Group>
            <Row className="align-items-center">
              <Col md="3">
                <Form.Label>Hastanın Adı Soyadı</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  type="text"
                  name="FullName"
                  defaultValue={initialValues.FullName}
                />
              </Col>

              <Col md="3">
                <Form.Label>Yaş</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  type="number"
                  name="Age"
                  defaultValue={initialValues.Age}
                />
              </Col>
            </Row>
          </Form.Group>
          {/* Protokol No - Cinsiyet */}
          <Form.Group>
            <Row className="align-items-center">
              <Col md="3">
                <Form.Label>Protokol Numarası</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  type="text"
                  name="ProtocolNo"
                  defaultValue={initialValues.ProtocolNo}
                />
              </Col>

              <Col md="3">
                <Form.Label>Cinsiyet</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  type="text"
                  name="Gender"
                  defaultValue={initialValues.Gender}
                />
              </Col>
            </Row>
          </Form.Group>
          {/* TC Kimlik No - Telefon */}
          <Form.Group>
            <Row className="align-items-center">
              <Col md="3">
                <Form.Label>T.C. Kimlik Numarası</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  name="IdentityNo"
                  type="number"
                  defaultValue={initialValues.IdentityNo}
                />
              </Col>

              <Col md="3">
                <Form.Label>Telefon</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  name="PhoneNumber"
                  type="number"
                  defaultValue={initialValues.PhoneNumber}
                />
              </Col>
            </Row>
          </Form.Group>
          {/* Doğum Tarihi - Tarih */}
          <Form.Group>
            <Row className="align-items-center">
              <Col md="3">
                <Form.Label>Doğum Tarihi</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  name="Birthday"
                  type="text"
                  defaultValue={initialValues.Birthday}
                />
              </Col>

              <Col md="3">
                <Form.Label>Tarih</Form.Label>
              </Col>
              <Col md="3">
                <Form.Control
                  plaintext
                  name="RegisterDate"
                  type="text"
                  defaultValue={initialValues.RegisterDate}
                />
              </Col>
            </Row>
          </Form.Group>
        </div>
      </div>
    </Container>
  );
}

export default PatientInfoForm;
