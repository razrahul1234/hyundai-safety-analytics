import React, { useState } from "react";
import DataTable from "react-data-table-component"
import ExportDropdown from './ExportDropdown';
import { IconButton } from '@mui/material';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const UserManagement = () => {
    const columns = [
        {
            name: "User",
            selector: (row) => row.user,
            sortable: true
        },
        {
            name: "Email ID",
            selector: (row) => row.emailid,
            sortable: true
        },
        {
            name: "Role",
            selector: (row) => row.role,
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true
        },
        {
            name: "Action",
            // selector: (row) => row.action
            cell: (row) => (
                <div>
                  <IconButton onClick={() => handleEdit(row)} color="primary">
                    <ModeEditOutlinedIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row)} color="secondary">
                    <DeleteOutlinedIcon />
                  </IconButton>
                </div>
              ),
              ignoreRowClick: true,
              allowOverflow: true,
              button: true,
        }
    ];
    const data = [
        { "user": "user1", "emailid": "user1@test.com", "role": "Admin", "status": "Active", "action": "Delete" },
        { "user": "user2", "emailid": "user2@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user3", "emailid": "user3@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user4", "emailid": "user4@example.com", "role": "User", "status": "Inactive", "action": "Edit" },
        { "user": "user5", "emailid": "user5@example.com", "role": "Admin", "status": "Active", "action": "Delete" },
        { "user": "user6", "emailid": "user6@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user7", "emailid": "user7@test.com", "role": "Manager", "status": "Active", "action": "Delete" },
        { "user": "user8", "emailid": "user8@sample.com", "role": "User", "status": "Inactive", "action": "Edit" },
        { "user": "user9", "emailid": "user9@example.com", "role": "Manager", "status": "Active", "action": "Delete" },
        { "user": "user10", "emailid": "user10@test.com", "role": "User", "status": "Active", "action": "Edit" },
        { "user": "user11", "emailid": "user11@sample.com", "role": "Admin", "status": "Inactive", "action": "Delete" },
        { "user": "user12", "emailid": "user12@example.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user13", "emailid": "user13@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user14", "emailid": "user14@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user15", "emailid": "user15@example.com", "role": "Manager", "status": "Inactive", "action": "Delete" },
        { "user": "user16", "emailid": "user16@test.com", "role": "User", "status": "Active", "action": "Edit" },
        { "user": "user17", "emailid": "user17@sample.com", "role": "Admin", "status": "Inactive", "action": "Delete" },
        { "user": "user18", "emailid": "user18@example.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user19", "emailid": "user19@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user20", "emailid": "user20@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user21", "emailid": "user21@example.com", "role": "Manager", "status": "Inactive", "action": "Delete" },
        { "user": "user22", "emailid": "user22@test.com", "role": "User", "status": "Active", "action": "Edit" },
        { "user": "user23", "emailid": "user23@sample.com", "role": "Admin", "status": "Inactive", "action": "Delete" },
        { "user": "user24", "emailid": "user24@example.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user25", "emailid": "user25@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user26", "emailid": "user26@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user27", "emailid": "user27@example.com", "role": "Manager", "status": "Inactive", "action": "Delete" },
        { "user": "user28", "emailid": "user28@test.com", "role": "User", "status": "Active", "action": "Edit" },
        { "user": "user29", "emailid": "user29@sample.com", "role": "Admin", "status": "Inactive", "action": "Delete" },
        { "user": "user30", "emailid": "user30@example.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user31", "emailid": "user31@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user32", "emailid": "user32@sample.com", "role": "Manager", "status": "Inactive", "action": "Delete" },
        { "user": "user33", "emailid": "user33@sample.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user34", "emailid": "user34@example.com", "role": "Admin", "status": "Inactive", "action": "Edit" },
        { "user": "user35", "emailid": "user35@example.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user36", "emailid": "user36@example.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user37", "emailid": "user37@test.com", "role": "Admin", "status": "Inactive", "action": "Edit" },
        { "user": "user38", "emailid": "user38@example.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user39", "emailid": "user39@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user40", "emailid": "user40@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user41", "emailid": "user41@example.com", "role": "Manager", "status": "Inactive", "action": "Delete" },
        { "user": "user42", "emailid": "user42@test.com", "role": "User", "status": "Active", "action": "Edit" },
        { "user": "user43", "emailid": "user43@sample.com", "role": "Admin", "status": "Inactive", "action": "Delete" },
        { "user": "user44", "emailid": "user44@example.com", "role": "Manager", "status": "Active", "action": "Edit" },
        { "user": "user45", "emailid": "user45@test.com", "role": "User", "status": "Inactive", "action": "Delete" },
        { "user": "user46", "emailid": "user46@sample.com", "role": "Admin", "status": "Active", "action": "Edit" },
        { "user": "user47", "emailid": "user47@example.com", "role": "Manager", "status": "Inactive", "action": "Delete" },
        { "user": "user48", "emailid": "user48@test.com", "role": "User", "status": "Active", "action": "Edit" },
        { "user": "user49", "emailid": "user49@sample.com", "role": "Admin", "status": "Inactive", "action": "Delete" },
        { "user": "user50", "emailid": "user50@example.com", "role": "Manager", "status": "Active", "action": "Edit" }
    ];
    return (
        <div style={{ backgroundColor: "white" }}>
            <div style={{display:'flex', msFlexDirection:"row", placeSelf:"end",  padding: '10px', gap:"10px"}}>
            <button style={{backgroundColor:"yellow", color:"black", height:"40px", margin:'auto'}}>Add New</button>
            <ExportDropdown data={data} />
            </div>
            
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </div>
    )
}

export default UserManagement;