import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Box } from '@mui/system';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function BoardWrite() {
  let navigate = useNavigate(); 

  const cookie = window.localStorage.getItem("user")
  const loginId = JSON.parse(cookie).userid
  console.log(loginId)
  
  const [inputData, setInputData] = useState({
    buserid : loginId,
    btitle : '',
    bcontent : ''
  });
  // const {bidx, buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser} =inputData;
  const onChange = (e) => {
    const {value, name} = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });
  }
  const onSubmit = (e) => {
    
    e.preventDefault(); // submit 이벤트 발생시 refresh 방지
    console.log({inputData})
    axios.post("http://localhost:3001/board",inputData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    setInputData({
      buserid : '',
      btitle : '',
      bcontent : ''
    });
    navigate("/board/page/1");

    
  }

  const style= {border: "none", background: "transparent" , resize : "none", width : "100%"}

  return (
    <>
      <h1>글 작성하기</h1>
      <form onSubmit={onSubmit}>
        <TableContainer sx={{ maxWidth: 650, margin: "auto" }} component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell align="center">작성자</TableCell>
              <TableCell><TextField name="buserid" value={inputData.buserid} style={style} readOnly/></TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell align="center">제목</TableCell>
              <TableCell><TextField  name="btitle" value={inputData.btitle} style={style} onChange={onChange} required="required"/></TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 , lineHeight:20 } }} >
              <TableCell align="center">내용</TableCell>
              <TableCell><TextField 
                  multiline
                  rows={10}
                  value={inputData.bcontent}
                  style={style}
                  name='bcontent'
                  onChange={onChange}
                  placeholder="content please"
                  required="required"
                /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button  variant="contained" type="submit">글 저장하기</Button>
        </Box>
      </form>
    </>
  )
}

export default BoardWrite;