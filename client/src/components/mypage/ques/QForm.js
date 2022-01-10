import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Header from "../Header";
import {
  Select,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Box
} from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";

const ContBlock = styled.div`
  //background: lightsalmon;
  padding: 2% 0;
  height: 85%;
  margin: 3%;
  div {
    margin: auto;
  }
  .btns {
    float: right;
  }
  .textarea {
    margin: 10px;
    width: 95%;
    height: 88%;
  }
`;
export default function Qform() {
  const Headertitle = "문의";
  const qbtns = [
    { name: "목록", url: "/list" },
    { name: "수정", url: "/modif" },
    { name: "삭제", url: "/modif" },
    { name: "저장", url: "/submit" }
  ];

  const [type, setType] = React.useState("유형1");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const tfHeight = "80%";
  return (
    <>
      <Template>
        <Header props={Headertitle} />
        <ContBlock>
          {/* <Select /> */}
          <div className="btns">
            {/* {qbtns.map((bb) => {
              <Button href={bb.url}>{bb.name}</Button>;
            })} */}
            <Button href={qbtns[0].url}> {qbtns[0].name} </Button>
            <Button href={qbtns[1].url}> {qbtns[1].name} </Button>
            <Button href={qbtns[2].url}> {qbtns[2].name} </Button>
            <Button href={qbtns[3].url}> {qbtns[3].name} </Button>
          </div>
          <div>
            <Box sx={{ minWidth: 120, margin: 25 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">문의유형</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="문의유형"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value={"상품문의"}>상품문의</MenuItem>
                  <MenuItem value={"주문/결제"}>주문/결제</MenuItem>
                  <MenuItem value={"배송문의"}>배송문의</MenuItem>
                  <MenuItem value={"기타"}>기타</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {/* <div>   <span>2유형</span> 셀렉트박스  </div> */}
          <div className="textarea">
            <TextField
              fullWidth
              multiline
              rows={12}
              id="outlined-basic"
              label="내용입력"
              variant="outlined"
              style={{ tfHeight }}
            ></TextField>
          </div>
        </ContBlock>
      </Template>
    </>
  );
}
