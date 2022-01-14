import React from 'react'
import Footer from '../../components/main/Footer';
import NavigationBar from '../../components/main/NavigationBar'
import HeadRow from "../../components/mypage/orderhistory/Headline";
import Table from "../../components/mypage/orderhistory/MypageList";
import Template from "../../components/mypage/orderhistory/Template";

export default function MypageContainer() {
    return (
        <div>
            <NavigationBar />
                <Template>
                    <HeadRow />
                    <Table />    
                </ Template>
            <Footer />
        </div>
    )
}
