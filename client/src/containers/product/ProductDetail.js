import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { TextareaAutosize } from "@mui/material";
import HeadProduct from "./HeadProduct";


function ProductDetail() {
    let params = useParams();
    const bnum = parseInt(params.productdetail)

    const [inputData, setInputData] = useState({
        id:"",
        image:"",
        product:"",
        price:"",
        content:"",
    });
    const callApi = async() => {
        const response = await axios.get("http://localhost:3001/api/products")
        const datas = response.data.filter(obj => obj.id === bnum)
        setInputData([...datas[0],...response.data])
      }

      useEffect(() => {
        callApi();
      },[]);

      return (
        <>         
          <h1>1{inputData.product}</h1>
            <table border="1">
              <tbody>
                <tr>
                  <td>번호</td>
                  <td><input name="id" value={inputData.id} readOnly/></td>
                </tr>
                <tr>
                  <td>이미지</td>
                  <td><input name="image" value={inputData.image} readOnly/></td>
                </tr>
                <tr>
                  <td>상세설명</td>
                  <td><TextareaAutosize name="content" value={inputData.content}  readOnly/></td>
                </tr>
                <tr>
                  <td>상품명</td>
                  <td><input name="product" value={inputData.product}  readOnly/></td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td><input name="price" value={inputData.price}  readOnly/></td>
                </tr>
              </tbody>
            </table> 
            </>
            );
}

export default ProductDetail;