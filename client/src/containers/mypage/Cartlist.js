import React, {useState, useEffect} from "react";
import api from "../ax";
import styled from "styled-components";
import Template from "../../components/Template";
import Header from "../../components/Header";
import { CheckBox } from "@mui/icons-material";
import "./cart.css" 
const THBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background: lightblue;
  height: 45px;
  color: white;

  span {
    margin: auto 25px;
  }
`;
//리스트 백그라운드
const ListStyled = styled.div`
  background: white;

  width: 100%;
  display: inline-block;

  a:link,
  a:visited {
    text-decoration: none;
    color: lightgray;
  }
  a:hover {
    text-decoration: underline;
  }

  /* align-items: center; */
`;

const ListContents = styled.div`
  width: 95%;
  color: black;

  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding: 5px;
  font-size: 18px;

  background: white;
  border-radius: 10px;
  border: solid lightgray 1px;

  span {
    margin: auto 10px;
  }
  .plist {
  }
`;

export default function Cartlist() {
    // const { cartlists } = useSelector({ cartlists: state.cartlist.lists,})

    const [lists, setList] = useState(["Loading..."
    ])
    useEffect(() => {
        async() => {
            const response = await api.get("/mypage/cartlist")
            setList(...lists, ...response.data);
          }
      },[]);
    
    return<>
        <Navigator />
        <Template>
            <Header />
            <ul>
                {lists.map(list=>{
                    <ListStyled key={list.no}>
                        <div>{list.title}</div>
                        <div>{list.image}</div>
                        <div>{list.product}</div>
                        <div>{list.price}</div>
                        </ListStyled>
                })}
            </ul>
        </Template>
    </>
}