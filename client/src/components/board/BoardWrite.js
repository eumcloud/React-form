import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Box } from '@mui/system';
import { TextareaAutosize } from "@mui/material";
import Button from '@mui/material/Button';


function BoardWrite() {
  let navigate = useNavigate(); 
  const [inputData, setInputData] = useState({
    buserid : '로그인 id',
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
    axios.post("http://localhost:3001/board/write",inputData)
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

  const style= {border: "none", background: "transparent" , resize : "none"}

  return (
    <>
      <h1>글 작성하기</h1>
      <form onSubmit={onSubmit}>
        <table border="1">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input name="buserid" value={inputData.buserid} readOnly/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input name="btitle" value={inputData.btitle} style={style} onChange={onChange}/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <TextareaAutosize 
                  value={inputData.bcontent}
                  style={style}
                  name='bcontent'
                  onChange={onChange}
                  placeholder="content please"
                  required="required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button  variant="contained" type="submit">글 저장하기</Button>
        </Box>
      </form>
    </>
  )
}

export default BoardWrite;