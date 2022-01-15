import { TextareaAutosize } from "@mui/material";
import { Box } from '@mui/system';
import axios from "axios";
import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom"
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";


function BoardUpdate() {

  const location = useLocation();
  const locstate = location.state
  const bnum = locstate.bidx;

  let navigate = useNavigate();

  const [inputData, setInputData] = useState({
    bidx: bnum,
    buserid: locstate.buserid,
    btitle: locstate.btitle,
    bcontent: locstate.bcontent,
  });
  const onChange = (e) => {
    const {value, name} = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });
  }
  const onSubmit = (e) => {
    e.preventDefault(); // submit 이벤트 발생시 refresh 방지
    console.log("a")
    axios.put("http://localhost:3001/board",inputData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    navigate(-1);
  }

  const style= {border: "none", background: "transparent" , resize : "none"}

  return (
    <>
      <h1>글 수정하기</h1>
      <form onSubmit={onSubmit}>
      <input type="hidden" name="buserid" value={inputData.buserid} />
        <TableContainer sx={{ maxWidth: 650 , margin: "auto" }} component={Paper}>
      <Table  size="small"  aria-label="simple table">
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell align="center">제목</TableCell>
              <TableCell><TextField name="btitle" value={inputData.btitle} onChange={onChange}/></TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell align="center">내용</TableCell>
              <TableCell><TextField multiline rows={10} name="bcontent" value={inputData.bcontent} onChange={onChange}/></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Button type="submit" variant="contained">변경 내용 저장</Button>
        </Box>
      </form>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Button onClick={()=>navigate(-1)} variant="contained">수정 취소</Button>
        </Box>
    </>
  )
}


export default BoardUpdate;