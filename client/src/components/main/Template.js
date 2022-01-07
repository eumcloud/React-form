import React from 'react'
import styled from "styled-components"
// import "./template.css";
const TemplateBlock = styled.div`
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