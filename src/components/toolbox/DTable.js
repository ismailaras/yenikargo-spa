import DataTable, {createTheme} from 'react-data-table-component';
import React from "react";

createTheme('yenikargo', {
    text: {
        primary: '#2c3e50',
        secondary: '#95a5a6',
    },
    background: {
        default: '#FFFFFF',
    },
    context: {
        background: '#FFFFFF',
        text: '#2c3e50',
    },
    divider: {
        default: '#95a5a6',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});

const customStyles={
    rows: {
        style: {
          fontSize:'17px',
        }
      }
}

const DTable = (props) => {
    const paginationComponentOptions =
        {
            rowsPerPageText: 'Səhifə başı ' + props.title,
            rangeSeparatorText: '',
            selectAllRowsItemText: 'Hamısı'
        }
    return (
        <div className="card">
            <div className="card-header" style={{fontSize:'22px'}}>
                {props.title} cədvəli
            </div>
            <div className="card-body" style={{fontSize:'20px'}}>
                <DataTable
                    title={props.title + " cədvəli"}
                    columns={props.cols}
                    theme="yenikargo"
                    striped={true}
                    highlightOnHover={true}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent={props.title + ' tapılmadı.'}
                    selectableRows={true}
                    expandableRows={true}
                    expandableRowsComponent={props.expandableRowsComponent}
                    clearSelectedRows={props.clearSelectedRows}
                    onSelectedRowsChange={props.handleChange}
                    pagination={true}
                    selectableRowsHighlight={true}
                    responsive={true}
                    customStyles={customStyles}
                    data={props.data.sort((a, b) => b.id - a.id)}/>
            </div>
            <div className="card-footer">
                {props.buttons.map(button => (
                   button
                ))}
            </div>
        </div>
    );
}

export default DTable;