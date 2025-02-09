import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS, valueFormatter } from './webUsageStats';

const ViolationPieChart = () => {
  const [radius, setRadius] = React.useState(100);
  const [itemNb, setItemNb] = React.useState(5);
 

  return (
    <Box sx={{ width: '100%', textAlign:"center" }}>
      <PieChart
        height={300}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            innerRadius: radius,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
        skipAnimation={false}
      />
      
    </Box>
  );
}

export default ViolationPieChart;