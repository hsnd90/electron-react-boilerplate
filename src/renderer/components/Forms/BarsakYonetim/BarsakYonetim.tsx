/* eslint-disable global-require */
/* eslint-disable import/no-absolute-path */
import { useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  Card,
  Button,
} from 'react-bootstrap';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { Dialog } from 'primereact/dialog';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import ButtonBar from 'renderer/components/ButtonBar/ButtonBar';
import styles from './BarsakYonetim.css';
import BarsakFormGroup from '../../FormGroups/barsak';
import PatientInfoForm from '../../PatientInfo/PatientInfoForm';
import db from '../../../firebase';

export default function BarsakYonetim() {
  const barsakFormCollectionRef = collection(db, 'forms');
  const [visible, setVisible] = useState(false);
  const { state } = useLocation();
  const [selectedPatient] = useState(state);

  let initialValues = BarsakFormGroup;

  if (selectedPatient.formType === 'new') {
    initialValues.FormInsertDate = new Date().toLocaleString();
    initialValues = { ...initialValues, ...selectedPatient };
  } else {
    initialValues = { ...initialValues, ...selectedPatient };
    initialValues.FormUpdateDate = new Date().toLocaleString();
  }

  const createDocument = async (form: unknown) => {
    await addDoc(barsakFormCollectionRef, form);
  };

  const updateDocument = async (form: any) => {
    const updatedDoc = doc(db, 'forms', form.FormId);
    await setDoc(updatedDoc, form);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      if (selectedPatient.formType === 'new') {
        values.FormInsertDate = new Date().toLocaleString();
        await createDocument(values);
        resetForm();
      } else {
        values.FormUpdateDate = new Date().toLocaleString();
        await updateDocument(values);
      }
    },
  });

  const onHide = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <PatientInfoForm patient={selectedPatient} />
      <Container fluid className="mt-2 mb-5">
        <Dialog
          visible={visible}
          style={{ width: '80vw' }}
          modal
          onHide={onHide}
        >
          <Row>
            <img
              className="image"
              // eslint-disable-next-line import/no-unresolved
              src={require('/assets/q59.png')}
              alt="BristolDiskiSkalasi"
            />
          </Row>
        </Dialog>
        <Form onSubmit={formik.handleSubmit}>
          <Card  style={{ margin: 10 }}>
            <Card.Title className="card-title">
              BARSAK YÖNETİM PROGRAMI
            </Card.Title>
            <Card.Body>
              {/* q1 1. Anal Fissür Tedavisi */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>1. Anal Fissür Tedavisi</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.q1 === 'Gerek Yok'}
                    className="check-input"
                    name="q1"
                    inline
                    type="radio"
                    label="Gerek Yok"
                    value="Gerek Yok"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.q1 === 'Gerekli'}
                    className="check-input"
                    name="q1"
                    inline
                    type="radio"
                    label="Gerekli"
                    value="Gerekli"
                  />
                  {formik.values.q1 === 'Gerekli' && (
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q1-comment']}
                      className="text-input"
                      name="q1-comment"
                      style={{ width: 200 }}
                    />
                  )}
                </Col>
              </Form.Group>
              {/* 2. Diyet Önerileri */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>2. Diyet Önerileri</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.q2}
                    className="text-input"
                    name="q2"
                    style={{ minWidth: 400 }}
                  />
                </Col>
              </Form.Group>
              {/* 3. Düzenli tuvalete oturma (her yemekten sonra) */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    3. Düzenli tuvalete oturma (her yemekten sonra)
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.q3}
                    className="text-input"
                    name="q3"
                    style={{ minWidth: 400 }}
                  />
                </Col>
              </Form.Group>
              {/* 4. Egzersiz */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>4. Egzersiz</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.q4}
                    className="text-input"
                    name="q4"
                    style={{ minWidth: 400 }}
                  />
                </Col>
              </Form.Group>
              {/* 5. Lavmanla kolonu boşaltma (1. aşama): (kolon dolu ise)  */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    5. Lavmanla kolonu boşaltma (1. aşama): (kolon dolu ise)
                  </Form.Label>
                </Col>
                <Row className="wrap-to-right">
                  <Col>
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.q5 === 'İzotonik'}
                      className="check-input"
                      name="q5"
                      inline
                      type="radio"
                      label="İzotonik"
                      value="İzotonik"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.q5 === 'Gliserinli'}
                      className="check-input"
                      name="q5"
                      inline
                      type="radio"
                      label="Gliserinli"
                      value="Gliserinli"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values.q5 === 'Fosfatlı (B.T. Enema)'
                      }
                      className="check-input"
                      name="q5"
                      inline
                      type="radio"
                      label="Fosfatlı (B.T. Enema)"
                      value="Fosfatlı (B.T. Enema)"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.q5 === 'Karışım'}
                      className="check-input"
                      name="q5"
                      inline
                      type="radio"
                      label="Karışım"
                      value="Karışım"
                    />
                  </Col>
                </Row>
                {/* Günlük lavman Sayısı */}
                <Row className="wrap-to-right">
                  <Col md="8">
                    <InputGroup>
                      <InputGroup.Text>Günlük lavman Sayısı</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q5-lavman-no']}
                        className="text-input"
                        name="q5-lavman-no"
                        style={{ maxWidth: 100 }}
                      />
                      <InputGroup.Text>kez / gün</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
                {/* Lavman sıvısı hacmi : */}
                <Row className="wrap-to-right">
                  <Col md="8">
                    <InputGroup>
                      <InputGroup.Text>Lavman sıvısı hacmi : </InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q5-lavman-vol']}
                        className="text-input"
                        name="q5-lavman-vol"
                        style={{ maxWidth: 100 }}
                      />
                      <InputGroup.Text>ml (min. 350 ml) </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>
              {/* 58. 6. Yatarak Direkt Batın Grafisi (YDBG): Kolonun boş olduğundan emin olana kadar günlük grafi kontrolü */}
              <Form.Group className="align-items-center">
                <Row>
                  <Col>
                    <Form.Label>
                      6. Yatarak Direkt Batın Grafisi (YDBG): Kolonun boş
                      olduğundan emin olana kadar günlük grafi kontrolü
                    </Form.Label>
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="3">
                    <InputGroup>
                      <InputGroup.Text>Tarih</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q6-date']}
                        name="q6-date"
                        className="text-input"
                        type="date"
                        style={{ maxWidth: 150 }}
                      />
                    </InputGroup>
                  </Col>
                  <Col md="4">
                    <InputGroup>
                      <InputGroup.Text>YDBG</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q6-ydgb']}
                        name="q6-ydgb"
                        className="text-input"
                        type="text"
                        style={{ maxWidth: 100 }}
                      />
                      <InputGroup.Text>gün</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="3">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q6-1'] === 'Kolon boş'}
                      type="radio"
                      className="check-input"
                      name="q6-1"
                      label="Kolon boş"
                      value="Kolon boş"
                    />
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="5">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q6-1'] ===
                        'Kolon dolu: Lavman dozu/ içeriğinde değişiklik?'
                      }
                      type="radio"
                      className="check-input"
                      name="q6-1"
                      label="Kolon dolu: Lavman dozu/ içeriğinde değişiklik?"
                      value="Kolon dolu: Lavman dozu/ içeriğinde değişiklik?"
                    />
                  </Col>
                  {formik.values['q6-1'] ===
                    'Kolon dolu: Lavman dozu/ içeriğinde değişiklik?' && (
                    <Col md="3">
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q6-1-comment']}
                        name="q6-1-comment"
                        type="text"
                        className="text-input"
                        style={{ width: 400 }}
                      />
                    </Col>
                  )}
                </Row>
                <Row className="wrap-to-right">
                  <Col md="4">
                    <Form.Label>Dışkılama</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q6-2'] === 'Var'}
                      type="radio"
                      className="check-input"
                      label="Var"
                      inline
                      name="q6-2"
                      value="Var"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q6-2'] === 'Yok'}
                      type="radio"
                      className="check-input"
                      label="Yok"
                      inline
                      name="q6-2"
                      value="Yok"
                    />
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="4">
                    <Form.Label>Dışkı Kaçırma</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q6-3'] === 'Var'}
                      type="radio"
                      className="check-input"
                      label="Var"
                      inline
                      name="q6-3"
                      value="Var"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q6-3'] === 'Yok'}
                      type="radio"
                      className="check-input"
                      label="Yok"
                      inline
                      name="q6-3"
                      value="Yok"
                    />
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="12">
                    <InputGroup>
                      <InputGroup.Text>Plan</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q6-plan']}
                        as="textarea"
                        rows={3}
                        type="text"
                        className="text-input"
                        style={{ width: 'auto' }}
                        name="q6-plan"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>
              {/* 7. Günlük laksatif tedavi: (Kolon boş ve ya boşaltıldıktan
                      sonra) */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="6">
                  <Form.Label>
                    7. Günlük laksatif tedavi: (Kolon boş ve ya boşaltıldıktan
                    sonra)
                  </Form.Label>
                </Col>
                <Col md="3">
                  <InputGroup>
                    <InputGroup.Text>Tarih</InputGroup.Text>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.q7}
                      className="text-input"
                      name="q7"
                      type="date"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Button
                    style={{ width: 250 }}
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    Göster / Gizle
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group className="align-items-center mt-3">
                <Row className="wrap-to-right">
                  <Col md="3">
                    <InputGroup>
                      <InputGroup.Text>Tarih</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q7-1']}
                        name="q7-1"
                        className="text-input"
                        type="date"
                        style={{ maxWidth: 150 }}
                      />
                    </InputGroup>
                  </Col>
                  <Col md="4">
                    <InputGroup>
                      <InputGroup.Text>Laksatif Başlangıç Dozu</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q7-2']}
                        name="q7-2"
                        className="text-input"
                        type="text"
                        style={{ maxWidth: 150 }}
                      />
                    </InputGroup>
                  </Col>
                  <Col md="4">
                    <InputGroup>
                      <InputGroup.Text>Fiber Dozu</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q7-3']}
                        name="q7-3"
                        className="text-input"
                        type="text"
                        style={{ maxWidth: 150 }}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="3">
                    <InputGroup>
                      <InputGroup.Text>Tarih</InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q7-4']}
                        className="text-input"
                        name="q7-4"
                        style={{ maxWidth: 150 }}
                        type="date"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="1">
                    <Form.Label>YDBG</Form.Label>
                  </Col>
                  <Col md="3">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-5'] === 'Kolon boş'}
                      name="q7-5"
                      className="check-input"
                      type="radio"
                      label="Kolon boş"
                      value="Kolon boş"
                      inline
                    />
                    <Form.Check
                      className="check-input"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-5'] === 'Kolon dolu'}
                      name="q7-5"
                      type="radio"
                      label="Kolon dolu"
                      value="Kolon dolu"
                      inline
                    />
                  </Col>
                  {formik.values['q7-5'] === 'Kolon dolu' && (
                    <Col md="8">
                      <InputGroup>
                        <InputGroup.Text>
                          Laksatif dozu/tipinde değişiklik?
                        </InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q7-6']}
                          className="text-input"
                          name="q7-6"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  )}
                </Row>
                <Row className="wrap-to-right">
                  <Col md="4">
                    <Form.Label>Laksatifi düzenli kullandı mı?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-7'] === 'Evet'}
                      type="radio"
                      name="q7-7"
                      className="check-input"
                      label="Evet"
                      value="Evet"
                      inline
                    />
                    <Form.Check
                      type="radio"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-7'] === 'Hayır'}
                      name="q7-7"
                      className="check-input"
                      label="Hayır"
                      value="Hayır"
                      inline
                    />
                  </Col>
                </Row>
                <Row className="wrap-to-right">
                  <Col md="4">
                    <Form.Label>Dışkılama</Form.Label>
                  </Col>
                  <Col md="3">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-8'] === 'Yok'}
                      type="radio"
                      name="q7-8"
                      className="check-input"
                      label="Yok"
                      value="Yok"
                      inline
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-8'] === 'Var'}
                      type="radio"
                      className="check-input"
                      label="Var"
                      value="Var"
                      name="q7-8"
                      inline
                    />
                  </Col>
                  {formik.values['q7-8'] === 'Var' && (
                    <Col md="4">
                      <InputGroup>
                        <InputGroup.Text>Yeterli</InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q7-9-enough']}
                          className="text-input"
                          type="text"
                          name="q7-9-enough"
                          style={{ maxWidth: 50 }}
                        />
                        <InputGroup.Text>/</InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q7-9-not-enough']}
                          className="text-input"
                          type="text"
                          style={{ maxWidth: 50 }}
                          name="q7-9-not-enough"
                        />
                        <InputGroup.Text>Yetersiz</InputGroup.Text>
                      </InputGroup>
                    </Col>
                  )}
                </Row>
                <Row className="wrap-to-right">
                  <Col md="4">
                    <Form.Label>Lavman Gerekti mi</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-10'] === 'Hayır'}
                      type="radio"
                      name="q7-10"
                      className="check-input"
                      label="Hayır"
                      value="Hayır"
                      inline
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q7-10'] === 'Evet'}
                      type="radio"
                      name="q7-10"
                      className="check-input"
                      label="Evet"
                      value="Evet"
                      inline
                    />
                  </Col>
                  {formik.values['q7-10'] === 'Evet' && (
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text>Sık</InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q7-11']}
                          className="text-input"
                          type="text"
                          name="q7-11"
                          style={{ maxWidth: 50 }}
                        />
                        <InputGroup.Text>/</InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q7-12']}
                          className="text-input"
                          name="q7-12"
                          style={{ maxWidth: 50 }}
                          type="text"
                        />
                        <InputGroup.Text>Nadir</InputGroup.Text>
                      </InputGroup>
                    </Col>
                  )}
                </Row>
                <ButtonBar url="/patients" />
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
}
