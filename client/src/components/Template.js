import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  text-align: center;
  background-color: grey;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);

  padding: 10px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  flex-direction: column;
  .date-align {
    text-align: right;
  }
`;
export default function Tempate({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}
