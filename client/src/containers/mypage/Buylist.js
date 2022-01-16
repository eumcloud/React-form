import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Template from "../../components/mypage/Template";
import Header from "../../components/mypage/Header";
import NavigationBar from "../../components/main/NavigationBar"
import Buylist from "../../components/mypage/buylist/Buylist";
import Api from "./api";

export default function BuylistContainer(){
    // const { lists }  = useSelector((state)=>({
    //     lists: state.buylist.list,
    // }));
    const [lists, setLists] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchLists = async ()=>{
            try{
                setError(null);
                setLoading(true);

                const result = await Api.get("/mypage/buylist");
                setLists(result.data);
            } catch (e){
                setError(e);
            }
            setLoading(false);
        }
        fetchLists();
    },[]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>새로고침을 눌러주세요</div>;
    if (!lists) return null;

    console.log("Buylist :", lists);

    // const dispatch = useDispatch();

    return <>
        <NavigationBar />
        <Template>
            <Header />
                <ul>
                    {lists.map(l=>{
                        <li key={l.id}>
                            {l.title} | {l.image} | {l.price}
                        </li>
                    })}
                </ul>
               
        </Template>
    </>

}