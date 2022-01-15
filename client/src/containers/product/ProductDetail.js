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
import Payment from "./Payment";


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

      // function buyPage(e) {
      //   e.preventDefault();
      //   navigate("/Payment")
      // }
      
      const [number, setNumber] = useState(1);

      const onIncrease = () => {
        setNumber(number + 1);
      }
    
      const onDecrease = () => {
        setNumber(number - 1);
      }

      const Totalprice = number * inputData.realprice

      useEffect(() => 
      { const jquery = document.createElement("script");
      jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js"; 
      const iamport = document.createElement("script"); 
      iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
      document.head.appendChild(jquery);
      document.head.appendChild(iamport);
      return () => {
          document.head.removeChild(jquery);
          document.head.removeChild(iamport);
      }
  },[]); 

    const onClickPayment = () => { 
      const { IMP } = window;
      IMP.init("imp31715307");
      //결제 데이터 정의
      const data = 
      { pg: "html_inicis",
        pay_method: "card",
        merchant_uid:`mid_${new Date().getTime()}`,
        name: "변정현",
        amount: `${Totalprice}`,
        custom_data: {
            name: "부가정보",
            desc: "세부 부가정보"
        },
        buyer_name: "변정현",
        buyer_tel: "01065512902",
        buyer_email: "wjdgus2903@naver.com",
        buyer_addr: "강동구 천호",
        buyer_postalcode: "05258"
  };

  IMP.request_pay(data,callback);
  }
  const callback = (response) => {
      const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
      if (success) { alert('결제 성공');}
      else { alert(`결제 실패 : ${error_msg}`);}
  }

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
                  <TableCell>
                    <img src={inputData.image} style={imagestyle} /></TableCell>
                </TableRow>
                <TableRow>       
                  <TableCell>번호</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {inputData.id}</TableCell>
                </TableRow>
                  <TableCell>가격</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {inputData.price}</TableCell>
                <TableRow> 
                  <TableCell>상품명</TableCell>
                  <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {inputData.product}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>상세설명</TableCell>
                  <TableCell><textarea cols="30" rows="8" value={inputData.content}/></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>수량</TableCell>
                  <TableCell>
                    <Button onClick={onDecrease} variant="text">-</Button>{number}<Button onClick={onIncrease} variant="text">+</Button></TableCell>
                </TableRow>
                <TableRow>
                <TableCell>결제 예정금액</TableCell>
                <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  KRW {Totalprice}
                  </TableCell>
                </TableRow>
                </TableBody>
            </Table> 
            <br />
            <div className="but">
              <Stack>
              <Button onClick={onClickPayment}variant="text">구매하기</Button>
              <Button variant="text" onClick={backPage}>목록으로</Button>
              </Stack>
            </div>
            </Fontbutton>
            </Template>
            </>
            );
}

export default ProductDetail;