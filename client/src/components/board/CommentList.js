import { useEffect, useState } from "react";
import axios from "axios";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextareaAutosize } from "@mui/material";




export default function CommentList() {
  const [inputData, setInputData] = useState([{
    cidx: '',
    cuserid: '',
  }])

  const callApi = async() => {
    const response = await axios.get("http://localhost:3001/api/comments")
    console.log(inputData)
    console.log(response.data)
    setInputData([...inputData,...response.data])
  }
  
  useEffect(() => {
    callApi();
  }, []);

  console.log(inputData)
  

  return (
    <>
    <form onSubmit={onSubmit}>
      <TextareaAutosize name="btitle" value={inputData.btitle} onChange={onChange}/>
    </form>
    <TableContainer >
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell align="right">userid</TableCell>
            <TableCell align="right">content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputData.map((row) => (
            <TableRow
              key={row.bidx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.buserid}
              </TableCell>
              <TableCell align="right">{row.btitle}</TableCell>
              <TableCell align="right">{row.bhit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
