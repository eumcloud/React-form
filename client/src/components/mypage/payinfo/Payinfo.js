import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Header from "../Header";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const LastBlock = styled.div`
  display: block;
  margin: 15% auto;

  .cardNum {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    input {
      width: 15%;
    }
  }
`;
export default function LastQuestion() {
  const Headtitle = "결제정보 변경";
  return (
    <>
      <Template>
        <Header props={Headtitle} />
        <LastBlock>
          <div>
            <br />
            <label for="cardNum">카드번호를 입력해주세요 </label>
            <br />
            <div className="cardNum">
              <input type="text" placeholder="카드번호" for="cardNum" />
              <input type="password" placeholder="******" for="cardNum" />
              <input type="password" placeholder="******" for="cardNum" />
              <input type="password" placeholder="******" for="cardNum" />
            </div>
            <br />
            <br />
            <label for="pw">결제비밀번호 6자리를 입력해주세요 </label>
            <br />
            <input type="password" placeholder="******" for="id" />
            <br />
            <label for="pw">결제비밀번호 6자리를 다시 입력해주세요 </label>
            <br />
            <input type="password" placeholder="******" for="id" />

            <br />
            <br />

            <Button variant="contained" endIcon={<SendIcon />}>
              등록하기
            </Button>
          </div>
        </LastBlock>
      </Template>
    </>
  );
}
