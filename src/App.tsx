import {
  ShellBar,
  ThemeProvider,
  Table,
  TableColumn,
  TableRow,
  TableCell
} from '@ui5/webcomponents-react';
import React from 'react';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
        <Table columns={<><TableColumn>Column 1</TableColumn><TableColumn>Column 2</TableColumn></>}>
          <TableRow>
           <TableCell>1.1</TableCell>
           <TableCell>1.2</TableCell>
          </TableRow>
          <TableRow>
           <TableCell>2.1</TableCell>
           <TableCell>2.2</TableCell>
          </TableRow>
        </Table>
    
    </ThemeProvider>
  );
}

export default App;
