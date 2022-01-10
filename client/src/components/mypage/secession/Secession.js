import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Header from "../Header";
import Button from "@mui/material/Button";

const LastBlock = styled.div`
  display: block;
  margin: 15% auto;
`;
export default function LastQuestion() {
  const lastquestion = "최종 탈퇴확인";
  return (
    <>
      <Template>
        <Header props={lastquestion} />
        <LastBlock>
          <div>
            <label for="id">아이디를 입력해주세요 </label>
            <br />
            <input type="text" value="아이디 입력" for="id" />
            <br />
            <br />
            <label for="pw">비밀번호를 입력해주세요 </label>
            <br />
            <input type="password" value="아이디 입력" for="id" />

            <br />
            <br />
            <Button variant="outlined" color="error">
              최종확인
            </Button>
            {/* <button>최종확인</button> */}
          </div>
        </LastBlock>
      </Template>
    </>
  );
}
