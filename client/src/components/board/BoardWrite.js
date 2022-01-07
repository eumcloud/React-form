import axios from "axios";
import { setIn } from "formik";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"


function BoardWrite() {
  let navigate = useNavigate(); 
  const [inputs, setInputs] = useState({
    buserid : '',
    btitle : '',
    bcontent : ''
  });
  // const {bidx, buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser} =inputs;
  const onChange = (e) => {
    const [value, name] = e.target;

    setInputs({
      ...inputs,
      [name]:value
    });
  }
  const onSubmit = (e) => {
    e.preventDefault(); // submit 이벤트 발생시 refresh 방지
    console.log({inputs})
    axios.post("http://localhost:5000/board/write",{inputs})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
    })
    setInputs({
      buserid : '',
      btitle : '',
      bcontent : ''
    });
    // navigate("/board/list");

    
  }
  return (
    <>
      <h1>글 쓰기</h1>
      <form onSubmit={onSubmit}>
        <table border="1">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input name="buserid" value={inputs.buserid} onChange={onChange}/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input name="btitle"  value={"뭐야"} /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <input 
                  value={inputs.bcontent}
                  type='text'
                  name='bcontent'
                  onChange={onChange}
                  placeholder="content please"
                  required="required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">글추가쓰</button>
      </form>
    </>
  )
}

export default BoardWrite;