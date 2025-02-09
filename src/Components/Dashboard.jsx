import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import ViolationPieChart from '../Charts/ViolationPieChart';
import LineChartSimple from "../Charts/LineChart";

const chartSetting = {
    // xAxis: [
    //     {
    //         label: 'rainfall (mm)',
    //     },
    // ],
    // width: 500,
    // height: 400,
    series: [{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }],
    height: 300,
    sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};

const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Feb',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
    },
    {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: 'Apr',
    },
    {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: 'May',
    },
    {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: 'June',
    },
    {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: 'July',
    },
    {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: 'Aug',
    },
    {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: 'Sept',
    },
    {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: 'Oct',
    },
    {
        london: 67,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: 'Nov',
    },
    {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: 'Dec',
    },
];

export function valueFormatter(value) {
    return `${value}mm`;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Dashboard = () => {
    const [formData, setFormData] = React.useState({
        make: '',
        model: '',
        variants: '',
        year: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid size={12}>
                    <Item>
                        <FormControl sx={{ m: 0, minWidth: '18%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Make</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formData.make}
                                label="Make"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Mak 1</MenuItem>
                                <MenuItem value={20}>Make 2</MenuItem>
                                <MenuItem value={30}>Make 3</MenuItem>
                            </Select>
                        </FormControl>
                        &nbsp;
                        <FormControl sx={{ m: 0, minWidth: '18%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Model</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formData.model}
                                label="Model"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Model 1</MenuItem>
                                <MenuItem value={20}>Model 2</MenuItem>
                                <MenuItem value={30}>Model 3</MenuItem>
                            </Select>
                        </FormControl>
                        &nbsp;
                        <FormControl sx={{ m: 0, minWidth: '18%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Variants</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formData.variants}
                                label="Variants"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Variant 1</MenuItem>
                                <MenuItem value={20}>Variant 2</MenuItem>
                                <MenuItem value={30}>Variant 3</MenuItem>
                            </Select>
                        </FormControl>
                        &nbsp;
                        <FormControl sx={{ m: 0, minWidth: '18%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formData.year}
                                label="Year"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>2021</MenuItem>
                                <MenuItem value={20}>2022</MenuItem>
                                <MenuItem value={30}>2023</MenuItem>
                            </Select>
                        </FormControl>
                        &nbsp;
                        <button style={{ minWidth: "12%", marginTop: "10px", backgroundColor: "yellow", color: "black" }}>GO</button>
                        &nbsp;
                        <button style={{ minWidth: "12%", backgroundColor: "yellow", color: "black" }}>MORE FILTERS</button>
                    </Item>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid size={2}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Total Amount Claimed
                                </Typography>
                                <Typography variant="h5" component="div">
                                    120 &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={2}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Variants
                                </Typography>
                                <Typography variant="h5" component="div">
                                    120 &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={2}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Dealers
                                </Typography>
                                <Typography variant="h5" component="div">
                                    120 &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={2}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Units in Operation
                                </Typography>
                                <Typography variant="h5" component="div">
                                    120 &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={2}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Warranty Claims
                                </Typography>
                                <Typography variant="h5" component="div">
                                    120 &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={2}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Service Compliants
                                </Typography>
                                <Typography variant="h5" component="div">
                                    120 &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid size={4}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Most Occuring Violation Category
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Speed Controlling &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Model with Most Claims
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Santa Fe &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>
                        <Card variant="standard">
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12 }}>
                                    Part with Most Claims
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Ignition &nbsp; <span style={{ fontSize: "12px" }}>2% &nbsp; 0.2%</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid size={6}>
                    <Item>
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            {...chartSetting}
                        />
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                        <ViolationPieChart />
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            {...chartSetting}
                        />
                    </Item>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid size={12}>
                    <Item>
                        <LineChartSimple />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;