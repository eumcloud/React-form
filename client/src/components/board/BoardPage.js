import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Paging.css'; 
import Pagination from "react-js-pagination";
// import Paper from '@mui/material/Paper';




export default function BoardPage() {
  let navigate = useNavigate(); 
  
  let params = useParams();
  const pagenum = parseInt(params.page)
  const [inputData, setInputData] = useState([{
    bidx: 'x',
    buserid: '운영자',
    btitle: '공지사항',
    bcontent: '',
    regdate: '',
    modidate: '',
    bhit: '1238',
    blikeuser: '1111'
  }])

  const callApi = async() => {
    const response = await axios.get("http://localhost:3001/api/boards")
    setInputData([...inputData,...response.data])
  }
  
  useEffect(() => {
    callApi();
  },[]);

  const Paging = () => {
    let navigate = useNavigate(); 
    const [page, setPage] = useState(parseInt(params.page));
    const handlePageChange = (page) => { 
      setPage(page); 
      navigate(`/board/page/${page}`);
    }; 
    return (
      <Pagination 
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={inputData.length}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange} 
      />
    ); 
  }; 

  const pagelist = inputData.slice((pagenum-1)*10,pagenum*10)

  return (
    <>
    <h1>글 목록</h1>
    <TableContainer >
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">hit</TableCell>
            <TableCell align="right">regdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pagelist.map((row) => (
            
            <TableRow
              key={row.bidx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.buserid}
              </TableCell>
              <TableCell align="right" onClick={()=> navigate(`/board/detail/${row.bidx}`)} >{row.btitle}</TableCell>
              <TableCell align="right">{row.bhit}</TableCell>
              <TableCell align="right">{row.regdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Paging />
    </>
  );
}
