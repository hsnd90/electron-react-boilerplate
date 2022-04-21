/* eslint-disable react/no-unused-state */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/destructuring-assignment */
import { Component, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientList.css';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import db from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function PatientList(props) {
  const patientsCollectionRef = collection(db, 'patients');
  const formsCollectionRef = collection(db, 'forms');
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [Patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [expandedRows, setExpandedRows] = useState([]);
  const [Forms, setForms] = useState([]);
  const [globalFilterValue1, setglobalFilterValue1] = useState('');
  const [filters, setFilters] = useState({
    global: { matchMode: FilterMatchMode.CONTAINS, value: '' },
  });

  // eslint-disable-next-line react/sort-comp
  const getPatients = async () => {
    onSnapshot(collection(db, 'patients'), async (snapshot) => {
      const datas = await Promise.all(
        snapshot.docs.map(async (doc) => ({
          ...doc.data(),
          PatientId: doc.id,
          Reports: await getForms(doc.id),
        }))
      );
      setPatients(datas);
    });
  };

  // eslint-disable-next-line consistent-return
  const getForms = async (patientId = '') => {
    if (patientId !== '') {
      const q = query(formsCollectionRef, where('PatientId', '==', patientId));
      const datas = await getDocs(q);
      return datas.docs.map((data) => ({
        ...data.data(),
        FormId: data.id,
      }));
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  const setFilters1 = (value: any) => {
    // eslint-disable-next-line no-underscore-dangle
    const _filters = { ...filters };
    _filters.global.value = value;
    setFilters(_filters);
    setglobalFilterValue1(value);
  };

  const onGlobalFilterChange1 = (e: any) => {
    setFilters1(e.target.value);
  };

  const rowExpansionTemplate = (data: { Reports: any[] | undefined }) => {
    return (
      <div className="orders-subtable">
        <DataTable
          emptyMessage="Kayıt bulunamadı."
          selectionMode="single"
          value={data.Reports}
          responsiveLayout="scroll"
          onSelectionChange={(e) => {
            let patient = Patients.find(
              (x) => x.PatientId == e.value.PatientId
            );
            navigate(e.value.path, {
              replace: true,
              state: { ...e.value, formType: 'edit', ...patient },
            });
          }}
        >
          <Column hidden field="ReportId" header="Form No" sortable />
          <Column field="FormName" header="Form Adı" sortable />
          <Column field="FormInsertDate" header="Ekleme Tarihi" sortable />
          <Column field="FormUpdateDate" header="Güncelleme Tarihi" sortable />
        </DataTable>
      </div>
    );
  };

  const onHide = () => {
    setVisible(!visible);
  };

  const footer = (
    <div>
      {/* <Button label="Yes" icon="pi pi-check" onClick={onHide} />
      <Button label="No" icon="pi pi-times" onClick={onHide} /> */}
    </div>
  );

  const onSelectedPatient = (e) => {
    setSelectedPatient(e.data);
    setVisible(true);
  };

  const dateTemplate = (
    rowData: { [x: string]: string | number | Date },
    column: { field: string | number }
  ) => {
    return new Date(rowData[column.field]).toLocaleDateString('en-GB');
  };

  const navigateToForm = (path) => {
    navigate(path, {
      replace: true,
      state: { ...selectedPatient, formType: 'new' },
    });
  };

  return (
    <div className="m-5">
      <Dialog
        header="Form Seçiniz"
        footer={footer}
        visible={visible}
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        modal
        onHide={onHide}
      >
        <Button
          className="m-1 text-center"
          onClick={() => {
            navigateToForm('/form/kabizlik-form');
          }}
        >
          Kabızlık Formu
        </Button>
        <Button
          className="m-1"
          onClick={() => {
            navigateToForm('/form/barsak-yonetim');
          }}
        >
          Barsak Yönetim Formu
        </Button>
        <Button
          className="m-1"
          onClick={() => {
            navigateToForm('/form/kolorektal-form');
          }}
        >
          Kolorektal Hasta Formu
        </Button>
        <Button
          className="m-1"
          onClick={() => {
            navigateToForm('/form/laksatif-form');
          }}
        >
          Laksatif Günlük Formu
        </Button>
      </Dialog>
      <div className="flex justify-content-between mb-1">
        <div>
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Temizle"
            className="p-button-outlined"
            onClick={() => {
              setFilters1('');
            }}
          />
        </div>
        <h3>Hasta Listesi</h3>
        <div>
          <Button
            type="button"
            icon="pi pi-refresh"
            className="p-button-outlined mr-1"
            onClick={() => {
              getPatients();
            }}
          />
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              className="search-input"
              value={globalFilterValue1}
              onChange={onGlobalFilterChange1}
              placeholder="Aranacak kelime"
            />
          </span>
        </div>
      </div>
      <DataTable
        dataKey="PatientId"
        paginator
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        value={Patients}
        stripedRows
        size="small"
        onRowClick={onSelectedPatient}
        responsiveLayout="scroll"
        className="orders-subtable"
        selectionMode="single"
        showGridlines
        filters={filters}
        emptyMessage="Kayıt bulunamadı."
        globalFilterFields={['FullName', 'IdentityNo']}
        expandedRows={expandedRows}
        rowExpansionTemplate={rowExpansionTemplate}
        onRowToggle={(e) => setExpandedRows(e.data)}
      >
        <Column expander style={{ width: '3em' }} />
        <Column
          field="RegisterDate"
          body={dateTemplate}
          header="Tarih"
          sortable
        />
        <Column field="PatientId" header="Id" hidden sortable />
        <Column field="IdentityNo" header="T.C. Kimlik No" sortable />
        <Column field="FullName" header="Hasta Adı Soyadı" sortable />
        <Column
          field="Birthday"
          body={dateTemplate}
          header="Doğum Tarihi"
          sortable
        />
        <Column field="Age" header="Yaş" sortable />
        <Column field="Gender" header="Cinsiyet" sortable />
        <Column field="PhoneNumber" header="Telefon" sortable />
        <Column field="ProtocolNo" header="Protokol No" sortable />
      </DataTable>
    </div>
  );
}
