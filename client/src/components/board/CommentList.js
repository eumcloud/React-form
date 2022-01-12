import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { TextareaAutosize } from "@mui/material";




export default function CommentList({bnum}) {
  const navigate = useNavigate();

  const cookie = window.localStorage.getItem("user")
  const loginId = JSON.parse(cookie).userid
  console.log(loginId)

  const [commentData, setCommentData] = useState([{
    cidx:0,
    cuserid:'',
    ccontent:'',
    board_idx:0
  }])
  
  useEffect(() => {
    const callApi = async() => {
      const response = await axios.get("http://localhost:3001/board/comment")
      const comments = response.data.filter(comment => comment.board_idx === bnum)
      setCommentData(comments)
    }
    callApi()
  }, []);


  const [cinput,setCinput] = useState({
    cuserid:loginId,
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
    axios.post("http://localhost:3001/board/comment",cinput)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    setCinput({
      cuserid:loginId,
      ccontent:'',
      board_idx:bnum
    });
    navigate(0);
  }

  const onDelete = e => {
    e.preventDefault(); // submit 이벤트 발생시 refresh 방지
    axios.delete("http://localhost:3001/board/comment",{
      params: {
        cidx: e.target.cidx.id
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    navigate(0);
  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <input type="hidden" name="cuserid" value={cinput.cuserid} />
      <TextareaAutosize name="ccontent" value={cinput.ccontent} style={{resize : "none"}} onChange={onChange} />
      <button type="submit">댓글 작성</button>
    </form>
    <TableContainer >
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userid</TableCell>
            <TableCell >content</TableCell>
            <TableCell ></TableCell>
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
              <TableCell >
                {
                  row.cuserid == loginId
                  ? (
                    <>
                      <form onSubmit={onDelete}>
                        <input name="cidx" id={row.cidx} type='hidden' />
                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                          <Button  variant="contained" type="submit">댓글 삭제</Button>
                        </Box>
                      </form>
                    </>
                  )
                  :null
                }
              
        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
