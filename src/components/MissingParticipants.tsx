import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(user: any, cause: any) {
  return { user, cause };
}

const rows = [
  createData("Frozen yoghurt", "hh"),
  createData("Ice cream sandwich", "hgcvbddddddddddddddddddddddddddddddd"),
  createData("Eclair", "aaaaaaaa"),
  createData("Cupcake", "aaaa"),
  createData("Gingerbread", "yegduj"),
];

export default function MissingParticipants() {
  return (
    <TableContainer
      component={Paper}
      >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>חייל </TableCell>
            <TableCell align='right'>למה?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.user}
              </TableCell>
              <TableCell align='right'>{row.cause}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
