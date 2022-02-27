/* eslint-disable react/no-unused-state */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
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

export default class PatientList extends Component {
  patientsCollectionRef = collection(db, 'patients');

  formsCollectionRef = collection(db, 'forms');

  constructor(props: any) {
    super(props);
    this.state = {
      filters: { global: { matchMode: FilterMatchMode.CONTAINS, value: '' } },
      globalFilterValue1: '',
      expandedRows: null,
      Patients: [],
      Forms: [],
    };
  }

  // eslint-disable-next-line react/sort-comp
  getPatients = async () => {
    // eslint-disable-next-line promise/always-return
    this.getForms();
    onSnapshot(collection(db, 'patients'), async (snapshot) => {
      const datas = await Promise.all(
        snapshot.docs.map(async (doc) => ({
          ...doc.data(),
          PatientId: doc.id,
          Reports: await this.getForms(doc.id),
        }))
      );
      this.setState({ Patients: datas });
    });
  };

  // eslint-disable-next-line consistent-return
  getForms = async (patientId = '') => {
    if (patientId !== '') {
      const q = query(
        this.formsCollectionRef,
        where('PatientId', '==', patientId)
      );
      const datas = await getDocs(q);
      return datas.docs.map((data) => ({
        ...data.data(),
        FormId: data.id,
      }));
    }
  };

  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.getPatients();
  }

  setFilters1 = (value: any) => {
    // eslint-disable-next-line no-underscore-dangle
    const _filters = { ...this.state.filters };
    _filters.global.value = value;
    this.setState({ filters: _filters });
    this.setState({ globalFilterValue1: value });
  };

  onGlobalFilterChange1 = (e: any) => {
    this.setFilters1(e.target.value);
  };

  rowExpansionTemplate(data) {
    return (
      <div className="orders-subtable">
        <DataTable
          selectionMode="single"
          value={data.Reports}
          responsiveLayout="scroll"
          // selection={this.state.selectedProduct1}
          onSelectionChange={
            (e) => console.log(e)
            // this.setState({ selectedProduct1: e.value })
          }
        >
          <Column hidden field="ReportId" header="Form No" sortable />
          <Column field="FormName" header="Form Adı" sortable />
          <Column field="FormDate" header="Tarih" sortable />
        </DataTable>
      </div>
    );
  }

  dateTemplate(rowData, column) {
    return new Date(rowData[column.field]).toLocaleDateString('en-GB');
  }

  render() {
    return (
      <div className="m-5">
        <div className="flex justify-content-between mb-1">
          <div>
            <Button
              type="button"
              icon="pi pi-filter-slash"
              label="Temizle"
              className="p-button-outlined"
              onClick={() => {
                this.setFilters1('');
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
                this.getPatients();
              }}
            />
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                value={this.state.globalFilterValue1}
                onChange={this.onGlobalFilterChange1}
                placeholder="Aranacak kelime"
              />
            </span>
          </div>
        </div>
        <DataTable
          dataKey="PatientId"
          value={this.state.Patients}
          stripedRows
          size="small"
          responsiveLayout="scroll"
          className="orders-subtable"
          selectionMode="single"
          showGridlines
          filters={this.state.filters}
          emptyMessage="Kayıt bulunamadı."
          globalFilterFields={['FullName', 'IdentityNo']}
          expandedRows={this.state.expandedRows}
          rowExpansionTemplate={this.rowExpansionTemplate}
          onRowToggle={(e) => this.setState({ expandedRows: e.data })}
        >
          <Column expander style={{ width: '3em' }} />
          <Column
            field="RecordDate"
            body={this.dateTemplate}
            header="Tarih"
            sortable
          />
          <Column field="PatientId" header="Id" hidden sortable />
          <Column field="IdentityNo" header="T.C. Kimlik No" sortable />
          <Column field="FullName" header="Hasta Adı Soyadı" sortable />
          <Column
            field="Birthday"
            body={this.dateTemplate}
            header="Doğum Tarihi"
            sortable
          />
          <Column field="Age" header="Yaş" sortable />
          <Column field="Gender" header="Cinsiyet" sortable />
          <Column field="Phone" header="Telefon" sortable />
          <Column field="ProtocolNo" header="Protokol No" sortable />
        </DataTable>
      </div>
    );
  }
}
