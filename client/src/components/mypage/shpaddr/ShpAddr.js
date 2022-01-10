import React from "react";
import styled from "styled-components";

import Template from "../Template";
import Header from "../Header";

const Contents = styled.div`
    background:lightgray;
    width: 100%;
    height: 80%;

    margin:5% auto;
    padding: 15px;
    
    text-align:center;
    font-size: 16px;


`;
export default function ShpAddr(){
    const lists = [
        {sid:1, memo:"사무실", addr: "서울 중구 소공로35", dt:"231호"},
        {sid:2, memo:"집", addr: "서울 중구 소공로35", dt:"231호"},
    ]
    const inputs = lists.map(list=> {<>
        <label>주소지 입력</label>
        <input type="text" placeholder="배송지 구분" value={list.memo}/>
        <input type="text" placeholder="주소지 입력" value={list.addr}/>
        <input type="text" placeholder="상세주소" value={list.dt}/>
        </>
    })
    return<>
        <Template>
            <Header props={"배송지 관리"} />
            <Contents>
                    {inputs}
                <form action="">
                <label>배송지 추가</label>
        <input type="text" placeholder="배송지 구분" />
        <input type="text" placeholder="주소지 입력" />
        <input type="text" placeholder="상세주소" />
                </form>
                </Contents>
        </Template>
    </>
}
