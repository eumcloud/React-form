import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Header from "../Header";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const LastBlock = styled.div`
  display: block;
  margin: 15% auto;
`;
export default function LastQuestion() {
  const Headtitle = "비밀번호 변경";
  return (
    <>
      <Template>
        <Header props={Headtitle} />
        <LastBlock>
          <div>
            <br />
            <label for="pw">현재 비밀번호를 입력해주세요 </label>
            <br />
            <input type="password" value="pass2" for="id" />
            <br />
            <br />
            <label for="pw">변경할 비밀번호를 입력해주세요 </label>
            <br />
            <input type="password" value="pass2" for="id" />
            <br />
            <label for="pw">비밀번호를 다시 입력해주세요 </label>
            <br />
            <input type="password" value="pass2" for="id" />

            <br />
            <br />

            <Button variant="contained" endIcon={<SendIcon />}>
              변경하기
            </Button>
          </div>
        </LastBlock>
      </Template>
    </>
  );
}
