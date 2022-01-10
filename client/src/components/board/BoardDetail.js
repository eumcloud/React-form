import { TextareaAutosize } from "@mui/material";
import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom"
import { Box } from '@mui/system';
import Button from '@mui/material/Button';



function BoardDetail() {
  let params = useParams();
  const detailnum = parseInt(params.detail)

  let navigate = useNavigate();

  const [inputData, setInputData] = useState({
    bidx:'',
    buserid:'',
    btitle:'',
    bcontent:'',
    bhit:'',
    blikeuser:''
  });

  const callApi = async() => {
    const response = await axios.get("http://localhost:3001/api/boards")
    const datas = response.data.filter(obj => obj.bidx === detailnum)
    setInputData(datas[0])
  }
  
  useEffect(() => {
    callApi();
  },[]);

  
  const onClick = ()=>{
    navigate("/board/update")
  }

  const onSubmit = (e) => {
    e.preventDefault(); // submit 이벤트 발생시 refresh 방지
    console.log("a")
    axios.delete("http://localhost:3001/api/boards",{detailnum})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    
  }
  const style= {border: "none", background: "transparent" , resize : "none"}

  return (
    <>
      <h1>글 상세보기</h1>
        <table border="1">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input name="buserid" value={inputData.buserid} style={style} readOnly/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input name="btitle" value={inputData.btitle} style={style} readOnly/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><TextareaAutosize name="bcontent" value={inputData.bcontent} style={style} readOnly/></td>
            </tr>
            <tr>
              <td>조회수</td>
              <td><input name="bhit" value={inputData.bhit} style={style} readOnly/></td>
            </tr>
            <tr>
              <td>좋아요수</td>
              <td><input name="blikeuser" value={inputData.blikeuser} style={style} readOnly/></td>
            </tr>
          </tbody>
        </table>
        {/* 로그인된 id와 일치할 경우 */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button  variant="contained" onClick={onClick}>글 수정하기</Button>
        </Box>
        <form onSubmit={onSubmit}>
          <input name="bidx" type='hidden' value={detailnum} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button  variant="contained" type="submit">글 삭제하기</Button>
          </Box>
        </form>
    </>
  )
}


export default BoardDetail;