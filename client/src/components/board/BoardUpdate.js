import { TextareaAutosize } from "@mui/material";
import { Box } from '@mui/system';
import axios from "axios";
import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom"
import Button from '@mui/material/Button';


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
    axios.put("http://localhost:3001/api/boards",inputData)
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
        <table border="1">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input name="buserid" value={inputData.buserid} style={style} readOnly/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input name="btitle" value={inputData.btitle} style={style} onChange={onChange} /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><TextareaAutosize name="bcontent" value={inputData.bcontent} style={style} onChange={onChange} /></td>
            </tr>
          </tbody>
        </table>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained">변경 내용 저장</Button>
        </Box>
      </form>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={()=>navigate(-1)} variant="contained">수정 취소</Button>
        </Box>
    </>
  )
}


export default BoardUpdate;