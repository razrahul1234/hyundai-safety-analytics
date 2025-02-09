import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { saveAs } from 'file-saver';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ExportDropdown = ({ data }) => {
  const handleExport = (event) => {
    const format = event.target.value;

    if (format === 'csv') {
      const csvData = data.map(row => ({
        // Map your data fields here
        user: row.user,
        emailid: row.emailid,
        role: row.role,
        status: row.status
      }));

      const csvLink = document.createElement('a');
      csvLink.href = `data:text/csv;charset=utf-8,${encodeURIComponent(
        csvData.map(e => Object.values(e).join(',')).join('\n')
      )}`;
      csvLink.download = 'data.csv';
      csvLink.click();
    } else if (format === 'pdf') {
      const doc = new jsPDF();
      autoTable(doc, {
        head: [['User', 'Email ID', 'Role', "Status"]],
        body: data.map(row => [row.user, row.emailid, row.role, row.status]),
      })
      doc.save('data.pdf');
    }
  };

  return (
    <FormControl variant="outlined" style={{ minWidth: 120 }}>
      <InputLabel>Download Report As</InputLabel>
      <Select onChange={handleExport} label="Export">
        <MenuItem value="csv">CSV</MenuItem>
        <MenuItem value="pdf">PDF</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ExportDropdown;