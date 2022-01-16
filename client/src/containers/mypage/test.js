import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import api from "./api";


export default function Test(){
    // const [lists, setList] = useState({})
    const { lists } = useSelector((state)=>({
        lists: state.buylist.list,
    }))
    const dispatch = useDispatch();

    useEffect(()=>{
        api.get("/buylist").then(response => setList(response.data))
    }, [])
    return<>
    
        <ul>
        {lists.map(list=>{
            <li key={list.no}>{list.title}</li>
        })}
        </ul>
    </>
}