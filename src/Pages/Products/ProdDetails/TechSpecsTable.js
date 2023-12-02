import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 'Text Here',),
  createData('Ice cream sandwich', 'Text Here',),
  createData('Eclair', 'Text Here',),
  createData('Cupcake', 'Text Here',),
  createData('Gingerbread', 'Text Here',),
  createData('Frozen yoghurt', 'Text Here',),
  createData('Ice cream sandwich', 'Text Here',),
  createData('Eclair', 'Text Here',),
  createData('Cupcake', 'Text Here',),
  createData('Gingerbread', 'Text Here',),
  createData('Frozen yoghurt', 'Text Here',),
  createData('Ice cream sandwich', 'Text Here',),
  createData('Eclair', 'Text Here',),
  createData('Cupcake', 'Text Here',),
  createData('Gingerbread', 'Text Here',),
  createData('Frozen yoghurt', 'Text Here',),
  createData('Ice cream sandwich', 'Text Here',),
  createData('Eclair', 'Text Here',),
  createData('Cupcake', 'Text Here',),
  createData('Gingerbread', 'Text Here',),
];

export default function TechSpecsTable() {
  return (
    <>
    
    <Box id="mui-table">
    <TableContainer className='tb-container' sx={{ maxHeight: 180 }}>
    <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Parameter</TableCell>
            <TableCell align="left">Specification</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody sx={{ height: 150 }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>


    </>
  );
}
