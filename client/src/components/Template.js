import React from 'react'
import styled from "styled-components"
// import "./template.css";
const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  background-color: grey;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);

  padding: 10px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  flex-direction: column;
  .date-align {
    text-align: right;
  }
`;

const TemplatesBlock = ({children})=>{
    return(
        <div>
          <TemplateBlock >
            {children}
            </TemplateBlock>
        </div>
    )
} 

export default TemplateBlock;