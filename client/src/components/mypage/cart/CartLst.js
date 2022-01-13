import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Template from "../Template";
import Header from "../Header";
import { CheckBox } from "@mui/icons-material";

// 리스트 컬럼 정리
const THBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background: lightblue;
  height: 45px;
  color: white;

  span {
    margin: auto 25px;
  }
`;
//리스트 백그라운드
const ListStyled = styled.div`
  background: white;

  width: 100%;
  display: inline-block;

  a:link,
  a:visited {
    text-decoration: none;
    color: lightgray;
  }
  a:hover {
    text-decoration: underline;
  }

  /* align-items: center; */
`;

const ListContents = styled.div`
  width: 95%;
  color: black;

  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding: 5px;
  font-size: 18px;

  background: white;
  border-radius: 10px;
  border: solid lightgray 1px;

  span {
    margin: auto 10px;
  }
  .plist {
  }
`;
export default function Lists() {
  const urlpath = "http://localhost:3001/mypage/cart"
  // const resp = await axios.get(urlpath)
  // console.log(resp);
  const [lists, setLists] = useState([])
  
  const callApi = async() => {
    const response = await axios.get(urlpath)
    setLists([...lists,...response.data])
  }
  console.log(lists);

  useEffect(() => {
    callApi();
  },[]);

  const pHeader = ["상품명", "이미지", "가격", "날짜"];
  const dt = new Date(); //will be change
  // const products = [
  //   {
  //     id: 1,
  //     title: "1234",
  //     url: "/list1",
  //     img: "https://placeimg.com/64/64/1",
  //     price: 3300,
  //     date: dt.toLocaleDateString()
  //   },
  //   {
  //     id: 2,
  //     title: "1234",
  //     url: "/list2",
  //     img: "https://placeimg.com/64/64/1",
  //     price: 5500,
  //     date: dt.toLocaleDateString()
  //   },
  //   {
  //     id: 3,
  //     title: "1234",
  //     url: "/list3",
  //     img: "https://placeimg.com/64/64/1",
  //     price: 1200,
  //     date: dt.toLocaleDateString()
  //   },
  //   {
  //     id: 4,
  //     title: "1234",
  //     url: "/list4",
  //     img: "https://placeimg.com/64/64/1",
  //     price: 3300,
  //     date: dt.toLocaleDateString()
  //   }
  // ];
  const title = "장바구니";

  // 체크박스 넘버 가져올때 ref

  return (
    <>
      <Template>
        <Header props={title} />
        <THBlock>
          <CheckBox value="chkAll" />
          {pHeader.map((hh) => (
            <span>{hh}</span>
          ))}
        </THBlock>
        <ListStyled>
          {lists.map((tt) => (
            <div className="plist">
              <a href={tt.url}>
                <ListContents>
                  <CheckBox value={tt.cno} />
                  <span>{tt.title}</span>
                  <img src={tt.img} />
                  <span> {tt.price}</span>
                  <span> {tt.date}</span>
                </ListContents>
              </a>
            </div>
          ))}
        </ListStyled>
      </Template>
    </>
  );
}
