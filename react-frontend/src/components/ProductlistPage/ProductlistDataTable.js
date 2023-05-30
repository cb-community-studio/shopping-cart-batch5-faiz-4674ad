
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ProductlistDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.product}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.brand}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.type}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.format}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.exposure}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.iso}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="product" header="product" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="brand" header="brand" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="type" header="type" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="format" header="format" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="exposure" header="exposure" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="iso" header="iso" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="quantity" header="quantity"  style={{ minWidth: "8rem" }} />
            <Column field="price" header="price"  style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductlistDataTable;