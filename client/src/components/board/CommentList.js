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
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteIcon from '@mui/icons-material/Delete';




export default function CommentList({bnum}) {
  const navigate = useNavigate();

  let loginId = '';
  const cookie = window.localStorage.getItem("user")
  if(cookie){
    loginId = JSON.parse(cookie).userid
  }

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
    e.preventDefault(); 
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
    <br/>
    <br/>
    {
      loginId &&
      <div style = {{display: 'flex', justifyContent: 'center'}}>
      <form  onSubmit={onSubmit}>
      <input type="hidden" name="cuserid" value={cinput.cuserid} required="required"/>
      <TextField label="Comment" name="ccontent" value={cinput.ccontent} sx={{ minWidth: 400 }} onChange={onChange} required="required"/>
      <IconButton type="submit"><AddCommentIcon/></IconButton>
      </form>
      </div>
    }
    <TableContainer sx={{ maxWidth: 650 , margin: "auto" }}>
      <Table size="small" sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">userid</TableCell>
            <TableCell align="center">content</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commentData.map((row) => (
            <TableRow
              key={row.cidx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              {row.cuserid}
              </TableCell>
              <TableCell align="center">{row.ccontent}</TableCell>
              <TableCell >
                {
                  row.cuserid == loginId
                  ? (
                    <>
                      <form onSubmit={onDelete}>
                        <input name="cidx" id={row.cidx} type='hidden' />
                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <IconButton type="submit"><DeleteIcon fontSize="small"/></IconButton>
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
