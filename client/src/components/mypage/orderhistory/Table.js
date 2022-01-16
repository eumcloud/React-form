import React from "react";
import styled from "styled-components";

const TableBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
  padding-bottom: 48px;
`;

export default function MypageList() {
  return (
    <TableBlock>
      <h3>내 정보변경</h3>
      <h3>구매내역 확인</h3>
    </TableBlock>
  );
}
