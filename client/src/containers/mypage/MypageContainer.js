import React from 'react'
import Footer from '../../components/main/Footer';
import NavigationBar from '../../components/main/NavigationBar'
import Headrow from "../../components/mypage/Headrow";
import MypageList from "../../components/mypage/MypageList";
import Template from "../../components/mypage/MypageTemplate";

export default function MypageContainer() {
    return (
        <div>
            <NavigationBar />
            <Template>
                <Headrow />
                <MypageList />    
            </ Template>
            <Footer />
        </div>
    )
}
