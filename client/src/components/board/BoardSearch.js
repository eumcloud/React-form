import { useEffect, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom"
import axios from "axios";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import NativeSelect from '@mui/material/NativeSelect';




export default function BoardSearch() {
  let navigate = useNavigate(); 
  const location = useLocation();
  const locstate = location.state
  const rescat = locstate.searchcat
  const resvalue = locstate.searchvalue

  
  const [inputData, setInputData] = useState([{
    bidx: 0,
    bcontent: "",
    bhit: "",
    blikeuser: "",
    btitle: "",
    buserid: "",
    modidate: "",
    regdate: ""
  }])

  const callApi = async() => {
    const response = await axios.get("http://localhost:3001/board")
      setInputData(response.data)
  }

  useEffect(() => {
    callApi();
  },[]);


  const onClick = (e) => {
  const idx = e.currentTarget.id
  axios.put("http://localhost:3001/board/hit",{bidx:idx})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })

  navigate(`/board/detail/${idx}`)
  }

  const onSearch = (e) => {
    e.preventDefault();
    const searchcat = e.target.category.value
    const searchvalue = e.target.search.value
    console.log(`searching ${searchcat} is ${searchvalue}`)
    navigate(`/board/search`,{state:
      {
        searchcat:searchcat,
        searchvalue:searchvalue
      }
    })
  }

  let searchlist;
  if(rescat == "buserid") {
    searchlist = inputData.filter(obj => obj.buserid.includes(resvalue))
  }
  else {
    searchlist = inputData.filter(obj => obj.btitle.includes(resvalue))
  }


  console.log(searchlist)
  return (
    <>
    <h1>검색 결과</h1>
    <TableContainer >
      <Table size="small" sx={{ maxWidth: 650, margin: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>작성자</TableCell>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">조회수</TableCell>
            <TableCell align="right">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { searchlist.length != 0 
          ? searchlist.map((row) => (
            <TableRow
              id={row.bidx} 
              onClick={onClick}
              hover
              key={row.bidx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:"pointer" }}
            >
              <TableCell component="th" scope="row">
                {row.buserid}
              </TableCell>
              <TableCell align="right"  ><h3>{row.btitle}</h3></TableCell>
              <TableCell align="right">{row.bhit}</TableCell>
              <TableCell align="right">{row.regdate}</TableCell>
            </TableRow>
          ))
          :
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
            <TableCell align="right"><h2>검색기록이 없습니다</h2> </TableCell>
        </TableRow>
        }
        </TableBody>
      </Table>
    </TableContainer>
    <div style = {{display: 'flex', justifyContent: 'center'}}>
    <form onSubmit={onSearch}>
      <NativeSelect
        size="large"
        inputProps={{
          name: 'category'
        }}
      >
        <option value="buserid"> 작성자</option>
        <option value="btitle"> 제목</option>
      </NativeSelect>
      <TextField size="small" name ="search" type="text"  />
      <Button size="large" type="submit" variant="contained">검색</Button>
    </form>
    </div>
    </>
  );
}
