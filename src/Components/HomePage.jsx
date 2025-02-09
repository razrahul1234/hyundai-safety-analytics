import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, CssBaseline, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import UserManagement from './UserManagement';
import Dashboard from "./Dashboard";

const drawerWidth = 251;


const HomePage = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState('dashboard');

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (itemId) => {
        setSelectedItem(itemId);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case 'dashboard':
                return <>
                    <h2 style={{ margin: 0, fontWeight: 100 }}>Dashboard</h2>
                    <Dashboard />
                </>;
            case 'safety-analytics':
                return <h2>Safety Analytics 360 Content</h2>;
            case 'data-source':
                return <h2>Data Source Content</h2>;
            case 'user-management':
                return <>
                    <h2 style={{ margin: 0, fontWeight: 100 }}>User Management</h2>
                    <UserManagement />
                </>;
            default:
                return <h2>Welcome</h2>;
        }
    };

    return (
        <div>
            <CssBaseline />
            <AppBar position="static" className='header'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" className='titlename'>
                        SAFETY ANALYTICS
                    </Typography>
                    <Box sx={{ flexGrow: 15 }} />
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        Close={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Box display="flex">
                <Drawer className='drawer'
                    variant="persistent"
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}>
                    {/* <List>
                        <ListItemText primary="Menu 1" />
                        <ListItem button>
                            <ListItemText primary="Menu 2" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Menu 3" />
                        </ListItem>
                    </List> */}

                    <Box className="treeview" sx={{ minHeight: 352, minWidth: 250, padding: '10px' }}>
                        <SimpleTreeView>
                            <TreeItem itemId="dashboard" label="Dashboard" onClick={() => handleItemClick('dashboard')}></TreeItem>
                            <TreeItem itemId="safety-analytics" label="Safety Analytics 360" onClick={() => handleItemClick('safety-analytics')}></TreeItem>
                            <TreeItem itemId="config" label="Configuration">
                                <TreeItem itemId="data-source" label="Data Source" onClick={() => handleItemClick('data-source')} />
                                <TreeItem itemId="user-management" label="User Management" onClick={() => handleItemClick('user-management')} />
                            </TreeItem>
                        </SimpleTreeView>
                    </Box>
                </Drawer>
                <main style={{
                    flexGrow: 1,
                    padding: '16px',
                    marginLeft: drawerOpen ? drawerWidth : 0,
                    transition: 'margin 0.3s',
                    backgroundColor: "#f2f4f4",
                    "min-height": "100vh"
                }}>
                    {/* Your page content goes here */}
                    {renderContent()}
                </main>
            </Box>

        </div>
    );
};

export default HomePage;