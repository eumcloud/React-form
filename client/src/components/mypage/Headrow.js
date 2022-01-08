import React from "react";
import styled from "styled-components";


const HeadrowBlock = styled.div`
  background: lightgray;
  border-radius: 25px 25px 0 0;
  width: 100%;
  height: 60px;

  padding-top: 48px 32px 24px 32px;

  border-bottom: 1px solid #e9ecef;

  .title {
    padding: 15px;
    font-size: 24px;
    color: #343a40;
    text-align: center;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export default function Headrow() {
  return (
    <>
      <HeadrowBlock>
        <div className="title">마이페이지</div>
      </HeadrowBlock>
    </>
  );
}
