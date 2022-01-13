import axios from "axios";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Template from "./Template"
import {useNavigate} from "react-router-dom"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Fontbutton = styled.div`

  h1 {
  font-size: 30px;
  text-align: center;
  }

  .but { 
    text-align: center;
  }

  Table {
    text-align: center;
  }

  textarea {
    resize:none;
  }
  TableBody {
    text-align: center;
  }
`;

const imagestyle = {
  width: 150,
  height: 150
}


function ProductDetail() {
    let params = useParams();
    const bnum = parseInt(params.id)
    console.log(bnum)
    const [inputData, setInputData] = useState([
    ]);
    const callApi = async() => {
        const response = await axios.get("http://localhost:3001/api/products")
        const datas = response.data.filter(obj => obj.id === bnum)
        setInputData(datas[0]);
      }

      useEffect(() => {
        callApi();
      },[]);
      let navigate = useNavigate()
      function backPage(e) {      
        e.preventDefault();
        navigate(-1);
      } 
      
      const [number, setNumber] = useState(1);

      const onIncrease = () => {
        setNumber(number + 1);
      }
    
      const onDecrease = () => {
        setNumber(number - 1);
      }

      const Totalprice = number * inputData.realprice

      return (
        <>     
        <Template> 
        <br />
        <Fontbutton>
          <h1>{inputData.product}</h1>
           <Table>
              <TableBody>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={inputData.image} style={imagestyle} /></TableCell>
                </TableRow>
                <TableRow>       
                  <TableCell>번호</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {inputData.id}</TableCell>
                </TableRow>
                  <TableCell>가격</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {inputData.price}</TableCell>
                <TableRow> 
                  <TableCell>상품명</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {inputData.product}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>상세설명</TableCell>
                  <TableCell><textarea cols="30" rows="8" value={inputData.content}/></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>수량</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={onDecrease} variant="text">-</Button>{number}<Button onClick={onIncrease} variant="text">+</Button></TableCell>
                </TableRow>
                <TableRow>
                <TableCell>결제 예정금액</TableCell>
                <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  KRW {Totalprice}
                  </TableCell>
                </TableRow>
                </TableBody>
            </Table> 
            <br />
            <div className="but">
              <Stack>
              <Button variant="text">구매하기</Button><Button variant="text" onClick={backPage}>목록으로</Button>
              </Stack>
            </div>
            </Fontbutton>
            </Template>
            </>
            );
}

export default ProductDetail;