import React from 'react'
import Footer from '../../components/main/Footer';
import NavigationBar from '../../components/main/NavigationBar'
import Header from "../../components/mypage/Header";
import MypageList from "../../components/mypage/MypageList";
import Template from "../../components/mypage/Template";

export default function MypageContainer() {
    return (
        <div>
            <NavigationBar />
            <Template>
                <Header />
                <MypageList />    
            </ Template>
            <Footer />
        </div>
    )
}
