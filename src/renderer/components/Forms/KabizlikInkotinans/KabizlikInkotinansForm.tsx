import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  InputGroup,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './KabizlikInkotinansForm.css';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import db from '../../../firebase';

export default function KabizlikInkotinansForm(props) {
  const [KabizlikForm, setKabizlikForm] = useState({});
  const kabizlikFormCollectionRef = collection(db, 'forms');

  const initialValues = props.form || {
    FormName: 'Kabızlık Form',
    q1: '', // 1. Çocuğunuz kaç günde bir büyük tuvaletini yapıyor?
    q2: 'Evet', // 2. Büyük tuvaletini yapması için uyarı veya lavman yapmanız gerekiyor mu?
    'q3-1': '', // - Haftada iki ya da daha az dışkılama
    'q3-2': '', // - Aşırı dışkı birikmesi öyküsü
    'q3-3': '', // - Ağrılı ve sert dışkılama
    'q3-4': '', // - Büyük çaplı dışkılama
    'q3-5': '', // - Rektumda büyük dışkı kitlesinin bulunması
    'q3-6': '', // - Haftada en az bir kere dışkı kaçırma öyküsü
    'q3-7': '', // - Tuvaleti bile tıkayabileGek kadar geniş çaplı dışkılama öyküsü
    'q3-8': '', // - Kabızlık Skoru (Roma IV)
    q4: '',
    'q4-age': '',
    q5: '',
    q6: '',
    'q6-other': '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    'q11-1': '',
    q12: '',
    q13: '',
    'q13-1': '',
    q14: '',
    q15: '',
    'q16-laksatif': '',
    'q16-laksatif-1': '',
    'q16-laksatif-1-duration': '',
    'q16-lavman': '',
    'q16-lavman-1': '',
    'q16-treatment': '',
    q17: '',
    q18: '',
    q19: '',
    q20: '',
    q21: '',
    q22: '',
    'q22-1': '',
    'q22-comment': '',
    'q23-length': '',
    'q23-length-persentil': '',
    'q23-weight': '',
    'q23-weight-persentil': '',
  };

  const createDocument = async (form: unknown) => {
    await addDoc(kabizlikFormCollectionRef, form);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // if (!formik.errors) {
      //   await createDocument(values);
      //   resetForm();
      // }
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <Container fluid className="mt-3">
        <Form onSubmit={formik.handleSubmit}>
          <Button
            style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 100 }}
            type="submit"
            variant="success"
          >
            Hasta Kaydet
          </Button>
          {/* q1  1. Çocuğunuz kaç günde bir büyük tuvaletini yapıyor?............................................................................. */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row}>
                <Col md="6">
                  <Form.Label>
                    1. Çocuğunuz kaç günde bir büyük tuvaletini yapıyor?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.q1}
                    name="q1"
                    type="text"
                    className="text-input"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* q2 2. Büyük tuvaletini yapması için uyarı veya lavman yapmanız gerekiyor  */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="6">
                  <Form.Label>
                    2. Büyük tuvaletini yapması için uyarı veya lavman yapmanız
                    gerekiyor mu?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.q2 === 'Evet'}
                    name="q2"
                    className="check-input"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.q2 === 'Hayır'}
                    name="q2"
                    inline
                    type="radio"
                    className="check-input"
                    label="Hayır"
                    value="Hayır"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* Bristol Dışkı Skalası Resim */}
          <Row>
            <img
              className="image"
              src={require('/assets/1.png')}
              alt="BristolDiskiSkalasi"
            />
          </Row>
          {/* q3 3. Kabızlık Tanı Kriterleri (Roma IV) */}
          <Card className="card">
            <Card.Body>
              <Form.Label as={Row}>
                <b>3. Kabızlık Tanı Kriterleri (Roma IV):</b>
              </Form.Label>
              <Row>
                {/* 4 yaşından küçük, en az bir ay süreyle aşağıdaki kriterlerden
                  en az iki tanesi olmalı: */}
                <Form.Label>
                  4 yaşından küçük, en az bir ay süreyle aşağıdaki kriterlerden
                  en az iki tanesi olmalı:
                </Form.Label>
                {/* q3-1 3.1 -Haftada iki ya da daha az dışkılama */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>
                      - Haftada iki ya da daha az dışkılama
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-1'] === 'Evet'}
                      className="check-input"
                      value="Evet"
                      name="q3-1"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-1'] === 'Hayır'}
                      className="check-input"
                      name="q3-1"
                      inline
                      type="radio"
                      label="Hayır"
                      value="Hayır"
                    />
                  </Col>
                </Form.Group>
                {/* q3-2 3.2 -	Aşırı dışkı birikmesi öyküsü */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>- Aşırı dışkı birikmesi öyküsü</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-2'] === 'Evet'}
                      value="Evet"
                      className="check-input"
                      name="q3-2"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-2'] === 'Hayır'}
                      value="Hayır"
                      className="check-input"
                      name="q3-2"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
                {/* q3-3 3.3 -	Ağrılı ve sert dışkılama */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>- Ağrılı ve sert dışkılama </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-3'] === 'Evet'}
                      value="Evet"
                      className="check-input"
                      name="q3-3"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-3'] === 'Hayır'}
                      value="Hayır"
                      className="check-input"
                      name="q3-3"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
                {/* q3-4 3.4 -	Büyük çaplı dışkılama */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>- Büyük çaplı dışkılama </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-4'] === 'Evet'}
                      value="Evet"
                      className="check-input"
                      name="q3-4"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-4'] === 'Hayır'}
                      value="Hayır"
                      className="check-input"
                      name="q3-4"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
                {/* q3-5 3.5 Rektumda büyük dışkı kitlesinin bulunması */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>
                      - Rektumda büyük dışkı kitlesinin bulunması
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-5'] === 'Evet'}
                      value="Evet"
                      className="check-input"
                      name="q3-5"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-5'] === 'Hayır'}
                      value="Hayır"
                      className="check-input"
                      name="q3-5"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
              </Row>
              {/* Tuvalet becerisini edindikten sonra aşağıdaki ölçütler kullanılabilmektedir: */}
              <Form.Label as={Row}>
                Tuvalet becerisini edindikten sonra aşağıdaki ölçütler
                kullanılabilmektedir:
              </Form.Label>
              <Row>
                {/* q3-6 3.6 Haftada en az bir kere dışkı kaçırma öyküsü */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>
                      - Haftada en az bir kere dışkı kaçırma öyküsü
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-6'] === 'Evet'}
                      value="Evet"
                      className="check-input"
                      name="q3-6"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-6'] === 'Hayır'}
                      value="Hayır"
                      className="check-input"
                      name="q3-6"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
                {/* q3-7 3.7 Tuvaleti bile tıkayabileGek kadar geniş çaplı dışkılama öyküsü */}
                <Form.Group
                  as={Row}
                  className="wrap-to-right align-items-center"
                >
                  <Col md="4" className="align-items-center">
                    <Form.Label>
                      - Tuvaleti bile tıkayabileGek kadar geniş çaplı dışkılama
                      öyküsü
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-7'] === 'Evet'}
                      value="Evet"
                      className="check-input"
                      name="q3-7"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q3-7'] === 'Hayır'}
                      value="Hayır"
                      className="check-input"
                      name="q3-7"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
              </Row>
              {/* q3-8 3. Kabızlık Skoru (Label) */}
              <Row>
                <Col>
                  <Form.Label>
                    <b>Kabızlık Skoru (Roma IV)</b>
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <InputGroup>
                  <InputGroup.Text className="input-group-text">
                    &lt; 4 Yaş= 5 || &gt; 4 Yaş= 7
                  </InputGroup.Text>
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values['q3-8']}
                    size="sm"
                    className="text-input"
                    style={{ maxWidth: 100 }}
                    name="q3-8"
                    type="text"
                  />
                  <InputGroup.Text className="input-group-text">
                    / {4 > formik.values['q3-8'] ? 5 : 7}
                  </InputGroup.Text>
                </InputGroup>
              </Row>
              {/* >4 Yaş */}
              {/* <Row>
                <InputGroup>
                  <InputGroup.Text>&gt; 4 Yaş:</InputGroup.Text>
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values['q3-8']}
                    className="text-input"
                    style={{ maxWidth: 100 }}
                    name="q3-8"
                    type="text"
                  />
                  <InputGroup.Text>/ 7</InputGroup.Text>
                </InputGroup>
              </Row> */}
            </Card.Body>
          </Card>
          {/* q4 4. Kabızlık kaç yaşında başladı */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>4. Kabızlık kaç yaşında başladı</Form.Label>
                </Col>
                <Col md="4" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q4'] === 'Doğduğundan Beri'}
                    value="Doğduğundan Beri"
                    className="check-input"
                    name="q4"
                    inline
                    type="radio"
                    label="Doğduğundan beri"
                  />
                  <Form.Check
                    onChange={(e) => {
                      formik.handleChange(e);
                      console.log(formik.values.q4);
                    }}
                    defaultChecked={formik.values['q4'] === 'Yaşından Beri'}
                    value="Yaşından Beri"
                    className="check-input"
                    name="q4"
                    inline
                    type="radio"
                    label="Yaşından Beri"
                  />
                </Col>
                <Col>
                  {formik.values['q4'] === 'Yaşından Beri' && (
                    <InputGroup>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q4-age']}
                        className="text-input"
                        size="sm"
                        style={{ maxWidth: 100 }}
                        name="q4-age"
                        type="text"
                      />
                    </InputGroup>
                  )}
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 5. Ne kadar süredir kabızlık şikayeti var? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    5. Ne kadar süredir kabızlık şikayeti var?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values['q5']}
                    className="text-input"
                    size="sm"
                    name="q5"
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 6. Size göre kabızlık şikayetlerinin başlaması ile ilişkili olay var mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="6">
                  <Form.Label>
                    6. Size göre kabızlık şikayetlerinin başlaması ile ilişkili
                    olay var mı?
                  </Form.Label>
                </Col>
                <Col md="auto" className="align-items-center wrap-to-right">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q6'] === 'Ek gıdaya başlama'}
                    className="check-input"
                    value="Ek gıdaya başlama"
                    name="q6"
                    inline
                    type="radio"
                    label="Ek gıdaya başlama"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q6'] === 'Tuvalet eğitimi'}
                    className="check-input"
                    name="q6"
                    inline
                    type="radio"
                    label="Tuvalet eğitimi"
                    value="Tuvalet eğitimi"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q6'] === 'Bilmiyorum'}
                    className="check-input"
                    name="q6"
                    inline
                    type="radio"
                    label="Bilmiyorum"
                    value="Bilmiyorum"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q6'] === 'Diğer'}
                    className="check-input"
                    name="q6"
                    inline
                    type="radio"
                    label="Diğer"
                    value="Diğer"
                  />
                  {formik.values.q6 === 'Diğer' && (
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q6-other']}
                      className="text-input"
                      size="sm"
                      style={{
                        width: '200px',
                        height: '8px',
                        display: 'inline',
                      }}
                      name="q6-other"
                      type="text"
                    />
                  )}
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 7. Çocuğunuz kakasını doğduğunda ilk iki gün içinde yaptı mı?  */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="6">
                  <Form.Label>
                    7. Çocuğunuz kakasını doğduğunda ilk iki gün içinde yaptı
                    mı?
                  </Form.Label>
                </Col>
                <Col md="6" className="wrap-to-right align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q7'] === 'Hayır'}
                    className="check-input"
                    name="q7"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q7'] === 'Evet'}
                    className="check-input"
                    name="q7"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q7'] === 'Bilmiyorum'}
                    className="check-input"
                    name="q7"
                    inline
                    type="radio"
                    label="Bilmiyorum"
                    value="Bilmiyorum"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 8. Tuvalet eğitimi aldı mı?  */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>8. Tuvalet eğitimi aldı mı?</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q8'] === 'Evet'}
                    className="check-input"
                    name="q8"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q8'] === 'Evet'}
                    className="check-input"
                    name="q8"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 9. Tuvalet eğitimini kaç yaşında verdiniz?  */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    9. Tuvalet eğitimini kaç yaşında verdiniz?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values['q9']}
                    className="text-input"
                    name="q9"
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 10. Tuvalet eğitimi sırasında ciddi sorun yaşadınız mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    10. Tuvalet eğitimi sırasında ciddi sorun yaşadınız mı?
                  </Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q10'] === 'Hayır'}
                    className="check-input"
                    name="q10"
                    inline
                    type="radio"
                    label="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q10'] === 'Evet'}
                    className="check-input"
                    name="q10"
                    inline
                    type="radio"
                    label="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 11. Çocuğunuz büyük tuvaletini kaçırıyor mu? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    11. Çocuğunuz büyük tuvaletini kaçırıyor mu?
                  </Form.Label>
                </Col>
                <Col md="2">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q11'] === 'Hayır'}
                    name="q11"
                    inline
                    type="radio"
                    label="Hayır"
                    className="check-input"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q11'] === 'Evet'}
                    name="q11"
                    inline
                    type="radio"
                    label="Evet"
                    className="check-input"
                    value="Evet"
                  />
                </Col>
                {formik.values.q11 === 'Evet' && (
                  <Col md="4">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q11-1'] === 'İç çamaşırı kirlenmesi'
                      }
                      className="check-input"
                      name="q11-1"
                      inline
                      type="radio"
                      label="İç çamaşırı kirlenmesi"
                      value="İç çamaşırı kirlenmesi"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q11-1'] === 'Bol miktarda kaçırma'
                      }
                      className="check-input"
                      name="q11-1"
                      inline
                      type="radio"
                      label="Bol miktarda kaçırma"
                      value="Bol miktarda kaçırma"
                    />
                  </Col>
                )}
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 12. Tuvalet eğitimi almış olmasına rağmen bez bağlamanız gerekiyor mu? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    12. Tuvalet eğitimi almış olmasına rağmen bez bağlamanız
                    gerekiyor mu?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q12'] === 'Hayır'}
                    className="check-input"
                    name="q12"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q12'] === 'Evet'}
                    className="check-input"
                    name="q12"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 13. İdrarını altına kaçırıyor mu ? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>13. İdrarını altına kaçırıyor mu ?</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q13'] === 'Hayır'}
                    className="check-input"
                    name="q13"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q13'] === 'Evet'}
                    className="check-input"
                    name="q13"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
                {formik.values.q13 === 'Evet' && (
                  <Col md="auto" className="wrap-to-right">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q13-1'] === 'Gece'}
                      className="check-input"
                      name="q13-1"
                      inline
                      type="radio"
                      label="Gece"
                      value="Gece"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q13-1'] === 'Gündüz'}
                      className="check-input"
                      name="q13-1"
                      inline
                      type="radio"
                      label="Gündüz"
                      value="Gündüz"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q13-1'] === 'Hem gece hem gündüz'
                      }
                      className="check-input"
                      name="q13-1"
                      inline
                      type="radio"
                      label="Hem gece hem gündüz"
                      value="Hem gece hem gündüz"
                    />
                  </Col>
                )}
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 14. Dışkı tutma davranışı var mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>14. Dışkı tutma davranışı var mı?</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q14'] === 'Hayır'}
                    className="check-input"
                    name="q14"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q14'] === 'Evet'}
                    className="check-input"
                    name="q14"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
                <p>
                  (Bacaklarını makaslaması, öne doğru eğilmesi, ağrılı yüz
                  ifadesi)
                </p>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 15. Kabızlık için daha önce tedavi aldı mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    15. Kabızlık için daha önce tedavi aldı mı?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q15'] === 'Hayır'}
                    className="check-input"
                    name="q15"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q15'] === 'Evet'}
                    className="check-input"
                    name="q15"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 16. Daha önce uygulanan tedaviler */}
          <Card className="card">
            <Card.Body>
              <Form.Group className="align-items-center">
                <Row>
                  <Col md="4">
                    <Form.Label>16. Daha önce uygulanan tedaviler</Form.Label>
                  </Col>
                </Row>
                {/* 16-1 Laksatif */}
                <Row style={{ marginBottom: 5 }}>
                  {/* Düzenli */}
                  <Col md="3">
                    <InputGroup>
                      <InputGroup.Text className="input-group-text">
                        Laksatif:
                      </InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q16-laksatif']}
                        className="text-input"
                        name="q16-laksatif"
                        type="text"
                      />
                    </InputGroup>
                  </Col>
                  {/* Süre, Düzensiz */}
                  <Col md="1">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q16-laksatif-1'] === 'Düzenli'
                      }
                      name="q16-laksatif-1"
                      className="check-input"
                      type="radio"
                      label="Düzenli"
                      value="Düzenli"
                    />
                  </Col>
                  {formik.values['q16-laksatif-1'] == 'Düzenli' && (
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Süre
                        </InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q16-laksatif-1-duration']}
                          className="text-input"
                          name="q16-laksatif-1-duration"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  )}

                  <Col sm="auto">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q16-laksatif-1'] === 'Diğer'
                      }
                      name="q16-laksatif-1"
                      type="radio"
                      label="Diğer"
                      value="Diğer"
                    />
                  </Col>
                </Row>
                {/* 16-2 Lavman */}
                <Row style={{ marginBottom: 5 }}>
                  <Col md="3">
                    <InputGroup>
                      <InputGroup.Text className="input-group-text">
                        Lavman:
                      </InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q16-lavman']}
                        className="text-input"
                        name="q16-lavman"
                        type="text"
                      />
                    </InputGroup>
                  </Col>
                  <Col md="4" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q16-lavman-1'] === 'Düzenli'
                      }
                      name="q16-lavman-1"
                      value="Düzenli"
                      type="radio"
                      label="Düzenli"
                      inline
                      className="check-input"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q16-lavman-1'] === 'Aralıklı'
                      }
                      name="q16-lavman-1"
                      inline
                      type="radio"
                      label="Aralıklı"
                      value="Aralıklı"
                      className="check-input"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={
                        formik.values['q16-lavman-1'] === 'Çok nadiren'
                      }
                      name="q16-lavman-1"
                      inline
                      type="radio"
                      label="Çok nadiren"
                      value="Çok nadiren"
                      className="check-input"
                    />
                  </Col>
                </Row>
                {/* 16-3 Anal Fissür tedavisi */}
                <Row>
                  <Col md="6">
                    <InputGroup>
                      <InputGroup.Text className="input-group-text">
                        Anal Fissür Tedavisi:
                      </InputGroup.Text>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values['q16-treatment']}
                        className="text-input"
                        name="q16-comment"
                        type="text"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 17. İdrar yolu enfeksiyonu geçirdi mi? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    17. İdrar yolu enfeksiyonu geçirdi mi?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q17'] === 'Hayır'}
                    name="q17"
                    className="check-input"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q17'] === 'Evet'}
                    className="check-input"
                    name="q17"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 18. Ailede ciddi kabızlık sorunu olan başkalarıda var mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    18. İdrar yolu enfeksiyonu geçirdi mi?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q18'] === 'Hayır'}
                    className="check-input"
                    name="q18"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q18'] === 'Evet'}
                    className="check-input"
                    name="q18"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 19. Bilinen başka hastalığı var mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>19. Bilinen başka hastalığı var mı?</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q19'] === 'Hayır'}
                    className="check-input"
                    name="q19"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q19'] === 'Evet'}
                    className="check-input"
                    name="q19"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 20. Ameliyat oldu mu? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>20. Ameliyat oldu mu?</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q20'] === 'Hayır'}
                    className="check-input"
                    name="q20"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q20'] === 'Evet'}
                    className="check-input"
                    name="q20"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 21. Sürekli kullandığı bir ilaç var mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    21. Sürekli kullandığı bir ilaç var mı?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q21'] === 'Hayır'}
                    className="check-input"
                    name="q21"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q21'] === 'Evet'}
                    className="check-input"
                    name="q21"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 22. Davranışsal sorunları var mı? */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="mb-3 align-items-center">
                <Col md="4">
                  <Form.Label>22. Davranışsal sorunları var mı?</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q22'] === 'Var'}
                    className="check-input"
                    name="q22"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q22'] === 'Yok'}
                    className="check-input"
                    name="q22"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
                {formik.values.q22 === 'Var' && (
                  <Row>
                    <Col sm="auto" className="align-items-center">
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={formik.values['q22-1'] === 'Otizm'}
                        name="q22-1"
                        inline
                        type="radio"
                        label="Otizm"
                        className="check-input"
                        value="Otizm"
                      />
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={formik.values['q22-1'] === 'DEHB'}
                        name="q22-1"
                        inline
                        type="radio"
                        label="DEHB"
                        value="DEHB"
                      />
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={
                          formik.values['q22-1'] === 'Anksiyete/ Depresyon'
                        }
                        name="q22-1"
                        inline
                        type="radio"
                        label="Anksiyete/ Depresyon"
                        value="Anksiyete/ Depresyon"
                        className="check-input"
                      />
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={formik.values['q22-1'] === 'Diğer'}
                        name="q22-1"
                        inline
                        type="radio"
                        label="Diğer"
                        value="Diğer"
                        className="check-input"
                      />
                      {formik.values['q22-1'] === 'Diğer' && (
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q22-comment']}
                          className="text-input"
                          name="q22-comment"
                          type="text"
                        />
                      )}
                    </Col>
                  </Row>
                )}
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 23. Fizik Muayene */}
          <Card className="card">
            <Card.Body>
              <Row>
                <Form.Label>
                  <b>Fizik Muayene</b>
                </Form.Label>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-3 align-items-center">
                  {/* Boy */}
                  <Row className="mb-1">
                    <Col sm="auto" className="align-items-center">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Boy (cm):
                        </InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q23-length']}
                          className="text-input"
                          name="q23-length"
                          type="text"
                        />
                        <InputGroup.Text className="input-group-text">
                          Persentil:
                        </InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q23-length-persentil']}
                          className="text-input"
                          name="q23-length-persentil"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  {/* Kilo */}
                  <Row>
                    <Col sm="auto" className="align-items-center">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Kilo (kg):
                        </InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q23-weight']}
                          className="text-input"
                          name="q23-weight"
                          type="text"
                        />
                        <InputGroup.Text className="input-group-text">
                          Persentil:
                        </InputGroup.Text>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values['q23-weight-persentil']}
                          className="text-input"
                          name="q23-weight-persentil"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              {/* 24. Gelişim geriliği var mı?                   */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Gelişim geriliği var mı?</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q24'] === 'Var'}
                    className="check-input"
                    name="q24"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q24'] === 'Yok'}
                    className="check-input"
                    name="q24"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 25. Anüs yerleşimi                                */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Anüs yerleşimi</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q25'] === 'Normal'}
                    className="check-input"
                    name="q25"
                    inline
                    type="radio"
                    label="Normal"
                    value="Normal"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q25'] === 'Ektopik'}
                    className="check-input"
                    name="q25"
                    inline
                    type="radio"
                    label="Ektopik"
                    vallue="Ektopik"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q25'] === 'ARM'}
                    className="check-input"
                    name="q25"
                    inline
                    type="radio"
                    label="ARM"
                    value="ARM"
                  />
                </Col>
              </Form.Group>
              {/* 26. Anal Fissür */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Anal Fissür</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q26'] === 'Var'}
                    className="check-input"
                    name="q26"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q26'] === 'Yok'}
                    className="check-input"
                    name="q26"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 27. Anal Fissür varsa */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Anal Fissür varsa</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q27'] === 'Akut'}
                    className="check-input"
                    name="q27"
                    inline
                    type="radio"
                    label="Akut"
                    value="Akut"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q27'] === 'Kronik'}
                    className="check-input"
                    name="q27"
                    inline
                    type="radio"
                    label="Kronik"
                    value="Kronik"
                  />
                </Col>
              </Form.Group>
              {/* 28. Hemoroid */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Hemoroid</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q28'] === 'Var'}
                    className="check-input"
                    name="q28"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q28'] === 'Yok'}
                    className="check-input"
                    name="q28"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 29. Rektal Prolapsus */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Rektal Prolapsus</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q29'] === 'Var'}
                    className="check-input"
                    name="q29"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q29'] === 'Yok'}
                    className="check-input"
                    name="q29"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 30. Perianal fistül- Abse                       */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Perianal fistül- Abse</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q30'] === 'Var'}
                    className="check-input"
                    name="q30"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q30'] === 'Yok'}
                    className="check-input"
                    name="q30"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 31. Anal stenoz */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Anal stenoz</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q31'] === 'Var'}
                    className="check-input"
                    name="q31"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q31'] === 'Yok'}
                    className="check-input"
                    name="q31"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 32. Sakral Bölge */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Sakral Bölge</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q32'] === 'Normal'}
                    className="check-input"
                    name="q32"
                    inline
                    type="radio"
                    label="Normal"
                    value="Normal"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q32'] === 'Sakral Gamze'}
                    className="check-input"
                    name="q32"
                    inline
                    type="radio"
                    label="Sakral Gamze"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q32'] === 'Kıllanma Artışı'}
                    className="check-input"
                    name="q32"
                    inline
                    type="radio"
                    label="Kıllanma Artışı"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q32'] === 'Kitle'}
                    className="check-input"
                    name="q32"
                    inline
                    type="radio"
                    label="Kitle"
                  />
                </Col>
              </Form.Group>
              {/* 33. Karında ele gelen fekalom */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Karında ele gelen fekalom</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q33'] === 'Var'}
                    className="check-input"
                    name="q33"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q33'] === 'Yok'}
                    className="check-input"
                    name="q33"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 34. Batın Distansiyonu */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Batın Distansiyonu</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q34'] === 'Var'}
                    className="check-input"
                    name="q34"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q34'] === 'Yok'}
                    className="check-input"
                    name="q34"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 35. Rektal Tuşe */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    <b>Rektal Tuşe</b>
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q35'] === 'Yapıldı'}
                    className="check-input"
                    name="q35"
                    inline
                    type="radio"
                    label="Yapıldı"
                    value="Yapıldı"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q35'] === 'Yapılmadı'}
                    className="check-input"
                    name="q35"
                    inline
                    type="radio"
                    label="Yapılmadı"
                    value="Yapılmadı"
                  />
                </Col>
              </Form.Group>
            </Card.Body>
            <Card.Body className="wrap-to-right">
              {/* 36. Rektum dışkı ile dolu mu? */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Rektum dışkı ile dolu mu?</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q36'] === 'Evet'}
                    className="check-input"
                    name="q36"
                    inline
                    type="radio"
                    label="Evet"
                    value="Evet"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q36'] === 'Hayır'}
                    className="check-input"
                    name="q36"
                    inline
                    type="radio"
                    label="Hayır"
                    value="Hayır"
                  />
                </Col>
              </Form.Group>
              {/* 37. Dışkının kıvamı */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Dışkının kıvamı</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q37'] === 'Sert'}
                    className="check-input"
                    name="q37"
                    inline
                    type="radio"
                    label="Sert"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q37'] === 'Balçık'}
                    className="check-input"
                    name="q37"
                    inline
                    type="radio"
                    label="Balçık"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q37'] === 'Sulu'}
                    className="check-input"
                    name="q37"
                    inline
                    type="radio"
                    label="Sulu"
                  />
                </Col>
              </Form.Group>
              {/* 38. Anal kanalın maksimum sıkma gücü */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Anal kanalın maksimum sıkma gücü</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q38'] === 'Zayıf'}
                    name="q38"
                    inline
                    type="radio"
                    label="Zayıf"
                    value="Zayıf"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q38'] === 'Güçlü'}
                    name="q38"
                    inline
                    type="radio"
                    label="Güçlü"
                    value="Güçlü"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={
                      formik.values['q38'] === 'Değerlendirilemedi'
                    }
                    name="q38"
                    inline
                    type="radio"
                    label="Değerlendirilemedi"
                    value="Değerlendirilemedi"
                  />
                </Col>
              </Form.Group>
              {/* 39. Ikınma sırasında anal kanal basıncı            */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Ikınma sırasında anal kanal basıncı </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q39'] === 'Azalıyor'}
                    className="check-input"
                    name="q39"
                    inline
                    type="radio"
                    label="Azalıyor"
                    value="Azalıyor"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={
                      formik.values['q39'] === 'Artıyor (dissinerji?)'
                    }
                    className="check-input"
                    name="q39"
                    inline
                    type="radio"
                    label="Artıyor (dissinerji?)"
                    value="Artıyor (dissinerji?)"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={
                      formik.values['q39'] === 'Değerlendirilemedi'
                    }
                    className="check-input"
                    name="q39"
                    inline
                    type="radio"
                    label="Değerlendirilemedi"
                    value="Değerlendirilemedi"
                  />
                </Col>
              </Form.Group>
              {/* 40. Ikınma sırasında karın kaslarını kasabiliyor mu?            */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    Ikınma sırasında karın kaslarını kasabiliyor mu?
                  </Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q40'] === 'Zayıf'}
                    className="check-input"
                    name="q40"
                    inline
                    type="radio"
                    label="Zayıf"
                    value="Zayıf"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q40'] === 'Güçlü'}
                    className="check-input"
                    name="q40"
                    inline
                    type="radio"
                    label="Güçlü"
                    value="Güçlü"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q40'] === 'Hiç Kasamıyor'}
                    className="check-input"
                    name="q40"
                    inline
                    type="radio"
                    label="Hiç Kasamıyor"
                    value="Hiç Kasamıyor"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={
                      formik.values['q40'] === 'Değerlendirilemedi'
                    }
                    className="check-input"
                    name="q40"
                    inline
                    type="radio"
                    label="Değerlendirilemedi"
                    value="Değerlendirilemedi"
                  />
                </Col>
              </Form.Group>
              {/* 41. Tuşeden sonra patlar tarzda gaita çıkışı var mı?            */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    Tuşeden sonra patlar tarzda gaita çıkışı var mı?
                  </Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q41'] === 'Var'}
                    className="check-input"
                    name="q41"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q41'] === 'Yok'}
                    className="check-input"
                    name="q41"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 42. Ek özellik */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    <b>Ek Özellik</b>
                  </Form.Label>
                </Col>
                <Row>
                  <Col md="12" className="align-items-center">
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.q42}
                      size="sm"
                      name="q42"
                      as="textarea"
                      rows={3}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* 43. Kan Tetkikleri */}
          <Card className="card">
            <Card.Body>
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>
                    <b>Kan Tetkikleri</b>
                  </Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q43'] === 'Anemi'}
                    className="check-input"
                    name="q43"
                    inline
                    type="radio"
                    label="Anemi"
                    value="Anemi"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q43'] === 'Hipotiroidi'}
                    className="check-input"
                    name="q43"
                    inline
                    type="radio"
                    label="Hipotiroidi"
                    value="Hipotiroidi"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q43'] === 'Hipokalemi'}
                    className="check-input"
                    name="q43"
                    inline
                    type="radio"
                    label="Hipokalemi"
                    value="Hipokalemi"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q43'] === 'Diğer'}
                    className="check-input"
                    name="q43"
                    inline
                    type="radio"
                    label="Diğer"
                    value="Diğer"
                  />
                  {formik.values.q43 == 'Diğer' && (
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q43-comment']}
                      className="text-input"
                      size="sm"
                      name="q43-comment"
                      type="text"
                    />
                  )}
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          {/* Direkt Grafi */}
          <Card className="card">
            <Card.Body>
              <Col md="3">
                <Form.Label>
                  <b>Direkt Grafi</b>
                </Form.Label>
              </Col>
            </Card.Body>
            <Card.Body>
              {/* 44. Sakrum Gelişimi */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Sakrum Gelişimi</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q44'] == 'Normal'}
                    className="check-input"
                    name="q44"
                    inline
                    type="radio"
                    label="Normal"
                    value="Normal"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q44'] == 'Anormal'}
                    className="check-input"
                    name="q44"
                    inline
                    type="radio"
                    label="Anormal"
                    value="Anormal"
                  />
                  {formik.values.q44 == 'Anormal' && (
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q44-comment']}
                      className="text-input"
                      name="q44-comment"
                      type="text"
                    />
                  )}
                </Col>
              </Form.Group>
              <Row>
                <Col>
                  <img
                    src={require('/assets/q44.png')}
                    alt="q44"
                    height={250}
                    className="mb-3"
                  />
                </Col>
              </Row>
              {/* 45. Sakral Oran */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Sakral Oran</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values['q45']}
                    size="sm"
                    className="text-input"
                    name="q45"
                    type="text"
                  />
                </Col>
              </Form.Group>
              {/* 46. Fekal impaksiyon */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Fekal impaksiyon</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q46'] == 'Var'}
                    className="check-input"
                    name="q46"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q46'] == 'Yok'}
                    className="check-input"
                    name="q46"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 47. Fekal impaksiyon derecesi */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Fekal impaksiyon</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q47'] == 'Hafif'}
                    className="check-input"
                    name="q47"
                    inline
                    type="radio"
                    label="Hafif"
                    value="Hafif"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q47'] == 'Orta'}
                    className="check-input"
                    name="q47"
                    inline
                    type="radio"
                    label="Orta"
                    value="Orta"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q47'] == 'Ağır'}
                    className="check-input"
                    name="q47"
                    inline
                    type="radio"
                    label="Ağır"
                    value="Ağır"
                  />
                </Col>
              </Form.Group>
              {/* 48. Kolonda dilatasyon */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Kolonda dilatasyon</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q48'] == 'Var'}
                    className="check-input"
                    name="q46"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q48'] == 'Yok'}
                    className="check-input"
                    name="q46"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 49. Kontrastlı Kolon Grafisi */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label> Kontrastlı Kolon Grafisi</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control
                    onChange={formik.handleChange}
                    value={formik.values.q49}
                    name="q49"
                    type="date"
                    className="text-input"
                  />
                </Col>
              </Form.Group>
              {/* 50. Kolonda Fekal impaksiyon varmı? */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Kolonda Fekal impaksiyon varmı?</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q50'] == 'Var'}
                    className="check-input"
                    name="q50"
                    inline
                    type="radio"
                    label="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q50'] == 'Yok'}
                    className="check-input"
                    name="q50"
                    inline
                    type="radio"
                    label="Yok"
                  />
                </Col>
              </Form.Group>
              {/* 51. Kolonda Dilatasyon? */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Kolonda Dilatasyon?</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q51'] == 'Var'}
                    className="check-input"
                    name="q51"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q51'] == 'Yok'}
                    className="check-input"
                    name="q51"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                </Col>
                {formik.values.q51 == 'Var' && (
                  <Row>
                    <Col md="auto" className="wrap-to-right">
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={
                          formik.values['q51-1'] == 'İzole Rektum'
                        }
                        className="check-input"
                        name="q51-1"
                        inline
                        type="radio"
                        label="İzole Rektum"
                        value="İzole Rektum"
                      />
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={
                          formik.values['q51-1'] == 'Rektosigmoid'
                        }
                        className="check-input"
                        name="q51-1"
                        inline
                        type="radio"
                        label="Rektosigmoid"
                        value="Rektosigmoid"
                      />{' '}
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={formik.values['q51-1'] == 'Yaygın'}
                        className="check-input"
                        name="q51-1"
                        inline
                        type="radio"
                        label="Yaygın"
                        value="Yaygın"
                      />
                      {formik.values['q51-1'] == 'Yok' && (
                        <Form.Control
                          onChange={formik.handleChange}
                          defaultChecked={formik.values['q51-1-comment']}
                          className="text-input"
                          name="q51-1-comment"
                          type="text"
                          style={{ width: 50, display: 'inline' }}
                        />
                      )}
                    </Col>
                  </Row>
                )}
              </Form.Group>
              {/* 52. Rektopelvik oran */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Rektopelvik oran</Form.Label>
                </Col>
                <Col md="3">
                  <InputGroup>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q52-rektopelvik-oran']}
                      className="text-input"
                      name="q52-rektopelvik-oran"
                      type="text"
                    />
                    <InputGroup.Text className="input-group-text">
                      &gt; 0,61 = Megarektum
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={
                          formik.values['q52-rektopelvik-oran-1'] === 'Var'
                        }
                        style={{ marginLeft: 10 }}
                        className="check-input"
                        name="q52-rektopelvik-oran-1"
                        inline
                        type="radio"
                        label="Var"
                        value="Var"
                      />
                      <Form.Check
                        onChange={formik.handleChange}
                        defaultChecked={
                          formik.values['q52-rektopelvik-oran-1'] === 'Yok'
                        }
                        className="check-input"
                        name="q52-rektopelvik-oran-1"
                        inline
                        type="radio"
                        label="Yok"
                        value="Yok"
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
              {/* 53. Transizyonel zon */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Transizyonel zon</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q53'] === 'Yok'}
                    className="check-input"
                    name="q53"
                    inline
                    type="radio"
                    label="Yok"
                    value="Yok"
                  />
                  <Form.Check
                    onChange={formik.handleChange}
                    defaultChecked={formik.values['q53'] === 'Var'}
                    className="check-input"
                    name="q53"
                    inline
                    type="radio"
                    label="Var"
                    value="Var"
                  />
                  {formik.values.q53 == 'Var' && (
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q53-comment']}
                      className="text-input"
                      name="q53-comment"
                      type="text"
                      style={{ width: 250 }}
                    />
                  )}
                </Col>
              </Form.Group>
              {/* 54. Tüm kolonun dolum hacmi */}
              <Form.Group as={Row} className="align-items-center">
                <Col md="4">
                  <Form.Label>Tüm kolonun dolum hacmi</Form.Label>
                </Col>
                <Col md="auto" className="align-items-center">
                  <InputGroup>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values['q54']}
                      className="text-input"
                      name="q54"
                      type="text"
                      style={{ width: 100 }}
                    />
                    <InputGroup.Text className="input-group-text">
                      ml
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Row className="wrap-to-right">
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q54-1'] === 'Hipermotil'}
                      className="check-input"
                      name="q54-1"
                      inline
                      type="radio"
                      label="Hipermotil"
                      value="Hipermotil"
                    />
                    <Form.Check
                      onChange={formik.handleChange}
                      defaultChecked={formik.values['q54-1'] === 'Hipomotil'}
                      className="check-input"
                      name="q54-1"
                      inline
                      type="radio"
                      label="Hipomotil"
                      value="Hipomotil"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
}
