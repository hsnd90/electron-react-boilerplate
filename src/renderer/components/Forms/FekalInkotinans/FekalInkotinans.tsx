/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default function FekalInkotinans() {
  return (
    <div className="m-3">
      {/* <PatientInfoForm patient={selectedPatient} /> */}

      <Container fluid>
        <Card>
          <Card.Title>FEKAL İNKONTİNANS DEĞERLENDİRME FORMU</Card.Title>
        </Card>
        <div className="row">
          <div className="col-3 form-label">Barsak Eğitim Programı</div>
          <div className="col-9">
            <select name="q1" className="form-select" defaultValue={0}>
              <option value="0">Seçiniz</option>
              <option value="before">Eğitim Öncesi</option>
              <option value="after">Eğitim Sonrası</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-label">
            <strong>BAYLOR KONTİNANS SKALASI</strong>
          </div>
        </div>
        {/* 1. Çocuğunuz yalnızca geceleri büyük tuvaletini kaçırır mı? */}
        <div className="row">
          <div className="col-12">
            <div className="row form-label">
              <p>1. Çocuğunuz yalnızca geceleri büyük tuvaletini kaçırır mı?</p>
            </div>
            <div className="row pl-3">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q1"
                  />
                  <label className="form-check-label">Hiç</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q1"
                  />
                  <label className="form-check-label">Bu hafta 1 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q1"
                  />
                  <label className="form-check-label">Bu hafta 2 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q1"
                  />
                  <label className="form-check-label">Bu hafta 3-6 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q1"
                  />
                  <label className="form-check-label">Her gece</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2. Çocuğunuz yalnızca gündüzleri büyük tuvaletini kaçırır mı? */}
        <div className="row">
          <div className="col-12">
            <div className="row form-label">
              <p>
                2. Çocuğunuz yalnızca gündüzleri büyük tuvaletini kaçırır mı?
              </p>
            </div>
            <div className="row pl-3">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q2"
                  />
                  <label className="form-check-label">Hiç</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q2"
                  />
                  <label className="form-check-label">Bu hafta 1 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q2"
                  />
                  <label className="form-check-label">Bu hafta 2 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q2"
                  />
                  <label className="form-check-label">Bu hafta 3-6 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q2"
                  />
                  <label className="form-check-label">Her gece</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3. Çocuğunuz yalnızca gündüzleri idrarını kaçırır mı? */}
        <div className="row">
          <div className="col-12">
            <div className="row form-label">
              <p>3. Çocuğunuz yalnızca gündüzleri idrarını kaçırır mı?</p>
            </div>
            <div className="row pl-3">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q3"
                  />
                  <label className="form-check-label">Hiç</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q3"
                  />
                  <label className="form-check-label">Bu hafta 1 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q3"
                  />
                  <label className="form-check-label">Bu hafta 2 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q3"
                  />
                  <label className="form-check-label">Bu hafta 3-6 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q3"
                  />
                  <label className="form-check-label">Her gece</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4. Çocuğunuz büyük tuvaletini yaparken ağrıdan şikayet ediyor mu? */}
        <div className="row">
          <div className="col-12">
            <div className="row form-label">
              <p>
                4. Çocuğunuz büyük tuvaletini yaparken ağrıdan şikayet ediyor
                mu?
              </p>
            </div>
            <div className="row pl-3">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q4"
                  />
                  <label className="form-check-label">Hiç</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q4"
                  />
                  <label className="form-check-label">Bu hafta 1 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q4"
                  />
                  <label className="form-check-label">Bu hafta 2 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q4"
                  />
                  <label className="form-check-label">Bu hafta 3-6 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q4"
                  />
                  <label className="form-check-label">Her gece</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 5. Çocuğunuzun bazen büyük tuvaletini yapma ihtiyacı olmasına rağmen isteyerek tuttuğunu düşünüyor musunuz? */}
        <div className="row">
          <div className="col-12">
            <div className="row form-label">
              <p>
                5. Çocuğunuzun bazen büyük tuvaletini yapma ihtiyacı olmasına
                rağmen isteyerek tuttuğunu düşünüyor musunuz?
              </p>
            </div>
            <div className="row pl-3">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q5"
                  />
                  <label className="form-check-label">Hiç</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q5"
                  />
                  <label className="form-check-label">Bu hafta 1 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q5"
                  />
                  <label className="form-check-label">Bu hafta 2 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q5"
                  />
                  <label className="form-check-label">Bu hafta 3-6 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q5"
                  />
                  <label className="form-check-label">Her gece</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 6. Çocuğunuz gaz çıakrırken büyük tuvaletini kaçırır mı? */}
        <div className="row">
          <div className="col-12">
            <div className="row form-label">
              <p>6. Çocuğunuz gaz çıkarırken büyük tuvaletini kaçırır mı?</p>
            </div>
            <div className="row pl-3">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q6"
                  />
                  <label className="form-check-label">Hiç</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q6"
                  />
                  <label className="form-check-label">Bu hafta 1 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q6"
                  />
                  <label className="form-check-label">Bu hafta 2 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q6"
                  />
                  <label className="form-check-label">Bu hafta 3-6 gece</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexCheckDefault"
                    name="q6"
                  />
                  <label className="form-check-label">Her gece</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Puan */}
        <div className="row">
          <div className="col-2">
            <label>
              Puan: <strong>{0}</strong>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="form-label">
            <strong>KRICKENBERG SINIFLAMASI</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label className="form-label">Inkontinans</label>
          </div>
          <div className="col-9">
            <select defaultValue={0} className="form-select" id="">
              <option value="0">Seçiniz</option>
              <option value="i-grade1">Grade 1 - Aralıklı kaçırıyor</option>
              <option value="i-grade2">
                Grade 2 - Her gün kaçırıyor Sosyal sorunlara yol açmamakta
              </option>
              <option value="i-grade3">
                Grade 3 - Her gün kaçırıyor Sosyal sorunlara yol açmakta
              </option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label className="form-label">Konstipasyon</label>
          </div>
          <div className="col-9">
            <select defaultValue={0} className="form-select" id="">
              <option value="0">Seçiniz</option>
              <option value="k-grade1">
                Grade 1 - Diyet değişiklikler yeterli
              </option>
              <option value="k-grade2">Grade 2 - Laksatifle gerilemekte</option>
              <option value="k-grade3">
                Grade 3 - Diyet ve laksatife dirençli
              </option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
}
