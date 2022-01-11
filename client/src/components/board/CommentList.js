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




export default function CommentList({bnum}) {
  const [commentData, setCommentData] = useState([])
  const callApi = async() => {
    const response = await axios.get("http://localhost:3001/api/comments")
    setCommentData(response.data.filter(comment => comment.board_idx === bnum))
  }
  
  useEffect(() => {
    callApi();
  }, [commentData]);


  const [cinput,setCinput] = useState({
    cuserid:'로그인id',
    ccontent:'',
    board_idx: bnum
  })



  const onChange = (e) => {
    const {value, name} = e.target;

    setCinput({
      ...cinput,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/comments",cinput)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    setCinput({
      cuserid:'로그인id',
      ccontent:'',
      board_idx:bnum
    });

  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <input type="hidden" name="cuserid" value={cinput.cuserid} />
      <input name="ccontent" value={cinput.ccontent} onChange={onChange}/>
      <button type="submit">댓글 작성</button>
    </form>
    <TableContainer >
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userid</TableCell>
            <TableCell >content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commentData.map((row) => (
            <TableRow
              key={row.cidx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.cuserid}
              </TableCell>
              <TableCell >{row.ccontent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
