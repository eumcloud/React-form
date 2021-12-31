import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  background-color: grey;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  padding: 10px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  flex-direction: column;
  .date-align {
    text-align: right;
  }
`;

export default function MypageTemplate({ children }) {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <>
      <div className="date-align">
        <h5>{dateString}</h5>
        <div className="day">{dayName}</div>
      </div>
      <TemplateBlock>{children}</TemplateBlock>
    </>
  );
}
