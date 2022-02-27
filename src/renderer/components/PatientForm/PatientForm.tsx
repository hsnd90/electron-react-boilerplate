/* eslint-disable react/no-unused-state */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { collection, setDoc, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientForm.css';
import { Card, Form, Row, Col, Button, Container } from 'react-bootstrap';
import db from '../../firebase';

// eslint-disable-next-line react/prefer-stateless-function
export default class PatientForm extends Component {
  patientsCollectionRef = collection(db, 'patients');

  constructor(props: any) {
    super(props);
    this.state = {
      Patient: {},
    };
  }

  componentDidMount() {
    this.clearControls();
  }

  clearControls = () => {
    this.setState({
      Patient: {
        Age: 0,
        Birthday: new Date().toLocaleString(),
        FullName: '',
        Gender: '0',
        IdentityNo: '',
        PhoneNumber: '',
        ProtocolNo: '',
        RecordDate: new Date().toLocaleString(),
        ConstipationReports: [],
      },
    });
  };

  createDocument = async () => {
    await addDoc(this.patientsCollectionRef, this.state.Patient);
    this.clearControls();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createDocument();
  };

  handleInputChange = (event: any) => {
    event.preventDefault();
    this.setState({
      Patient: {
        ...this.state.Patient,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
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
                      value={this.state.Patient.FullName}
                      className="text-input"
                      type="text"
                      name="FullName"
                      onChange={this.handleInputChange}
                    />
                  </Col>

                  <Col md="2">
                    <Form.Label>Yaş</Form.Label>
                  </Col>
                  <Col md="4">
                    <Form.Control
                      value={this.state.Patient.Age}
                      className="text-input"
                      type="number"
                      name="Age"
                      onChange={this.handleInputChange}
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
                      value={this.state.Patient.ProtocolNo}
                      className="text-input"
                      type="text"
                      name="ProtocolNo"
                      onChange={this.handleInputChange}
                    />
                  </Col>

                  <Col md="2">
                    <Form.Label>Cinsiyet</Form.Label>
                  </Col>
                  <Col md="4">
                    <Form.Select
                      value={this.state.Patient.Gender}
                      name="Gender"
                      className="text-input"
                      onChange={this.handleInputChange}
                      defaultValue="0"
                    >
                      <option hidden value="0">
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
                      value={this.state.Patient.IdentityNo}
                      onChange={this.handleInputChange}
                      name="IdentityNo"
                      className="text-input"
                      type="number"
                    />
                  </Col>

                  <Col md="2">
                    <Form.Label>Telefon</Form.Label>
                  </Col>
                  <Col md="4">
                    <Form.Control
                      value={this.state.Patient.PhoneNumber}
                      onChange={this.handleInputChange}
                      name="PhoneNumber"
                      className="text-input"
                      type="number"
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
                      value={this.state.Patient.Birthday}
                      onChange={this.handleInputChange}
                      name="Birthday"
                      className="text-input"
                      type="date"
                    />
                  </Col>

                  <Col md="2">
                    <Form.Label>Tarih</Form.Label>
                  </Col>
                  <Col md="4">
                    <Form.Control
                      value={this.state.Patient.RecordDate}
                      onChange={this.handleInputChange}
                      name="RecordDate"
                      className="text-input"
                      type="date"
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
}
