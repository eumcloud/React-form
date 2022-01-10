import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Header from "../Header";
import { Button, Checkbox } from "@mui/material";

const HeadRow = styled.div`
  /* background: lightgoldenrodyellow; */
  height: 45px;
  display: flex;
  justify-content: space-around;
  margin: 0 3%;
  ol,
  ul,
  li {
    margin: auto;
    list-style: none;
  }
`;
const BtnBlock = styled.div`
  /* background: lightcyan; */
  height: 45px;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
  span {
    margin: auto 0;
  }
`;
const ListBlock = styled.div`
  /* background: lightpink; */
  padding: 5px;
  height: 100%;
  Button {
  }
`;
const ListItems = styled.div`
  /* background: lightgrey; */
  height: 40px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 5%;

  span {
    margin: auto 0;
    padding: 0 10px;
  }
`;

export default function Qlist() {
  const headtitle = "1:1 문의";
  const dt = new Date();
  const headRow = ["no", "제목", "날짜"];
  const rows = headRow.map((row) => {
    return <li>{row}</li>;
  });

  const Items = [
    { qid: 1, title: "제목1", desc: "내용1", date: dt.toLocaleDateString() },
    { qid: 2, title: "제목1", desc: "내용1", date: dt.toLocaleDateString() },
    { qid: 3, title: "제목1", desc: "내용1", date: dt.toLocaleDateString() },
    { qid: 4, title: "제목1", desc: "내용1", date: dt.toLocaleDateString() }
  ];

  return (
    <>
      <Template>
        <Header props={headtitle} />
        <BtnBlock>
          <span></span>
          <span>
            <Button> 글쓰기</Button>
            <Button> 삭제</Button>
          </span>
        </BtnBlock>
        <HeadRow>
          <Checkbox />
          {rows}
        </HeadRow>
        <ListBlock>
          {Items.map((item, index) => (
            <ListItems>
              <Checkbox value={item.qid} />
              <span>{item.qid}</span>
              <span>{item.title}</span>
              {/* <span>{item.desc}</span> */}
              <span>{item.date}</span>
            </ListItems>
          ))}
        </ListBlock>
      </Template>
    </>
  );
}
